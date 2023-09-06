// 守护进程启动
import { login } from './authen'
import { promisePoller } from './tools'
import Config from '../config.json'
import { getRiverForumList } from './transaction'
import { sendNotify } from './notify'



async function exec() {
    const tokens = await login();
    if (tokens.data.rs === 1) {
        const start = promisePoller(
            async () => {
                // 二手交易boardId: 61
                const getTranscationPost = getRiverForumList("61");
                const { token, secret } = tokens.data;
                const posts = await getTranscationPost(token, secret);

                const storage: Array<{ nickname: string, title: string, subject: string }> = []
                // 所有帖子轮询一遍后，总结再发送，一次发送一个邮件即可。
                posts.data.list.forEach(item => {
                    for (const keyword of Config.pushNotifyConfig.keywords) {
                        if (item.title.includes(keyword) || item.subject.includes(keyword)) {
                            storage.push({
                                nickname: item.user_nick_name,
                                title: item.title,
                                subject: item.subject
                            })
                            break;
                        }
                    }
                })

                if (storage.length !== 0) {
                    const html = storage.reduce((pre, cur) => {
                        const html = `<h3> ${cur.title} </h3>
                                      <p> ${cur.subject} </p>
                        `
                        return `${pre} \n ${html}`
                    }, "")
                    
                    await sendNotify(html, `关键字: ${Config.pushNotifyConfig.keywords.join(",")}`)
                } else {
                    console.log("本次查询并没有关键字相关的二手产品。")
                }

                
            },
            Config.interval
        )
        start();
    } else {
        console.log("河畔账号登录失败。")
    }
    
}


exec().catch(err => {
    console.error(err);
})
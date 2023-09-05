// 守护进程启动
import { login } from './authen'
import { promisePoller } from './tools'
import Config from '../config.json'
import { getRiverForumList } from './transaction'



async function exec() {
    const tokens = await login();
    if (tokens.data.rs === 1) {
        const start = promisePoller(
            async () => {
                // 二手交易boardId: 61
                const getTranscationPost = getRiverForumList("61");
                const { token, secret } = tokens.data;
                const posts = await getTranscationPost(token, secret);

                // 查找post中是否有关键字
                posts.data.list.forEach(item => {
                    Config.PushNotifyConfig.keywords.forEach(key => {
                        if (item.title.includes(key) || item.subject.includes(key)) {
                            
                        }
                    })
                })
            },
            Config.interval
        )
        start();
    } else {
        console.log("河畔账号登录失败。")
    }
    
}


exec()
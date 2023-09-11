import { createTransport } from "nodemailer"
import Config from "../config.json"

const transporter = createTransport({
    host: Config.pushNotifyConfig.originMailConfig.host,
    port: 465,
    secure: true,
    auth: {
        ...Config.pushNotifyConfig.originMailConfig.auth
    }
})



export const sendNotify = async (html: string, subject: string) => {
    return transporter.sendMail({
        from: Config.pushNotifyConfig.originMailConfig.auth.user,
        to: Config.pushNotifyConfig.sendMailConfig.mail,
        subject,
        text: "有你想要的二手商品上架",
        html: html
    })
}


const topicMap = new Map<string, number>();
// 防止每个间隔时间发一封邮件，设置cache来检测topic是否有新的评论增加
export const isNewTopic = (cacheId: string, replys: number) => {
    const reply_num = topicMap.get(cacheId);
    // 全新的topic，需要进行邮件提醒
    if (!reply_num) {
        topicMap.set(cacheId, replys);
        return true;
    // 不是全新topic，并且回复数没有改变，之前发送过邮件，不需要再发送
    } else if (reply_num === replys) {
        return false;
    } else {
    // 不是全新topic，但是有新回复，需要发送邮件
        topicMap.set(cacheId, replys); // 更新replys，否则会重复发送
        return true;
    }
}
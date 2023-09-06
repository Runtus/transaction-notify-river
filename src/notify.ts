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
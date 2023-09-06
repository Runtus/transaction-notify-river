import { describe, it, expect } from 'vitest'
import { sendNotify } from './notify'

describe("mail-sending", async () => {
    it("mail sender", async () => {
        const res = await sendNotify(`<h2> 测试测试 </h2> \n <p> 测试 </p>`, "这只是一封测试邮件");
        console.log(res);
        expect(res.messageId.length).not.toBe(0);
    })
})
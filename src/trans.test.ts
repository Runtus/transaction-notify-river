import { describe, it, expect } from 'vitest'
import { getTransPost } from './transaction'
import { login } from './authen'

describe("getForum", async () => {
    const { data: { token, secret } } = await login();

    console.log(token, secret)

    it("getForum", async () => {
        const res = await getTransPost(token, secret);
        console.log(res.data);
        expect(res.status).toBe(200)
    })
})
import { describe, it, expect } from 'vitest'
import { getTransList, getRiverForumList } from './transaction'
import { login } from './authen'

// 二手专区: board_id 24

describe("getForum", async () => {
    console.log(114)
    const { data: { token, secret } } = await login();

    console.log(token, secret)

    it("getForum", async () => {
        const res = await getTransList(token, secret);
        console.log(res.data.list[3]);
        expect(res.status).toBe(200);
    })


    it("getList", async () => {
        const getTransList = getRiverForumList("61");
        const res = await getTransList(token, secret);
        console.log(res.data)

        expect(res.status).toBe(200)
    })
})


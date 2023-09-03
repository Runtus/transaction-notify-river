import { it, expect, describe } from 'vitest'
import { getHash, login } from './authen'

describe("authen", () => {
    it("hash", () => {
        getHash()
        expect(1).toBe(1);
    })

    it("login", async () => {
        const app = await login();

        console.log(app)

        expect(app.status).toBe(200)
    })
})

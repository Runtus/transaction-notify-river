export type LoginResponse = {
    rs: 0 | 1,
    token: string,
    secret: string,
    userName: string,
}
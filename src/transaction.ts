import axios from 'axios';
import { BASE_URL, DEFAULT_HEADERS } from './const'

export const getTransPost = (token: string, secret: string) => axios({
    url: BASE_URL,
    method: "POST",
    params: {
        r: "forum/forumlist",
        fid: "",
        accessToken: token,
        accessSecret: secret
    },
    headers: {
        ...DEFAULT_HEADERS
    }
})
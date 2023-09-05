import { createHash } from 'crypto'
import axios from 'axios'
import { LoginResponse } from './type'
import { BASE_URL, DEFAULT_HEADERS } from './const'
import account from '../config.json'


export const getHash = () => {
    const timeString = new Date().getTime().toString();
    const AUTH_KEY = "appbyme_key";
    const authString = `${timeString.substring(0, 5)}${AUTH_KEY}`;
    
    const md5 = createHash('md5');
    md5.update(authString)

    const HashKey = md5.digest("hex");
    return HashKey.substring(8, 16);
}


export const login = () => axios<LoginResponse>({
    url: `${BASE_URL}`,
    method: "POST",
    params: {
        r: "user/login",
        type: "login",
        username: account.user,
        password: account.psw,
    },
    headers: {
        ...DEFAULT_HEADERS
    }
})
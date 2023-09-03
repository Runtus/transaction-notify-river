// 守护进程启动
import { login } from './authen'


async function exec() {
    const tokens = await login();
    if (tokens.data.rs === 1) {
        setInterval(() => {

        }, 1000)
    } else {
        console.log("河畔账号登录失败。")
    }
    
}


exec()
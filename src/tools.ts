const delay = (timeout: number) => new Promise(res => {
    setTimeout(res, timeout)
})

// Promise 轮询
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const promisePoller = (fn, timeout: number) => async (...params) => {
    const poll = async () => {
        await fn(...params);

        delay(timeout).then(poll).catch(err => {
            console.error(err);
            console.log("查询终止，请查看网络是否出现异常");
        })
    }
    await poll();
}
//读取本地存储信息

const isLogin = () => {
    return JSON.parse(localStorage.getItem('userinfo') || '{}')
}
//判断是否登录成功
// const isLoginStatus = () => {
//     let userinfo = isLogin();
//     if (!userinfo.userid || !userinfo.token) {
//         router.push("/login");
//         return
//     } else {
//         console.log('ok')
//     }
// }
export {
    isLogin
}
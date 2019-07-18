import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import axios from 'axios'
// 测试环境
 axios.defaults.baseURL = 'https://api.wiwcc.com'
// 正式环境
/*axios.defaults.baseURL = 'http://api.gongduyuan.com'*/
// axios.defaults.withCredentials = true
// var instance = axios.create({
//     baseURL: 'https://api.wiwcc.com',
//     // headers: {
//     //     'userid': '30',
//     //     'source': 'WebCampus',
//     //     'token': 'KsNnKrurzmXkTkAwa9EETJFU-6Ds4jm0'
//     // }
// });
Vue.prototype.$axios = axios

/**
 * 这里导入组件
 */
const pageHome = () => import('../components/page_home/pageHome.vue')
const login = () => import('../components/account/login.vue')
const playVideo = () => import('../components/layout/playVideo.vue')
const reader = () => import('../components/layout/reader.vue')
//创建路由对象
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/pageHome',
            component: pageHome
        },
        {
            path: '/playVideo',
            component: playVideo
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/reader',
            component: reader
        }
    ]
})
//导航守卫
router.beforeEach((to, from, next) => {
    // console.log(to)
    if (to.path === '/login') {
        next()
    } else {
        if (localStorage.getItem('userinfo')) {
            next()
        } else {
            next('/login')
        }
    }
})
// const isLogin = () => {
//     return JSON.parse(localStorage.getItem('userinfo') || '{}')
// }
// //判断是否登录成功
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
    router
}
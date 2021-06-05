import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login.vue"
import Home from "../components/home.vue"
import Register from "../components/register.vue"
import userSettings from "../components/user/userSettings"
import MyCart from "../components/shoppingCart/myCart"
Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/register',
            component: Register
        },
        {
            path:'/userSettings',
            component: userSettings
        },
        {
            path:'/myCart',
            component: MyCart
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.path === '/login'||to.path === '/register') {
        return next()
    }
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) {
        return next('/login')
    }
    next()
})

export default router
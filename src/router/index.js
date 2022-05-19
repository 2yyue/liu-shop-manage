import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
// import store from "../store";
// import axios from "axios";
//
// const axios=require('axios')
// axios.default.baseURL='http://loaclhost:8888/'
// axios.default.withCredentials=true
// Vue.prototype.$axios=axios

Vue.config.productionTip = false

Vue.use(Router)

// store.state.isLogin = 1;

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/data',
          name: 'data',
          component: () => import('../components/data')
        },
        {
          path: '/home/index',
          name: 'index',
          component: () => import('../views/home/index')
        },
        {
          path: '/goodsshow',
          name: 'goodsshow',
          component: () => import('../views/home/dataShow/goodsShow')
        },
        {
          path: '/orderdelivery',
          name: 'orderdelivery',
          component: () => import('../views/home/dataShow/orderDelivery')
        },
        {
          path: '/useractivation',
          name: 'useractivation',
          component: () => import('../views/home/dataShow/userActivation')
        },
        {
          path: '/items',
          name: 'items',
          component: () => import('../views/home/goods/index')
        },
        {
          path: '/brand',
          name: 'brand',
          component: () => import('../views/home/goods/brand')
        },
        {
          path: '/items/category',
          name: 'category',
          component: () => import('../views/home/goods/category')
        },
        {
          path: '/goods',
          name: 'goods',
          component: () => import('../views/home/goods/goods')
        },
        {
          path: '/myorder',
          name: 'myorder',
          component: () => import('../views/home/order/myOrder')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('../views/home/order/order')
        },
        {
          path: '/preference',
          name: 'preference',
          component: () => import('../views/home/personalSet/preference')
        },
        {
          path: '/recommendation',
          name: 'recommendation',
          component: () => import('../views/home/personalSet/recommendation')
        },
        {
          path: '/coupon',
          name: 'coupon',
          component: () => import('../views/home/promotion/coupon')
        },
        {
          path: '/promotion',
          name: 'promotion',
          component: () => import('../views/home/promotion/promotion')
        },
        {
          path: '/seckill',
          name: 'seckill',
          component: () => import('../views/home/promotion/seckill')
        },
        {
          path: '/usershow',
          name: 'userShow',
          component: () => import('../views/home/user/userShow')
        },
        {
          path: '/code',
          name: 'code',
          component: () => import('../views/home/user/code')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/Register')
    }
  ],
  mode: 'history' /* hash */ /* 不显示路由中的# */
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
// if (to.path === '/login') return next()
// const tokenStr = window.sessionStorage.getItem('token')
// if(!tokenStr) return next('/login')
// next()
// })
//   // 路由验证
//   if (to.matched.some(m => m.meta.auth)) {
//     if (store.state.isLogin === '0') {
//       alert('您没有登录，无权访问！')
//       // 未登录跳转到登录页面query：{redirect:to.fullPath} 表示把当前路由信息传递过去，方便登录后跳转回来
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// }))

export default router

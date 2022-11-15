import Vue from 'vue'
import Router from 'vue-router'
// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'


Vue.use(Router)

// 重写Router的push和replace方法
const originalPush = Router.prototype.push;
Router.prototype.push = function(location, resolve, reject){
  if(resolve && reject)
    originalPush.call(this, location, resolve, reject);
  else
    // 手动传入Promise的两个回调
    originalPush.call(this, location, ()=>{}, ()=>{})
}

// 重写replace方法
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function(location, resolve, reject){
  if(resolve && reject)
    originalReplace.call(this, location, resolve, reject)
  else
    // 手动传入Promise的两个回调
    originalReplace.call(this, location, ()=>{}, ()=>{})
}

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/register',
      component: Register
    },
    // 重定向
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

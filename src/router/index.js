import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')


//1.安装插件
Vue.use(Router)

//2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }

]

// const router = new Router({
//   routes,
//   mode: "history"
// })

export default new Router({
  routes,
  mode: "history"
})

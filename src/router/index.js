import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login'
import nonExistent from '@/views/nonExistent'
Vue.use(VueRouter)

const contexts = require.context('../views', true, /\.vue$/)
const routers = [];
contexts.keys().forEach(key => {
  let routePath = ''
  if (key.indexOf('index')!=-1) {
    routePath = key.replace(/^\.\//,'').replace(/\/index.vue$/,'');
  } else {
    routePath = key.replace(/^\.\//,'').replace(/\.vue$/,'');
  }
  routers.push({
    path: '/'+routePath,
    name: routePath,
    component:()=>import(`@/views/${routePath}`) 
  })
});

const routes = [
  ...routers,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    //此项必须放在最后，代表不存在的请求路径，全部进默认画面
   path: '*',
   name: 'nonExistent',
   component: nonExistent
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router

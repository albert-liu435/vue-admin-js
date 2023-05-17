import { createRouter, createWebHashHistory } from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Introduction from '../views/router/Introduction.vue'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  //定义一些路由数组
  // console.log(import.meta.env);
  routes: [

    {
      path: '/introduction',
      name: 'Introduction',
      // 每个路由都需要映射到一个组件。
      component: Introduction
    },
    {
      path: '/',
      name: 'home',
      // 每个路由都需要映射到一个组件。
      component: Home
    },
    {
        path:'/about',
        name:'about',
        component: About
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

// console.log('测试信息')
//export的作用，就是用于从模块中导出函数、对象或原始值，以便其他程序可以通过 import 语句使用它们.export 导出的内容，都会添加到文件对象中，可以简单的先理解为深拷贝。
//export default 指定模块的默认输出，一个模块只能有一个默认输出。
export default router
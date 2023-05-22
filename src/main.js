import { createApp } from 'vue'
import './style.css'
// 从一个单文件组件中导入根组件
import App from './App.vue'

//导入路由，命名为router
import router from './router'

//完整导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


console.log(import.meta.env)

// 生成 Vue 实例 app
const app=createApp(App);

//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.use(ElementPlus)

//挂载应用
//应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
app.mount('#app')

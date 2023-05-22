<template>

  <!-- 用于布局的容器组件，方便快速搭建页面的基本结构：

<el-container>：外层容器。 当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列， 否则会水平左右排列。

<el-header>：顶栏容器。

<el-aside>：侧边栏容器。

<el-main>：主要区域容器。

<el-footer>：底栏容器。 -->

  <el-container v-if="state.showMenu">
    <!-- 侧边栏容器 -->
    <el-aside>
      <div class="head">
        <div>
          <img alt="Vue logo"
               class="logo"
               src="@/assets/vue.svg" />
          <span>vue3 admin</span>
        </div>
      </div>
      <div class="line" />
      <!-- https://element-plus.gitee.io/zh-CN/component/menu.html#menu-attributes
        为网站提供导航功能的菜单 背景颜色 background-color：菜单的背景颜色（十六进制格式），text-color：文字颜色（十六进制格式），
      router：是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。
      default-openeds：默认打开的 sub-menu 的 index 的数组 default-active：页面加载时默认激活菜单的 index-->
      <el-menu background-color="#222832"
               text-color="#fff"
               :router="true"
               :default-openeds="state.defaultOpen"
               :default-active='state.currentPath'>

        <el-sub-menu index="1">
          <template #title>
            <span>Dashboard</span>
          </template>
          <!-- 垂直菜单，可内嵌子菜单。
          通过 el-menu-item-group 组件可以实现菜单进行分组，分组名可以通过 title 属性直接设定，也可以通过具名 slot 来设定。 -->
          <el-menu-item-group>
            <el-menu-item index="/"><el-icon>
                <Odometer />
              </el-icon>首页</el-menu-item>
            <el-menu-item index="/add"><el-icon>
                <Plus />
              </el-icon>添加商品</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <span>首页配置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/swiper"><el-icon>
                <Picture />

              </el-icon>轮播图配置</el-menu-item>
            <el-menu-item index="/hot"><el-icon>
                <StarFilled />
              </el-icon>热销商品配置</el-menu-item>
            <el-menu-item index="/new"><el-icon>
                <Sell />
              </el-icon>新品上线配置</el-menu-item>
            <el-menu-item index="/recommend"><el-icon>
                <ShoppingCart />
              </el-icon>为你推荐配置</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>
            <span>模块管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/category"><el-icon>
                <Menu />
              </el-icon>分类管理</el-menu-item>
            <el-menu-item index="/good"><el-icon>
                <Goods />
              </el-icon>商品管理</el-menu-item>
            <el-menu-item index="/guest"><el-icon>
                <User />
              </el-icon>会员管理</el-menu-item>
            <el-menu-item index="/order"><el-icon>
                <List />
              </el-icon>订单管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/account"><el-icon>
                <Lock />
              </el-icon>修改密码</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container class="content">
      <Header />
      <div class="main">
        <router-view />
      </div>
      <Footer />
    </el-container>
  </el-container>
  <el-container v-else>
    <div>false</div>
  </el-container>

</template>

<script setup>
import { reactive } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// https://blog.csdn.net/weixin_44283432/article/details/111190176 https://zhuanlan.zhihu.com/p/521025881 https://blog.csdn.net/lwf3115841/article/details/128599479
const state = reactive({
  showMenu: true,
  //表示是否展示处理
  defaultOpen: ['1', '2', '3', '4'],
  currentPath: '/',
})

</script>


<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh; /*height：100vh是指铺满屏幕的高度。height：100%是铺满父容器的高度。*/
}
.aside {
  width: 200px !important;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-menu {
  border-right: none !important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.el-submenu:first-child {
  border-top: none;
}
.el-submenu [class^='el-icon-'] {
  vertical-align: -1px !important;
}
a {
  color: #409eff;
  text-decoration: none;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-popper__arrow {
  display: none;
}
</style>
import { createApp } from "vue";
import {
  ElButton,
  ElContainer,
  ElAside,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElPopover,
  ElTag,
  ElCard,
  ElTable,
  ElTableColumn,
  ElPopconfirm,
  ElUpload,
  ElDialog,
  ElPagination,
  ElCascader,
  ElRadioGroup,
  ElRadio,
  ElSelect,
  ElOption,
} from "element-plus";
import App from "./App.vue";
//引入路由
import router from "@/router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const orderStatus = {
  0: "待支付",
  1: "已支付",
  2: "配货完成",
  3: "出库成功",
  4: "交易成功",
  "-1": "手动关闭",
  "-2": "超时关闭",
  "-3": "商家关闭",
};

const app = createApp(App); // 生成 Vue 实例 app

//我们可以使用app.component()方法，让组件在当前 Vue 应用中全局可用。
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //创建全局组件
  //app.component（'组件名',组件模块名）
  app.component(key, component);
}

// 全局方法,注册全局filter对象
//参考:https://blog.csdn.net/weixin_45324044/article/details/123138169
app.config.globalProperties.$filters = {
  orderMap(status) {
    return orderStatus[status] || "未知状态";
  },
  prefix(url) {
    console.log("url:" + url);
    if (url && url.startsWith("http")) {
      return url;
    } else {
      url = `http://backend-api-02.newbee.ltd${url}`;
      return url;
    }
  },
};
//回到顶部
app.config.globalProperties.goTop = function () {
  const main = document.querySelector(".main");
  main.scrollTop = 0;
};

app.use(router); // 引用路由实例
//引用Element-plus插件
//当app.use()在同一个插件上多次调用时，插件只会安装一次。
app
  .use(ElButton)
  .use(ElContainer)
  .use(ElAside)
  .use(ElMenu)
  .use(ElSubMenu)
  .use(ElMenuItemGroup)
  .use(ElMenuItem)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElCheckbox)
  .use(ElInput)
  .use(ElPopover)
  .use(ElTag)
  .use(ElCard)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElPopconfirm)
  .use(ElUpload)
  .use(ElDialog)
  .use(ElPagination)
  .use(ElCascader)
  .use(ElRadioGroup)
  .use(ElRadio)
  .use(ElSelect)
  .use(ElOption);
app.mount("#app"); // 挂载到 #app

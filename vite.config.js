import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

console.log("测试：");
console.log(path.resolve(__dirname, "./"));

// resolve: {
//   alias: {
//     '~': path.resolve(__dirname, './'),
//     '@': path.resolve(__dirname, 'src')
//   },
// },

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        // 用~代替根目录目录
        "~": path.resolve(__dirname, "./"),
        // 用@代替src目录
        "@": path.resolve(__dirname, "src"),
      },
    },
    //,
    // base: './',
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://backend-api-02.newbee.ltd/manage-api/v1', // 凡是遇到 /api 路径的请求，都映射到 target 属性
    //       changeOrigin: true,
    //       rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
    //     }
    //   }
    // },
    // css: {
    //   preprocessorOptions: {
    //     // 覆盖掉element-plus包中的主题变量文件
    //     scss: {
    //       additionalData: `@use "@/styles/element/index.scss" as *;`,
    //     },
    //   },
    // },
  });

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

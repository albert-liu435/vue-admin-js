<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <img class="logo"
             src="https://s.yezgea02.com/1582958061265/mlogo.png" />
        <div class="name">
          <div class="title">新蜂商城</div>
          <div class="tips">Vue3.0 后台管理系统</div>
        </div>
      </div>
      <el-form label-position="top"
               :rules="state.rules"
               :model="state.ruleForm"
               ref="loginForm"
               class="login-form">
        <el-form-item label="账号"
                      prop="username">
          <el-input type="text"
                    v-model.trim="state.ruleForm.username"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input type="password"
                    v-model.trim="state.ruleForm.password"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
          <el-button style="width: 100%"
                     type="primary"
                     @click="submitForm">立即登录</el-button>
          <el-checkbox v-model="state.checked"
                       @change="!state.checked">下次自动登录</el-checkbox>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import axios from '@/utils/axios'
import md5 from 'js-md5'
import { reactive, ref } from 'vue'
import { localSet } from '@/utils'
const loginForm = ref(null)
const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  },
  checked: true,
  //规则校验
  rules: {
    username: [
      { required: 'true', message: '账户不能为空', trigger: 'blur' }
    ],
    password: [
      { required: 'true', message: '密码不能为空', trigger: 'blur' }
    ]
  }
})
//进行表单提交，即登录
const submitForm = async () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      axios.post('/adminUser/login', {
        userName: state.ruleForm.username || '',
        passwordMd5: md5(state.ruleForm.password)
      }).then(res => {
        //返回一个token
        localSet('token', res)
        //         javascript中的 location.href 有很多种用法，主要如下。

        // self.location.href=“/url” 当前页面打开URL页面
        // location.href=“/url” 当前页面打开URL页面
        // window.location.href=“/url” 当前页面打开URL页面，前面三个用法相同。
        // this.location.href=“/url” 当前页面打开URL页面
        // parent.location.href=“/url” 在父页面打开新页面
        // top.location.href=“/url” 在顶层页面打开新页面
        // ————————————————
        // 版权声明：本文为CSDN博主「前端赵十三」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
        // 原文链接：https://blog.csdn.net/weixin_55846296/article/details/122001834
        window.location.href = '/'
      })
    } else {
      console.log('error submit!!')
      return false;
    }
  })
}
const resetForm = () => {
  loginForm.value.resetFields();
}
</script>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
}
.login-container {
  width: 420px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 28px;
  color: #1baeae;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  color: #999;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
.login-form >>> .el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form >>> .el-form-item {
  margin-bottom: 0;
}
</style>
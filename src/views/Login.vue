<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userForm" :model="user" :rules="rules">
        <div class="title">浩元</div>
        <el-form-item prop="username">
          <el-input type="text" placeholder="用户名" clearable="true" v-model="user.username" class="login-input">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" clearable="true" v-model="user.password" class="login-input">
            <template #prefix>
              <el-icon><View /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="captcha-box">
            <el-input type="text" placeholder="验证码" clearable="true" v-model="user.captcha" class="login-input"/>
            <img @click="getCaptcha" :src="captcha.captcha">
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {getCurrentInstance, onMounted, reactive, ref} from "vue";
import { userStore } from "../store/user";

const { proxy } = getCurrentInstance()

const rules = reactive({
  username: {
    required: true,
    message: "请输入用户名",
    trigger: "blur"
  },
  password: {
    required: true,
    message: "请输入密码",
    trigger: "blur"
  }
});
const captcha = reactive({
  captcha: "",
  tag: ""
});
const user = reactive({
  username: "",
  password: "",
  captcha: ""
})
const store = userStore();

const login = () => {
  proxy.$api.login(user, captcha.tag).then((response) => {
    store.setToken(response);
    goHome();
  }).catch((error) => {
    getCaptcha();
  })
}

const resetCaptcha = () => {
  captcha.captcha = "";
}

const getCaptcha = () => {
  proxy.$api.getCaptcha().then((response) => {
    captcha.captcha = response.captcha;
    captcha.tag = response.tag;
  })
  resetCaptcha();
}

const goHome = () => {
  proxy.$router.push({name: "welcome"})
}

onMounted(() => {
  if (store.token) {
    goHome();
  }
  getCaptcha();
});

</script>

<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  width: 100vw;
  height: 100vh;
  .modal {
    width: 500px;
    padding: 50px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #dddddd;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
    }
    .captcha-box {
      display: flex;
      justify-content: space-between;
      width: 100%;

      img {
        margin-left: 10px;
      }
    }
    .login-input {
      height: 40px;
    }
  }
}
</style>

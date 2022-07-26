<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userForm" :model="user" :rules="rules">
        <div class="title">浩元</div>
        <el-form-item prop="username">
          <el-input type="text" placeholder="用户名" v-model="user.username">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="user.password">
            <template #prefix>
              <el-icon><View /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      rules: {
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
      }
    }
  },
  methods: {
    login() {
      this.$refs.userForm.validate((valid) => {
        if (valid) {

        } else {
          return false;
        }
      })
    }
  }
}
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
  }
}
</style>

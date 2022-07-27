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
            <el-input type="text" placeholder="验证码" clearable="true" class="login-input"/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAoCAIAAAC6iKlyAAAOrUlEQVR42u3aZ7AVVRYF4AHMGMGMOQcQUEQwgBEDimIqExhQBMRQiqiAmEUJJkQMCCooRjBjdpgcmZyZDEwemGysmq/OrtfvckO/e/uV+of949V9fbtPn7PO2muv3X0/97lV8anF51MsTPGFFF9M8aUUX07xlRRfTfG1FF9vim+k+GaKb6X4dopFKb7TFN9N8b0U30/xgxQ/TPGjFD9O8ZMUP03xsxQ/T/GLplic4pcpfpXi1yl+k+K3TfG7FL9PsSTF0hTLUvwhxR9T/CnFn1P8JcVfU/ytKf6eYnmKFSn+keKfTfGvFP9O8Z8U/03xvxTNQC9sikaBroVyGdC1UC4AdC2Uy4CuhXIBoEtRrgp0LZRrAl0L5QJAt5LOnxzQtVD+JIAOlN977716gV6lG63RjWagV+nGJ6ob5UBXRfmNN964/PLLb7/99pkzZ7766qvgXqUbjepGXUDDt9SfrL766ltuuWX37t2PPPLIwYMHjxo16uqrr37ssceIzyrdaBXQt912Wz0GcfTo0Z+hbvhQCrRv33333Qxlfx38DHVjJaBrqTPdqAfobbfd9rnnnitA5/nz5995551vv/32yy+/7NoCQPvWXWiXcQBK62zYnDlzxowZ89Zbb02fPh21qZwBPyvdeP/991sG+s0335w1axaNvuKKKwYNGkQx6EanTp3WWGONMqwdueyyyyy4KtBADKB9zoB+5JFHTj/99JNPPvmEE0649NJLQfzoo48uWLDAVyYgRUpRDugrgXbEOc8///w777wzfPjwCy644Jlnnrnmmmt22GEHeTZ+/PgZM2Zcf/31V155JRl86aWXEL9+3fDZ3riLu5u8gmRi9k+5QpG5c+dawv3333/PPfdYcquAzjF2r7/++uzZs6+66iqqncHdpUuXefPmZUA737Bmhu9mhrb+hbVJQ9PO2Rubt+aaaw4cOPCoo44an8JnU3cLewNE6KsB9gZVA2XD2lFAW2rfvn1vvvnmCRMmPPzww26EB8ccc0yvXr022GCDXXbZZZNNNtl4440333zzddZZx9/ddtvt2GOPPemkk2ywvz4fccQRBx100H777detW7fdd999++23RyOXrLvuugpS/d311KlTa+lGM9Ct7FN8wMeM4+3atRsyZAiK2T9UkgoIO2DAgOOPP/7oo4+GoB2CIKB9O23aNHsTF7Zp08Zqd9ppp7Zt2wIXcH369HnooYeeeOIJ0/P3wQcfNDfQyw8cN72hQ4c688ADD1xvvfV23XXXbNnmUOBRhCUYp0OHDqizzTbbyAnQ9+jR44ADDrAfxx133KmnnsoCSJqRI0cyAuPGjbPHkydPtiisqkXnloFuqE9B5AwySFn8vvvua95bbLFF+/btHVl77bVjAc8++6yZwZEuHXrooWuttVbZgjt37oxlHTt2tBPGHzFihCUhoJOnTJlCFnCf20FPd1x//fUrdSwnDGVKRDzUyX5LFKLkRibm+LnnngvQvfbaCy3Gjh0rOSzfcZpTwG+0Cuiq9plsueSwww4LFyj1VltttTZNEYRFFn8xes899zzrrLPczjkXXXSRbSiDIy4RCG40WY9WkHV+DojZVbXCNpMpi6W8IdCsiKowceJE4B588MGquo2nM/bPaLbcHXHi8MMPJ9nqYaN+oxzo1jzfcMQI559//l133YVcgQXsypbtXxltAWQd4mb/wgsv7LPPPkQZmvUnu5FlBn2XIr17946DbmonfOUDifeVBAcZVrqvg8an2nRss80240MkE0+pxEmXCy+8UM45oZQZEZZjY7p27UpGlBb1s1G/IT744IM8oOvUDecrdAr6pptuaqkmV0rPsn8Fsig4e++9t3kbn0+nCXjUIhmhRjGdhuAuf/rpp5Uy6oTm7VNg36RJk2T6K6+8MmzYMDqwxx570BmXwF1VJOIOyjku4oEHHqBL7LZcocI5+dE2ha296aabMLqAbhQEuozOqMH8nX322WYTZToTio022gimlocOGY4+YJYqJ08tviqgG264ofoJHQNmoyGX4w5CWYVkOnkDWNtdyXHIIYeQ9TDONNfM1QyY0qjYG0gZ08ydTDeUVraSOfOV9CqlBV7Tvci/OBhrOfPMM4vpRjPQhXVDvPjii6oHSpbW7kAcazAdp/bff39VMUdJLYmGaI6efPJJt4MCKFEVYbMstgE77rhjv379OLP77rsPORg+3obynHbaaaahVcnabv+ClfNzoe3ceuuteR5tES4z0aTZNviWEcxKiGk7k8/joMggNmRqBn0CUg/QVVHOA7pO3bDae++9F5VK50RDmFmfAWdAtW677bar6kkt7MQTT6TsBizrBh2xWjxyocGtc6uttmKt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">
          </div>
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

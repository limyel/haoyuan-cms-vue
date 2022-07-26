<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎使用</div>
      <div class="title">浩元茶器小程序内容管理系统</div>
      <div class="desc">- Vue3 + ElementPlus + Pinia 打造内容管理系统</div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style lang="scss">
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .content {
    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333333;
    }
    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .desc {
      text-align: right;
      font-size: 14px;
      color: #999999;
    }
  }
  .img {
    //background-image: url("");
  }
}
</style>

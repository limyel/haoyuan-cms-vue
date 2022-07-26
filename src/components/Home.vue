<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div class="log">
        <span>浩元</span>
      </div>
      <el-menu
          default-active="2"
          class="nav-menu">
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content-right">
      <div class="nav-top">

      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss">
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    overflow-y: auto;
    transition: width .5s;
    background-color: #122150;
  }
  .content-right {
    margin-left: 200px;
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
    }
    .wrapper {
      background-color: #eeeeee;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page {
        background-color: #ffffff;
        height: 100%;
      }
    }
  }
}
</style>

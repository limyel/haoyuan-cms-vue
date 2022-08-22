<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div class="logo">
        浩元
      </div>
      <el-menu
          default-active="2"
          router
          background-color="#122150"
          text-color="#ffffff"
          :collapse="false"
          class="nav-menu">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><setting /></el-icon>系统管理
          </template>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">菜单管理</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="1">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold">
            <el-icon><Fold /></el-icon>
          </div>
          <div class="bread">面包屑</div>
        </div>
        <div class="user-">用户</div>
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

    .logo {
      text-align: center;
      font-size: 20px;
      color: #ffffff;
      padding: 15px 0;
    }

    .nav-menu {
      height: calc(100vh - 50px);
      border-right: none;
    }
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

      .nav-left {
        display: flex;
        align-items: center;

        .menu-fold {
          margin-right: 15px;
        }
      }
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

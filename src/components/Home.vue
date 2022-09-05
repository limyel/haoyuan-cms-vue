<template>
  <div class="basic-layout">
    <div :class="['nav-side', isCollapse? 'fold': 'unfold']">
      <div class="logo">
        浩元
      </div>
      <el-menu
          default-active="2"
          router
          background-color="#122150"
          text-color="#ffffff"
          :collapse="isCollapse"
          class="nav-menu">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">菜单管理</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="2">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div :class="['content-right', isCollapse? 'fold': 'unfold']">
      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold">
            <el-icon @click="toggle"><Fold /></el-icon>
          </div>
          <div class="bread">面包屑</div>
        </div>
        <div class="user-info">
          <el-badge :is-dot="true" type="danger" class="notice">
            <el-icon><Bell /></el-icon>
          </el-badge>
          <el-dropdown @command="handleLogout">
            <span class="user-link">
              {{userinfo.username}}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱: {{userinfo.email}}</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {userStore} from "@/store/user";
import {getCurrentInstance, ref} from "vue";

const { proxy } = getCurrentInstance();
const store = userStore();
const userinfo = ref({
  username: "limyel"
})

let isCollapse = ref(false);

const toggle = () => {
  isCollapse.value = !isCollapse.value;
}

const handleLogout = (key) => {
  if (key === "email") {
    return;
  }
  store.delToken();
  proxy.$router.push({"name": "login"});
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
    &.fold {
      width: 64px;
    }
    &.unfold {
      width: 200px;
    }
  }
  .content-right {
    margin-left: 200px;
    &.fold {
      margin-left: 64px;
    }
    &.unfold {
      margin-left: 200px;
    }
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

      .user-info {
        .notice {
          line-height: 30px;
          margin-right: 15px;
        }
        .user-link {
          cursor: pointer;
          color: #409eff;
          line-height: 50px;
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

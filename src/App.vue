<template>
  <router-view></router-view>
</template>

<script setup>
import {userStore} from "./store/user";

const user = userStore();

const token = localStorage.getItem('token');
if (token) {
  user.setToken(token);
}
</script>

<style lang="scss">
@import "./assets/style/reset.css";
@import "./assets/style/index.scss";
</style>

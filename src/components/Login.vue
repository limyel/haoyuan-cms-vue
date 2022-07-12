<template>
  <h1>登录</h1>
  <h1>{{state.count}}</h1>
  <el-button>hello</el-button>
</template>

<script setup>
import {reactive} from "vue";

defineProps({
  msg: String
})

const state = reactive({count: 0})
</script>

<style scoped>

</style>
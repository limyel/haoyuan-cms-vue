import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import "./config";
import store from "./store";
import request from "./utils/request";
import api from "./api";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

console.log("环境变量=>", import.meta.env)
const app = createApp(App)

app.use(ElementPlus);
app.use(router);
app.use(store);
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app');

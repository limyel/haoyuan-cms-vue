import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import config from "./config";
import request from "./utils/request";
import api from "./api";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App)
const pinia = createPinia()

app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app');

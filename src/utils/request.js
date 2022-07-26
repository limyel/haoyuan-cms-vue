/**
 * axios 二次封装
 */
import axios from "axios";
import config from "./../config";
import {ElMessage} from "element-plus";
import router from "../router";

const service = axios.create({
    baseURL: config.baseUrl,
    timeout: 8000,
})

service.interceptors.request.use((req)=> {
    const headers = req.headers
    if (!headers.Authorization) {
        headers.Authorization = 'Bear lim';
    }
    return req;
})
service.interceptors.response.use((res)=> {
    const {code, data, msg}  = res.data;
    if (code === 0) {
        return data;
    } else if (code === 40001) {
        ElMessage.error(msg);
        setTimeout(()=> {
            router.push("/login")
        }, 15000);

    } else {
        ElMessage.error(msg);
    }
    return Promise.reject(msg);
})

function request(options) {
    options.method = options.method || "get";
    if (options.method.toLowerCase() === "get") {
        options.params = options.data;
    }

    if (config.env === "prod") {
        service.defaults.baseURL = config.baseUrl;
    } else {
        service.defaults.baseURL = config.mock ? config.mockUrl: config.baseUrl;
    }
    return service(options);
}

["get", "post", "put", "delete", "patch"].forEach((item)=> {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            mode: item,
            ...options
        });
    }
})

export default request;

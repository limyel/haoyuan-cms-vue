/**
 * axios 二次封装
 */
import axios from "axios";
import config from "./../config";
import {ElMessage} from "element-plus";
import {userStore} from "../store/user";
import store from "../store";

const userStorePinia = userStore(store);

const service = axios.create({
  baseURL: config.baseUrl,
  timeout: 8000,
})

service.interceptors.request.use(
  (request) => {
    const headers = request.headers;
    const token = userStorePinia.token || "";
    headers.Authorization = "Bearer " + token;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  })
service.interceptors.response.use(
  (response) => {
    const {code, data, msg}  = response.data;
    if (code === 0) {
      return data;
    } else {
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
    }
  },
  (error) => {
    const {code, data, msg}  = error.response.data;
    ElMessage.error(`Code: ${code}, Message: ${msg}`)
  }
)

function request(options) {
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
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

/**
 * axios 二次封装
 */
import axios from "axios";
import config from "./../config";
import {ElMessage} from "element-plus";

const service = axios.create({
  baseURL: config.baseUrl,
  timeout: 8000,
})

service.interceptors.request.use(
  (request) => {
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
  console.log(config.baseUrl)

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

request.get = (url, data, options) => {
  return request({url: url, data: data, mode: "get"}, ...options);
}

export default request;

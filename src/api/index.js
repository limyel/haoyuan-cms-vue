import request from "../utils/request";

export default {
  getCaptcha(params) {
    return request({
      url: "http://localhost:8000/cms/user/captcha",
      method: "get"
    })
  },
  login(params, tag) {
    return request({
      url: "http://localhost:8000/cms/user/login",
      data: params,
      method: "post",
      headers: {'tag': tag}
    })
  }
}

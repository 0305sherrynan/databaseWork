import axios from "axios"
export const myAxios = axios.create({
    baseURL:'http://localhost:8080'
})
// 定义请求拦截器
myAxios.interceptors.request.use(function (config) {
  console.log(config.data)
  return config
}, function (err) {
  return Promise.reject(err)
})

myAxios.interceptors.response.use(function (response) {
    // 响应http状态码为2xx或3xx时触发成功的回调，形参中的“response”是“成功的结果”
    // return到axios原地Promise对象，作为成功的结果
    // console.log(response.request)
    console.log(response)
    return response
  }, async function (err) {
    console.dir(err)
    // 登录失败的情况，提示
    return Promise.reject(err)
  }
  )
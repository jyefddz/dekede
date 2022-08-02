// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use((config) => {
  if (store.state.user.token) {
    config.headers.Authorization = store.state.user.token
  }
  return config
}) // 请求拦截器
service.interceptors.response.use(
  (res) => {
    const id = store.state.user.imgCode
    if (res.config.url === `/api/user-service/user/imageCode/${id}`) {
      return res.request.responseURL
    }
    const userId = store.state.user.userId
    if (res.config.url === `/api/user-service/user/${userId}`) {
      return res.data
    }
    const { success, msg } = res.data
    console.log(res)
    if (success) {
      Message.success(msg)
      console.log(11)
      return res.data
    }
    Message.error(msg)
    console.log(22)
    return Promise.reject(new Error(msg))
  },
  function (error) {
    console.log(33)
    Message.error(error.response.data)
    return Promise.reject(error)
  }
) // 响应拦截器
export default service // 导出axios实例

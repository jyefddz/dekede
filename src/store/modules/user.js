import { login, getImageCode, getUserInfoApi } from '@/api/user'
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: '',
    url: '',
    userId: '',
    userInfo: {},
    imgCode: ''
  },
  mutations: {
    setToken(state, payLoad) {
      state.token = payLoad.token
      state.userId = payLoad.userId
    },
    setImageCode(state, payLoad) {
      state.url = payLoad
    },
    setUserInfo(state, payLoad) {
      state.userInfo = payLoad
    },
    setImgCode(state, payLoad) {
      state.imgCode = payLoad
    }
  },
  actions: {
    // 登录获取token
    async getToken(context, payLoad) {
      // 发送请求
      const res = await login(payLoad)
      // console.log(res)
      context.commit('setToken', res)
      setTokenTime()
    },
    // 获取验证码
    async getImageCode(context, payLoad) {
      const res = await getImageCode(payLoad)
      context.commit('setImageCode', res)
    },
    // 获取用户信息
    async getUserInfo({ commit, state }) {
      const userInfo = await getUserInfoApi(state.userId)
      // console.log(userInfo)
      commit('setUserInfo', { ...userInfo })
    },
    // 退出
    logout({ commit, state }) {
      commit('setToken', '')
      commit('setUserInfo', {})
      state.userId = ''
    }
  }
}

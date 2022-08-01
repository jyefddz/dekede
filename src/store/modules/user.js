import { login, getImageCode } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: '',
    url: ''
  },
  mutations: {
    setToken(state, payLoad) {
      state.token = payLoad
    },
    setImageCode(state, payLoad) {
      state.url = `http://likede2-java.itheima.net${payLoad}`
      // console.log(state.url)
    }
  },
  actions: {
    async getToken(context, payLoad) {
      // 发送请求
      const res = await login(payLoad)
      console.log(res)
      context.commit('setToken', res.data.token)
    },
    async getImageCode(context, payLoad) {
      const res = await getImageCode(payLoad)
      context.commit('setImageCode', res.config.url)
      // console.log(res)
    }
  }
}

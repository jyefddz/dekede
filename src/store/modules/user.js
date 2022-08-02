import { login, getImageCode, getUserInfoApi } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: '',
    url: '',
    userId: '',
    userInfo: {},
    imgCode:''
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
    setImgCode(state,payLoad){
      state.imgCode= payLoad
    }
  },
  actions: {
    async getToken(context, payLoad) {
      // 发送请求
      const res = await login(payLoad)
      // console.log(res)
      context.commit('setToken', res)
    },
    async getImageCode(context, payLoad) {
      const res = await getImageCode(payLoad)
      context.commit('setImageCode', res)
    },
    async getUserInfo({commit,state}) {
      const userInfo = await getUserInfoApi(state.userId)
      console.log(userInfo);
      commit('setUserInfo', { ...userInfo })
    }
  }
}

import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}

// 图片验证码
export function getImageCode(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    method: 'GET'
  })
}

// 获取用户信息
export function getUserInfoApi(id){
  return request({
    url:'/user-service/user/'+id
  })
}

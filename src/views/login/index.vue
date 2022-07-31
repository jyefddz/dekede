<template>
  <div class="login-container">
    <div class="login-frombox">
      <img class="login-logo" src="../../assets/login_img/logo.png" alt="">
      <el-form class="login-form">
        <el-form-item>
          <el-input
            v-model="username"
            prefix-icon="el-icon-mobile-phone"
            placeholder="Username"
            name="username"
            type="text"
          />
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="password"
            prefix-icon="el-icon-lock"
            show-password
            placeholder="Password"
            name="password"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="code"
            prefix-icon="el-icon-message"
            placeholder="请输入验证码"
            type="text"
            name="code"
          >
            <template #suffix>
              <img class="suffix-img" src="../../assets/login_img/yzm.jpeg" alt="">
            </template>
          </el-input>
        </el-form-item>
        <el-button type="primary" style="width:100%;margin-bottom:30px;">Login</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      code: ''
    }
  },

  created() {
  },

  methods: {

  }
}
</script>

<style scoped lang="scss">
.login-container{
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/login_img/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 999;
}
.login-frombox{
  position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
}
.login-logo{
position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
}
.login-form {
    display: block;
    margin-top: 0em;
}
.svg-container{
padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
}
.el-input {
    display: inline-block;
    height: 47px;
    width: 100%;
    position: relative;
    font-size: 14px;
}
.suffix-img{
  display:block;
  height: 40px;
  background-size: cover;
}
</style>

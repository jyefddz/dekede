<template>
  <div class="login-container">
    <div class="login">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
        @keyup.enter.native="handleLogin"
      >
        <div class="title-container">
          <img src="~@/assets/login_img/logo.png" alt="" class="logo" />
        </div>

        <el-form-item prop="loginName">
          <span class="svg-container">
            <i class="el-icon-mobile-phone" />
          </span>
          <el-input
            ref="loginName"
            v-model="loginForm.loginName"
            placeholder="请输入账号"
            type="text"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-lock" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>

        <el-form-item prop="code" class="authcode">
          <span class="svg-container">
            <i class="el-icon-message" />
          </span>
          <el-input
            ref="code"
            v-model="loginForm.code"
            placeholder="请输入验证码"
            type="text"
          />
          <div class="authimg">
            <img @click="getImageCode" :src="$store.state.user.url" alt="" />
          </div>
        </el-form-item>

        <el-button
          :loading="loading"
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click.prevent="handleLogin"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        loginType: 0,
        clientToken: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            pattern: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
            message: '账号格式不正确',
            trigger: 'blur'
          }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    async handleLogin() {
      try {
        this.loading = true
        await this.$refs.loginForm.validate()
        await this.$store.dispatch('user/getToken', this.loginForm)
        this.$router.push({ path: this.redirect || '/' })
      } finally {
        this.loading = false
      }
    },
    getImageCode() {
      this.loginForm.clientToken = Math.floor(Math.random() * (1000000 - 1)) + 1
      this.$store.commit('user/setImgCode', this.loginForm.clientToken)
      this.$store.dispatch('user/getImageCode', this.loginForm.clientToken)
    }
  },
  created() {
    this.getImageCode()
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  background: url('~@/assets/login_img/background.png') no-repeat 0 0 / cover;
  .el-form-item__content {
    display: flex;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #999;
      height: 47px;
      // caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid #e2e2e2;
    background: #fff;
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login {
    position: relative;
    padding: 76px 35px 0;
    width: 518px;
    height: 388px;
    background-color: #fff;
    border-radius: 10px;
  }
  .authcode {
    .authimg {
      height: 52px;
      img {
        height: 100%;
      }
    }
  }
  .el-button {
    width: 448px;
    height: 52px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
  }
  .login-form {
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    font-size: 16px;
  }
  .title-container {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 96px;
    height: 96px;
    .logo {
      width: 100%;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

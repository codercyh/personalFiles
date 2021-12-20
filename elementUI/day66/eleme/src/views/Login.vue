<template>
  <div class = "login-group">
    <div class = "login-info">
      <h3>用户登录</h3>
      <el-form :model = "login" :rules = "rules" ref = "loginForm" label-position = "right" label-width = "80px">
        <el-form-item label = "用户名" prop = "username">
          <el-input v-model = "login.username" placeholder = "请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label = "密码" prop = "password">
          <el-input v-model = "login.password" placeholder = "请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type = "primary" @click = "loginFun">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      login: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }, {
          min: 5,
          max: 15,
          message: '长度必须在5-15位',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    loginFun () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$axios.post('http://192.168.162.100:3000/login/dologin', this.login).then(({ data }) => {
            if (data.code === 1) {
              localStorage.setItem('loginInfo', JSON.stringify(data.loginInfo))
              this.$message({
                type: 'success',
                message: '登录成功',
                onClose: () => {
                  // this.$router.push('home')
                  this.$router.replace('about')
                }
              })
            } else {
              this.$alert(data.msg, { type: 'error' })
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped lang = "scss">
.login-group {
  height: 100%;
  width: 100%;
  background: url("../assets/images/login-bg.jpg") no-repeat center/cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-info {
    width: 30%;
    background-color: rgba(0, 0, 0, .8);
    padding: 15px;

    h3 {
      text-align: center;
      color: whitesmoke;
    }
  }
}
</style>

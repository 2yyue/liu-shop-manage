<template>
  <div id="poster">
  <el-form :model='User' :rules="rules" ref="userForm" class="login-container" label-position="right" label-width="0px" v-loading="loading">
    <h3 class="login_title">欢迎登录小刘商城</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="User.username" prefix-icon="el-icon-user" auto-complete="off" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="User.password" prefix-icon="el-icon-lock" show-password auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 50%;border: none" @click="login">登录</el-button>
      <el-button style="width: 33%;border: none" @click="register">注册</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
  // import {setToken} from '../../utils/auth'

  export default {
    name: 'Login',
    data() {
      return {
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 12, message: '长度在3到12个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 5, max: 18, message: '长度在5到18个字符', trigger: 'blur'}
          ]
        },
        checked: true,
        User: {
          username: 'admin',
          password: 'admin123'
        },
        loading: false
      }
    },
    methods: {
      query() {
        this.request.get('/user/query', {
          params: {
            username: this.User.username,
            password: this.User.password
          }
        })
          .then(res => {
            console.log(res)
            if (res !== null) {
              this.$router.push({path: '/home/index'})
            } else {
              this.$message.error('用户名或密码错误')
            }
          })
          .catch(failResponse => {})
      },
      login() {
        this.$refs['userForm'].validate((valid) => {
          if (valid) {
            this.query()
          } else {
            console.log('submit error!')
            return false
          }
        })
      },
      register() {
        this.$router.replace({path: '/register'})
      }
    }
  }
</script>

<style scoped>
  #poster {
    background: url("../../assets/backgroud.jpg") no-repeat center;
    height: 100vh;
    width: 100%;
    background-size: cover;
    position: fixed;
    overflow: hidden;
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 250px 1450px; /* 位于窗口位置 */
    width: 350px; /* 限制宽度 */
    padding: 35px 35px 15px 35px; /* 边界 */
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .login_remember {
    color: black;
  }

</style>

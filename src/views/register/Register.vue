<template>
    <div>
      <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="80px" class="register-container">
        <h2 class="register-title">欢迎新用户注册</h2>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="registerForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordCheck">
          <el-input type="password" v-model="registerForm.passwordCheck" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item :label="registerForm.phoneOrEmail" prop="phoneOrEmail">
<!--          <el-input :v-model="registerForm.phoneOrEmail === '手机号' ? registerForm.phone : registerForm.email"-->
          <el-input v-model="registerForm.phone"
                    placeholder="请输入手机号或邮箱地址">
            <el-select slot="prepend" v-model="registerForm.phoneOrEmail">
              <el-option label="手机号" value="手机号"></el-option>
              <el-option label="邮箱地址" value="邮箱地址"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-toilet-paper" @click="showCode"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input type="text" v-model="registerForm.code"  placeholder="请输入接收到的验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register('registerForm')">注册</el-button>
          <el-button @click="resetForm('registerForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      name: 'Register',
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'))
          } else {
            if (this.registerForm.passwordCheck !== '') {
              this.$refs.registerForm.validateField('passwordCheck')
            }
            callback()
          }
        }
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'))
          } else if (value !== this.registerForm.password) {
            callback(new Error('两次密码不一致！'))
          } else {
            callback()
          }
        }
        return {
          vertifyCode: '',
          registerForm: {
            name: '',
            password: '',
            passwordCheck: '',
            phoneOrEmail: '手机',
            phone: '',
            email: ''
          },
          rules: {
            name: [
              {required: true, message: '请输入您的用户名', trigger: 'blur'},
              {min: 2, max: 12, message: '长度在2到12个字符', trigger: 'blur'}
            ],
            password: [
              {
                validator: validatePass, trigger: 'blur'
              }
            ],
            passwordCheck: [
              {
                validator: validatePass2, trigger: 'blur'
              }
            ]
          }
        }
      },
      methods: {
        register(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('注册成功！')
              this.$router.replace('/login')
            } else {
              console.log('error submit!')
              return false
            }
          })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields()
        },
        getCode() {
          this.$axios.get('/user/getcode', {
            params: {
              phoneOrEmail: this.registerForm.phone != null ? this.registerForm.phone : this.registerForm.email
            }
          })
            .then(res => {
              (this.vertifyCode = res.data)
            })
            .catch(function (error) {
              console.log(error)
            })
        },
        showCode() {
          const h = this.$createElement
          this.$notify({
            title: '获取验证码',
            message: h('i', {
              style: 'color: teal'
            }, '发送到' + this.registerForm.phoneOrEmail + '[' + this.registerForm.phone + this.registerForm.email + ']' + '的验证码是' + this.vertifyCode + '(五分钟内有效)')
          })
        }
      }
    }
</script>

<style scoped>
  .register-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 150px 800px;
    width: 450px;/* 限制宽度 */
    padding: 35px 35px 15px 35px;/* 边界 */
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .register-title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>

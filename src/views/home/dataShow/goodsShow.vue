<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据展示</el-breadcrumb-item>
      <el-breadcrumb-item>商品上新</el-breadcrumb-item>
    </el-breadcrumb>
    <p>商品上新</p>
    <p style="text-align: center;font-size: 22px;color:#c09853;">生成二维码</p>
    <div id="code"></div>
    <div id="code1" ref="QRCodeIo"></div>
  </div>
</template>

<script>
  import QRCode from 'qrcodejs2'
    export default {
        name: 'goodsShow',
      data() {
          return {
            code: {},
            book: {
              id: 100,
              name: '《三体》',
              price: '￥20'
            }
          }
      },
      methods: {
          createCode() {
            this.qrcode = new QRCode('code', {
              text: '{book}',
              width: 100,
              height: 100,
              colorDark: '#000000',
              colorLight: '#ffffff'
            })
          },
        createCode1() {
            let code1 = new QRCode(this.$refs.QRCodeIo, {
              text: 'https://blog.csdn.net/weixin_42601136',
              width: 300,
              height: 300,
              colorDark: '#fff',
              colorLight: '#000000'
              // correctLevel: QRCode.correctLevel.L
            })
          console.log(code1)
        }
      },
      mounted() {
          this.createCode()
        this.createCode1()
      }
    }
</script>

<style scoped>

</style>

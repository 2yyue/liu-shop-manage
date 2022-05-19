<template>
  <div class="index">
<!--    面包屑-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
<!--    走马灯 outside，显示在外面，none不显示-->
<!--     indicator-position="outside"-->
<!--    type="card"卡片类型-->
<!--    interval时间-->
    <el-carousel id="carousel" :interval="3000" arrow="always" height="650px">
      <el-carousel-item v-for="(ad,index) in imgList" :key="index">
        <img :src="ad.img" alt="轮播图"/>
      </el-carousel-item>
    </el-carousel>
<!--    卡片-->
<!--    gutter分割间隔-->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6" v-for="(card,index) in cardList" :key="index">
        <el-card :body-style="{padding: '0px'}">
          <img :src="card.img" class="image" alt="图片">
          <div style="padding: 14px;">
            <span>{{card.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{currentDate}}</time>
              <el-button type="text" class="button">操作</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        currentDate: new Date(),

        imgList: [
          {
            img: require('../../assets/logo.png'),
            title: 'vue-logo'
          },
          {
            img: require('../../assets/backgroud.jpg'),
            title: '背景'
          }
        ],
        cardList: [
          {
            title: '登录',
            img: require('../../assets/logo.png')
          },
          {
            title: '注册',
            img: require('../../assets/logo.png')
          },
          {
            title: '认证',
            img: require('../../assets/logo.png')
          },
          {
            title: '管理',
            img: require('../../assets/logo.png')
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  /*1080*1920 9:16*/
  #carousel {
    margin: 50px auto;
    width: 1184px;
    height: 650px;
  }
  #carousel img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
/*图片样式*/
  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

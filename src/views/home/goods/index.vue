<template>
  <div>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  </el-breadcrumb>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="12" :md="6" v-for="(card,index) in cardList" :key="index">
      <el-card :body-style="{padding: '0px'}">
        <img :src="card.img" class="image" alt="图片">
        <div style="padding: 14px;">
          <span>{{card.title}}</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button" @click="go()">操作</el-button>
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
          cardList: [
            {
              title: '分类管理',
              img: require('@/assets/logo.png')
            },
            {
              title: '品牌管理',
              img: require('@/assets/logo.png')
            },
            {
              title: '商品管理',
              img: require('@/assets/logo.png')
            }
          ]
        }
      },
      methods: {
          go(card) {
          }
      }
    }
</script>

<style scoped>

</style>

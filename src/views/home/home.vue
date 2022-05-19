<template>
  <div class="home">
    <el-container style="min-height: 100vh;">
<!--      左侧导航栏-->
      <el-aside :width="isCollapse ? '60px' : '220px'">
        <el-menu default-active="1" :collapse-transition="false" :collapse="isCollapse" router>
          <div style="height: 60px; line-height: 60px; text-align: center">
            <img src="../../assets/logo.png" alt="logo" style="width: 20px;">
            <b style="color: #000000" v-show="!isCollapse">后台管理系统</b>
          </div>
          <el-menu-item index="/home/index">
            <i class="el-icon-house"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="/items">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/items/category">分类管理</el-menu-item>
            <el-menu-item index="/brand">品牌管理</el-menu-item>
            <el-menu-item index="/goods">商品管理</el-menu-item>
          </el-submenu>
          <el-submenu index="order">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="/myorder">我的订单</el-menu-item>
            <el-menu-item index="/order">管理订单</el-menu-item>
          </el-submenu>
          <el-submenu index="user">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/usershow">用户展示</el-menu-item>
            <el-menu-item index="/code">用户注册验证码管理</el-menu-item>
          </el-submenu>
          <el-submenu index="/promotion">
            <template slot="title">
              <i class="el-icon-s-marketing"></i>
              <span>促销管理</span>
            </template>
            <el-menu-item index="/coupon">代金券活动</el-menu-item>
            <el-menu-item index="/promotion">促销活动</el-menu-item>
            <el-menu-item index="/seckill">秒杀活动</el-menu-item>
          </el-submenu>
          <el-submenu index="/datashow">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>数据展示</span>
            </template>
            <el-menu-item index="/useractivation">用户活跃度</el-menu-item>
            <el-menu-item index="/goodsshow">商品上新</el-menu-item>
            <el-menu-item index="/orderdelivery">订单交付</el-menu-item>
          </el-submenu>
          <el-submenu index="/personalset">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>个性化设置</span>
            </template>
            <el-menu-item index="/preference">用户偏爱喜好</el-menu-item>
            <el-menu-item index="/recommendation">相似商品推荐</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="font-size: 12px; border-bottom: 1px solid #ccc; line-height: 60px; display: flex">
          <div style="flex: 1;font-size: 18px;">
            <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse()"></span>
          </div>
          <el-dropdown style="width: 70px; cursor: pointer">
            <span>{{username}}</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/login">退出登录</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/home/index">返回首页</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      </el-container>
      <el-footer>
        <p><a href="https://github.com/2yyue">关于我们</a> Copyright © 2022 Liu_King</p>
      </el-footer>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        username: 'admin',
        collapseBtnClass: 'el-icon-s-fold',
        isCollapse: false
      }
    },
    methods: {
      collapse() {
        this.isCollapse = !this.isCollapse
        if (this.isCollapse) {
          this.collapseBtnClass = 'el-icon-s-unfold'
        } else {
          this.collapseBtnClass = 'el-icon-s-fold'
        }
      }
    }
  }
</script>

<style scoped>
  .el-menu {
    height: 100%;
    overflow-x: hidden;
  }
  .el-container {
    position: relative;
  }
  .el-footer {
    background-color: #e5f2ff;
    max-height: 40px;
    text-align: center;
  }

</style>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>我的订单</el-breadcrumb-item>
    </el-breadcrumb>
    <p>我的订单</p>
  </div>
</template>

<script>
    export default {
        name: 'myOrder'
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据展示</el-breadcrumb-item>
      <el-breadcrumb-item>订单交付</el-breadcrumb-item>
    </el-breadcrumb>
    <p>订单交付</p>
  </div>
</template>

<script>
    export default {
        name: 'orderDelivery'
    }
</script>

<style scoped>

</style>

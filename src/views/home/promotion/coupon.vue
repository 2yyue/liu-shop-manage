<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>促销管理</el-breadcrumb-item>
      <el-breadcrumb-item>代金券活动</el-breadcrumb-item>
    </el-breadcrumb>
    <p>代金券</p>
  </div>
</template>

<script>
    export default {
        name: 'coupon'
    }
</script>

<style scoped>

</style>

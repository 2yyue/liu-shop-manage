<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>促销管理</el-breadcrumb-item>
      <el-breadcrumb-item>秒杀活动</el-breadcrumb-item>
    </el-breadcrumb>
    <p>秒杀</p>
  </div>
</template>

<script>
    export default {
        name: 'seckill'
    }
</script>

<style scoped>

</style>

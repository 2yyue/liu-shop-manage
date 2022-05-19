<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据展示</el-breadcrumb-item>
      <el-breadcrumb-item>用户活跃度</el-breadcrumb-item>
    </el-breadcrumb>
    <p>用户活跃度</p>
  </div>
</template>

<script>
    export default {
        name: 'userActivation'
    }
</script>

<style scoped>

</style>

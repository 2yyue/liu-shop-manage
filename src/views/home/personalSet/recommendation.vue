<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个性化设置</el-breadcrumb-item>
      <el-breadcrumb-item>相似商品推荐</el-breadcrumb-item>
    </el-breadcrumb>
    <p>相似商品推荐</p>
  </div>
</template>

<script>
    export default {
        name: 'recommendation'
    }
</script>

<style scoped>

</style>

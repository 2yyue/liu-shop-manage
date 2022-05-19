<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个性化设置</el-breadcrumb-item>
      <el-breadcrumb-item>用户偏爱喜好</el-breadcrumb-item>
    </el-breadcrumb>
    <p>用户偏爱</p>
  </div>
</template>

<script>
    export default {
        name: 'preference'
    }
</script>

<style scoped>

</style>

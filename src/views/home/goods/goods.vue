<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/items' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
    </el-breadcrumb>
    <p>商品</p>
    <p>文件上传</p>
    <OssUpload></OssUpload>
  </div>
</template>

<script>
    import OssUpload from '../../../components/upload/OssUpload'
    export default {
        name: 'goods',
      components: {OssUpload}
    }
</script>

<style scoped>

</style>

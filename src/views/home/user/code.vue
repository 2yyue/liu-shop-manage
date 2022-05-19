<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户注册验证码管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin: 10px 0">
      <el-input style="width: 200px" placeholder="请输入关键字" suffix-icon="el-icon-search"></el-input>
      <el-button style="margin-left: 5px" type="primary">搜索</el-button>
    </div>
    <el-table :data="data" border stripe :header-cell-class-name="headerBg">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phoneOrEmail"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="code"
        label="验证码"
        width="180">
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" class="el-icon-edit">编辑</el-button>
          <el-button type="danger" class="el-icon-delete">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: 'code',
      data() {
        return {
          data: [],
          headerBg: 'headerBg'
        }
      },
      mounted() {
        this.$axios.get('/user/user/list')
          .then(res => {
            (this.data = res.data)
          })
          .catch(function (error) {
            console.log(error)
          })
        this.$axios.get('/user/user/total')
          .then(res => {
            (this.total = res.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
</script>

<style scoped>

</style>

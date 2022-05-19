<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/items' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin: 10px 0">
      <el-input style="width: 200px" placeholder="请输入关键字" suffix-icon="el-icon-search"></el-input>
<!--      <el-input style="width: 200px" placeholder="请输入用户名" suffix-icon="el-icon-search" v-model="username"></el-input>-->
<!--      <el-input style="width: 200px" placeholder="请输入邮箱" suffix-icon="el-icon-message" class="ml-5" v-model="email"></el-input>-->
<!--      <el-input style="width: 200px" placeholder="请输入地址" suffix-icon="el-icon-position" class="ml-5" v-model="address"></el-input>-->
      <el-button style="margin-left: 5px" type="primary">搜索</el-button>
    </div>
    <div style="margin: 10px 0;">
      <el-button type="primary" class="el-icon-plus">新增分类</el-button>
    </div>
    <el-table :data="tableData" border stripe>
      <el-table-column
        prop="name"
        label="类别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="isParent"
        label="是否为父类"
        :formatter="isParent"
        width="180">
      </el-table-column>
      <el-table-column
        prop="parentId"
        label="父类id">
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" class="el-icon-edit" @click="getNode(scope.row.id)">编辑</el-button>
          <el-button type="danger" class="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>
</template>

<script>

  export default {
    name: 'category',
    data() {
      return {
        tableData: [],
        currentPage: 1,
        nodeData: [],
        total: 10
      }
    },
    created() {
      this.load()
    },
    mounted() {},
    methods: {
      getNode(val) {
        this.request.get('/items/category/list', {
          params: {
            pid: val
          }
        })
        .then(res => {
          this.nodeData = Object.values(res)
        })
      },
      load() {
        this.request.get('/items/category/list', {
          params: {
            pid: 0
          }
        })
          .then(res => {
            this.total = res.length
            this.tableData = Object.values(res)
          })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      isParent(row) {
        const type = row.isParent
        if (type === true) {
          return '是'
        }
        return '不是'
      },
      handleAdd(node) {
        if (node.parentId !== 0) {
          this.verify().then(() => {
            this.$http({
              method: 'post',
              url: '/items/category',
              data: this.$qs.stringify(node)
            }).then(() => {
              this.reloadData(node.id)
            }).catch()
          }).catch(() => {
            this.$router.push('/login')
          })
        } else {
          this.$message.error('刷新后重试！')
        }
      },
      handleEdit(id, name) {
        const node = {
          id: id,
          name: name
        }
        this.verify().then(() => {
          this.$http({
            method: 'put',
            url: '/items/category',
            data: this.$qs.stringify(node)
          }).then(() => {
            this.$message.info('修改成功！')
          }).catch(() => {
            this.$message.info('修改失败！')
          })
        }).catch(() => {
          this.$router.push('/login')
        })
      },
      handleDelete(id) {
        this.verify().then(() => {
          this.$http.delete('/items/category/cid/' + id).then(() => {
            this.$message.info('删除成功！')
          }).catch(() => {
            this.$message.info('删除失败！')
          })
        }).catch(() => {
          this.$router.push('/login')
        })
      },
      handleClick(node) {
        console.log(node)
      },
      reloadData(id) {
        // 操作完成后刷新数据
        this.$axios.get('/items/category/list?pid=' + id).then().catch()
      },
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>

</style>

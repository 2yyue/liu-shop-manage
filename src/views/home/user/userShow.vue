<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户展示</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin: 10px 0">
<!--    <el-input style="width: 200px" placeholder="请输入关键字" suffix-icon="el-icon-search"></el-input>-->
      <el-input style="width: 200px" placeholder="请输入用户名" suffix-icon="el-icon-search" v-model="name"></el-input>
      <el-input style="width: 200px" placeholder="请输入用户类型" suffix-icon="el-icon-user" class="ml-5" v-model="type"></el-input>
      <el-button style="margin-left: 5px" type="primary" @click="load">搜索</el-button>
      <el-button type="warning" @click="reset">重置</el-button>
      <el-popconfirm
        style="margin-left: 5px;"
        confirm-button-text='确定'
        cancel-button-text='我再想想'
        icon="el-icon-info"
        icon-color="red"
        title="您确定批量删除这些数据吗？"
        @confirm="delBatch"
      >
        <el-button type="danger" slot="reference" class="el-icon-remove-outline">批量删除</el-button>
      </el-popconfirm>
      <el-upload action="/user/user/import" style="display: inline-block" :on-success="handleExcelImportSuccess">
        <el-button type="primary" style="margin-left: 5px;" class="el-icon-bottom">导入</el-button>
      </el-upload>
      <el-button type="primary" class="el-icon-top" @click="exp">导出</el-button>
    </div>
    <div style="margin: 10px 0;">
      <el-button type="primary" class="el-icon-plus" @click="handleAdd">新增用户</el-button>
    </div>
    <el-table v-loading="loading" :data="tableData" border stripe :header-cell-class-name="headerBg" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        prop="id"
        label="用户id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        :show-overflow-tooltip="true"
        label="用户角色">
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" class="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm
            style="margin-left: 5px"
            confirm-button-text='确定'
            cancel-button-text='我再想想'
            icon="el-icon-info"
            icon-color="red"
            title="您确定删除吗？"
            @confirm="del(scope.row.id)">
            <el-button type="danger" slot="reference">删除 <i class="el-icon-remove-outline"></i></el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <el-dialog title="用户信息" :visible.sync="dialogFormVisible" width="30%" >
      <el-form label-width="80px" size="small">
        <el-form-item label="用户名">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    // import request from '../../../utils/request'

    export default {
      name: 'userShow',
      data() {
          return {
            tableData: [],
            total: 0,
            pageNum: 1,
            pageSize: 5,
            name: '',
            type: '',
            pwd: '',
            form: {},
            dialogFormVisible: false,
            // 复选框
            multipleSelection: [],
            headerBg: 'headerBg',
            loading: false
          }
      },
      created() {
        this.load()
        // this.form = Object.assign({},row)
      },
      // mounted() {
      //   this.request.get('/user/user/list')
      //     .then(res => {
      //       // for (let i = 0; i < res.length; i++) {
      //       //   this.data[i] = {
      //       //     id: res[i].id,
      //       //     name: res[i].name,
      //       //     type: res[i].type
      //       //   }
      //       // }
      //       this.total = res.length
      //       // 将对象转化为数组
      //       this.data = Object.values(res)
      //       // console.log(this.data)
      //       // console.log('ok')
      //     })
      //   //   (this.data = res.data)
      //   // })
      //   // .catch(function (error) {
      //   //   console.log(error)
      //   // })
      //   // this.request.get('/user/user/total')
      //   //   .then(res => {
      //   //     this.total = res.data
      //   //     // })
      //   //     // .catch(function (error) {
      //   //     //   console.log(error)
      //   //     // })
      //   //     console.log(res)
      //   //   })
      // },
      methods: {
        load() {
          this.request.get('/user/user/page', {
            params: {
              key: this.name,
              page: this.pageNum,
              rows: this.pageSize,
              sortBy: '',
              desc: ''
            }
          })
            .then(res => {
              // console.log(res)
              this.tableData = Object.values(res.items)
              this.total = res.total
            })
        },
        handleExcelImportSuccess() {
          this.$message.success('导入成功')
          this.load()
        },
        exp() {
          window.open('/user/user/export')
        },
        save() {
          this.request.post('/user/user', this.form).then(res => {
            if (res) {
              this.$message.success('保存成功')
              this.dialogFormVisible = false
              this.load()
            } else {
              this.$message.error('保存失败')
            }
          })
        },
        handleAdd() {
          this.dialogFormVisible = true
          this.form = {
            name: '',
            pwd: '',
            type: '普通用户'
          }
        },
        handleEdit(row) {
          this.form = row
          this.dialogFormVisible = true
        },
        del(id) {
          this.request.delete('/user/user/' + id).then(res => {
            if (res) {
              this.$message.success('删除成功')
              this.load()
            } else {
              this.$message.error('删除失败')
            }
          })
        },
        handleSizeChange(pageSize) {
          console.log(pageSize)
          this.pageSize = pageSize
          this.load()
        },
        handleCurrentChange(pageNum) {
          console.log(pageNum)
          this.pageNum = pageNum
          this.load()
        },
        handleSelectionChange(val) {
          console.log(val)
          this.multipleSelection = val
        },
        // 原数据库设计type类型为int，需要转化，后修改为字符型
        // 写在table列标签里面:formatter="roleFormatter"
        // roleFormatter(row, column) {
        //   const type = row.type
        //   if (type === 0) {
        //     return '超级管理员'
        //   } else if (type === 1) {
        //     return '普通用户'
        //   } else if (type === 2) {
        //     return '商户'
        //   } else {
        //     return '未知角色'
        //   }
        // },
        delBatch() {
          let ids = this.multipleSelection.map(v => v.id) // [{}, {}, {}] => [1,2,3]
          this.request.post('/user/user/del/batch', ids).then(res => {
            if (res) {
              this.$message.success('批量删除成功')
              this.load()
            } else {
              this.$message.error('批量删除失败')
            }
          })
        },
        reset() {
          this.name = ''
          this.type = ''
          this.load()
        }
      }
    }
</script>

<style scoped>

</style>

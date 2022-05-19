<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/items' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>品牌管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <span>一级节点</span>
            <el-tree
              :data="data"
              :props="defaultProps"
              default-expand-all
              @node-click="handleNodeClick"
              ref="tree">
            </el-tree>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{padding: '0px'}">
            <span>二级节点</span>
            <el-tree
              :data="data2"
              :props="defaultProps"
              default-expand-all
              @node-click="handleNodeClick"
              ref="tree">
            </el-tree>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{padding: '0px'}">
            <span>三级节点</span>
            <el-tree
              :data="data3"
              :props="defaultProps"
              default-expand-all
              @node-click="handleNodeClick"
              ref="tree">
            </el-tree>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'brand',
    data() {
      return {
        data: [],
        data2: [],
        data3: [],
        node: {},
        defaultProps: {
          id: '',
          isParent: '',
          parentId: '',
          children: 'children',
          label: 'label'
        }
      }
    },
    // 钩子函数，生命周期，
    beforeMount() {
      this.init()
    },
    methods: {
      async init() {
        this.loadData(0, this.data)
      },
      // 加载父节点为pid的数据到t
      loadData(pid, t) {
        this.request.get('/items/category/list', {
          params: {
            pid: pid
          }
        }).then(res => {
          for (let i = 0; i < res.length; i++) {
            this.node.id = res[i].id
            this.node.label = res[i].name
            this.node.isParent = res[i].isParent
            this.node.parentId = res[i].parentId
            this.node.children = ''
            t.push(this.node)
            this.node = {}
          }
        }).catch(function (error) {
          console.log(error)
        })
      },
      handleNodeClick(data) {
        console.log(data.id)
        if (data.parentId === 0) {
          this.data2 = []
          this.loadData(data.id, this.data2)
        } else if (data.isParent) {
          this.data3 = []
          this.loadData(data.id, this.data3)
        } else {
          console.log('不变')
        }
      }
    }
  }
</script>

<style scoped>

</style>

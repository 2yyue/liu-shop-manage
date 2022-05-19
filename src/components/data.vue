<template>
  <div>
    {{data}}
    {{treeData}}
  </div>
</template>

<script>
  import category from '../api/items/category'
  export default {
    name: 'data',
    data() {
      return {
        data: '123',
        treeData: []
      }
    },
    mounted() {
      this.init()
      this.data = this.treeData
    },
    methods: {
      async init() {
        await category.getCategory(0).then(res => {
          this.treeData = Object.values(res)
        })
        console.log('ok')
      }
    }
  }
</script>

<style scoped>

</style>

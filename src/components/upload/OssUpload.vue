<template>
  <el-upload
    class="upload-demo"
    :action="objData.host"
    :file-list="fileList"
    :data="objData"
    :before-upload="ossPolicy"
    list-type="picture">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>

    export default {
      name: 'OssUpload',
      data() {
        return {
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
          objData: {
            OSSAccessKeyId: '',
            policy: '',
            Signature: '',
            key: '',
            host: '',
            dir: ''
          }
        }
      },
      methods: {
        ossPolicy(file) {
        //  上传前进行服务器签名
          let _self = this
          return new Promise((resolve, reject) => {
            // 请求axios
            this.request.get('/file/oss/policy').then(res => {
              console.log('ok')
              _self.objData.OSSAccessKeyId = res.accessid
              _self.objData.policy = res.policy
              _self.objData.Signature = res.signature
              _self.objData.key = res.dir + '${' +
                'filename}'
              _self.objData.host = res.host
              _self.objData.dir = res.dir
              resolve(true)
            })
            .catch(function (error) {
              console.log(error)
              reject(error, false)
            })
          })
        }
      }
    }
</script>

<style scoped>

</style>

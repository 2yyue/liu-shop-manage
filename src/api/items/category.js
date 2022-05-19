import request from '@/utils/request'

export default {
  getCategory(pid) {
    return request({
      method: 'get',
      url: '/items/category/list?pid=' + pid
    })
  }
}

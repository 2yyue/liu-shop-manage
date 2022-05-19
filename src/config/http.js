// import axios from 'axios'
// import config from './config'
//
// const serviceAxios = axios.create({
//   baseURL: '/api',
//   timeout: 30000
// })
//
// // 请求拦截器
// serviceAxios.interceptors.request.use(
//   (request) => {
//     console.log('请求配置', request)
//     // 业务逻辑
//     return request
//   },
//   (error) => {
//     Promise.reject(error)
//   }
// )
//
// // 响应拦截器
// serviceAxios.interceptors.response.use(
//   (respose) => {
//     console.log('响应结果', respose)
//   },
//   (error) => {
//     console.log(error)
//   }
// )
//
// export default serviceAxios

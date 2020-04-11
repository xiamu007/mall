import axios from "axios"

export function request(config) {
  const instance = axios.create({
    baseURL:"http://152.136.185.210:8000/api/h8",
    timeout: 5000
  })
// 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
  })
  // 
  instance.interceptors.response.use(res => {
   
    return res.data
  }, err => {
  })
  return instance(config)
}
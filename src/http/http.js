import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

// 请求超时
axios.defaults.timeout = 5000
// 增加请求默认路径前缀
axios.defaults.baseURL = '/form_manage/'

/**
 * 请求拦截
 */
axios.interceptors.request.use(
  config => {
    // 请求前最后的配置
    config.headers.terminal = 1
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */
axios.interceptors.response.use(
  response => {
    // 请求成功后执行的代码
    if (response.data.error !== null) {
      message.error(response.data.error.message)
    }
    return response.data
  },
  // 请求失败
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          message.error('错误请求！')
          break
        case 403:
          message.error('拒绝访问！')
          break
        case 404:
          message.error('请求错误,未找到该资源！')
          break
        case 500:
          message.error('服务器端出错！')
          break
        case 502:
          message.error('网络错误！')
          break
        case 503:
          message.error('服务不可用！')
          break
        case 504:
          message.error('网络超时！')
          break
        default:
          return message.error(error)
      }
    } else {
      message.error('连接到服务器失败！')
    }
  }
)

const postMethod = new Map()
postMethod.set(1, 'application/json; charset=utf-8')
postMethod.set(2, 'application/x-www-form-urlencoded; charset=utf-8')

export default {

  get (url, params) {
    const options = {}
    if (params) {
      options.params = params
    }
    return axios.get(url, options)
  },

  post (url, data, method = 1) {
    const options = {}
    options.headers = {
      headers: {
        'Content-Type': postMethod.get(method)
      }
    }
    if (method === 1) {
      return axios.post(url, data, options)
    }
    return axios.post(url, qs.stringify(data), options)
  }

}

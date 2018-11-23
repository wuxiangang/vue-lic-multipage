import axios from 'axios'
import qs from 'qs'
import 'babel-polyfill'

const APIS = {
  internationCode: {
    method: 'GET',
    url: '/api/v1/common/get_country'
  }
}

axios.defaults.baseURL = 'http://192.168.2.211:8085'
// axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.responseType = 'json'

axios.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}]

axios.interceptors.request.use(config => {
  config.headers['Authorization'] = 'Bearer'
  return config
},
error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export function fetch (options) {
  if (options.constructor !== Object) throw 'fetch options must be object!'
  if (!options.api && !options.url) throw 'fetch options have no api or url!'

  return new Promise((resolve, reject) => {
    const method = !options.url ? APIS[options.api].method : options.method
    const url = !options.url ? APIS[options.api].url : options.url
    if (!method) throw 'fetch options have no method!'

    axios[method.toLowerCase()](url, options.params, options.configs)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
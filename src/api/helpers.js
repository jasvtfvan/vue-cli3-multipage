import axios from 'axios'

export function get (url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then(res => {
      const { data } = res.data
      return data
    }).catch(() => {
    })
  }
}

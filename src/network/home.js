import {request} from './requests.js'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
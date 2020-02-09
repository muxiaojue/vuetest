import Axios from 'axios'

export function request(config){
  const instance = new Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    //真实地址请联系微信coderwhy001
    timeout: 4000
  })

  instance.interceptors.request.use(
    config => {      
      return config
    },
    err => {
      console.log(err);
    }
  )
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      console.log(err);
    }
  )

  return instance(config)
}
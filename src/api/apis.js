import axios from 'axios'


let req=axios.create({
    baseURL:'http://192.168.0.101:3000',
    timeout:10000
})

export function getIndex(){
  return req.get('/api/seller')
}

export function getGoods(){
  return req.get('/api/goods')
}
export function getEva(){
  return req.get('/api/ratings')
}
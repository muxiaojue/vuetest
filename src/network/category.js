import {request} from './requests.js'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubCategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}

export class Detail {
  constructor(goodInfo){
    this.title = goodInfo.title
    this.img = goodInfo.img
    this.price = goodInfo.price
    this.cfav = goodInfo.cfav
  } 
}
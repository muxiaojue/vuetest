import {request} from './requests.js'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    } 
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class goodInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.oldPrice = itemInfo.oldPrice
    this.price = itemInfo.price
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

export class shopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
  }
}

export class goodDetail {
  constructor(detailInfo) {
    this.desc = detailInfo.desc
    this.detailKey = detailInfo.detailImage[0].key
    this.detailImages = detailInfo.detailImage[0].list
  }
}

export class paramInfo {
  constructor(info, ruleTables) {
    this.infos = info
    this.ruleTables = ruleTables
  }
}
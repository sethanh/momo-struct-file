import {IMAGE} from  '@src/core'

const settings = [
  { title: "kyc"},
  { title: "recover_phrase" },
  { title: "security"},
  { title: "change_password" },
]
const promotions=[
  {promotion:30,name:'Dầu gội thảo mộc',address:'130 Đống Đa Hải Châu',price:115000,image: IMAGE.BgPromotion},
  {promotion:10,name:'Dầu xả',address:'130 Sơn Trà',price:125000,image: IMAGE.BgPromotion02},
  {promotion:5,name:'Sơn móng tay',address:'130 Đống Đa hải chây',price:55000,image: IMAGE.BgPromotion03},
  {promotion:5,name:'Sơn móng tay',address:'130 Đống Đa hải chây',price:55000,image: IMAGE.BgPromotion04},
]
const offers=[
  {unit:0,name:'Venus Hair Salon ',address:'130 Đống Đa Hải Châu',image: IMAGE.BgOffer01},
  {unit:1,name:'Herbal Spa',address:'130 Sơn Trà',price:125000,image: IMAGE.BgOffer02},
  {unit:2,name:'Venus Nail',address:'130 Đống Đa hải chây',image: IMAGE.BgOffer01},
]
const khuvucs=['Toàn quốc','Hà Nội','TP.Hồ Chí Minh','Đà Nẵng']
export const homeConst = {
  settings,
  promotions,
  offers,
  khuvucs
}
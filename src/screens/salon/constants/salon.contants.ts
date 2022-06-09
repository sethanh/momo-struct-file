import {IMAGE} from  '@src/core'

const infors=[
  {name:'Venus Hair Salon ',address:'130 Đống Đa Hải Châu',image: IMAGE.IcVenus,star:5,quantify:452,open:'8:30 - 21:00',far:0.5,bgImage:IMAGE.BgSalon},
  {name:'Herbal Spa',address:'130 Sơn Trà',image: IMAGE.IcAvenue,star:4.5,quantify:45,open:'8:30 - 21:00',far:0.2,bgImage:IMAGE.BgSalon},
  {name:'Venus Nail',address:'130 Đống Đa hải chây',image: IMAGE.IcLammoc,star:3.5,quantify:512,open:'8:30 - 21:00',far:0.2,bgImage:IMAGE.BgSalon},
  {name:'Venus Nail',address:'130 Đống Đa hải chây',image: IMAGE.IcQuocphong,star:5,quantify:152,open:'8:30 - 21:00',far:0.3,bgImage:IMAGE.BgSalon},
  {name:'Venus Nail',address:'130 Đống Đa hải chây',image: IMAGE.IcLalui,star:4.8,quantify:252,open:'8:30 - 21:00',far:0.6,bgImage:IMAGE.BgSalon}
]
const promotions=[
  {promotion:30,name:'Dầu gội thảo mộc',address:'130 Đống Đa Hải Châu',price:115000,image: IMAGE.BgPromotion,flash:1800},
  {promotion:10,name:'Dầu xả',address:'130 Sơn Trà',price:125000,image: IMAGE.BgPromotion02,flash:2000},
  {promotion:5,name:'Sơn móng tay',address:'130 Đống Đa hải chây',price:55000,image: IMAGE.BgPromotion03,flash: 1200},
  {promotion:5,name:'Sơn móng tay',address:'130 Đống Đa hải chây',price:55000,image: IMAGE.BgPromotion04,flash:1800},
]

const services01=[
  {name:'Phục hồi tóc chẻ ngọn',price:115000,image: IMAGE.BgPromotion,time:30},
  {name:'phụ hồi phủ lụa',price:125000,image: IMAGE.BgPromotion02,time:40, promotion:10},
  {name:'phục hồi collagen',price:55000,image: IMAGE.BgPromotion03,time:120},
  {name:'Phục hồi keratin',price:55000,image: IMAGE.BgPromotion04,time:90},
]

const services02=[
  {name:'Nhuộm collagen',price:55000,image: IMAGE.BgPromotion03,time:120},
  {name:'Nhuộm keratin',price:55000,image: IMAGE.BgPromotion04,time:90},
  {name:'Nhuộm tóc chẻ ngọn',price:115000,image: IMAGE.BgPromotion,time:30, promotion:30},
  {name:'Nhuộm phủ lụa',price:125000,image: IMAGE.BgPromotion02,time:40, promotion:15},
]

const services03=[
  {name:'Gội đầu collagen',price:55000,image: IMAGE.BgPromotion03,time:120},
  {name:'Gội đầu keratin',price:55000,image: IMAGE.BgPromotion04,time:90},
  {name:'Gội đầu tóc chẻ ngọn',price:115000,image: IMAGE.BgPromotion,time:30},
  {name:'Gội đầu phủ lụa',price:125000,image: IMAGE.BgPromotion02,time:40, promotion:10},
]

const services=[
  {name:'Phục hồi',data:services01,id:0},
  {name:'Nhộm',data:services02,id:1},
  {name:'Gội đầu',data:services03,id:2},
]

const products01=[
  {name:'Dầu gội phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:10},
  {name:'Dầu gội bồ kết',price:55000,image: IMAGE.IcProduct03},
  {name:'Dầu gội keratin',price:55000,image: IMAGE.IcProduct04},
  {name:'Dầu gội phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:10},
  {name:'Dầu gội bưởi',price:115000,image: IMAGE.IcProduct01},
  {name:'Dầu gội bồ kết',price:55000,image: IMAGE.IcProduct03},
]

const products02=[
  {name:'Dầu xả tóc chẻ ngọn',price:115000,image: IMAGE.IcProduct01, promotion:30},
  {name:'Dầu xả phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:15},
  {name:'Dầu xả collagen',price:55000,image: IMAGE.IcProduct03},
  {name:'Dầu xả keratin',price:55000,image: IMAGE.IcProduct04},
]

const products03=[
  {name:'Serum tóc chẻ ngọn',price:115000,image: IMAGE.IcProduct01},
  {name:'Serum phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:10},
  {name:'Serum collagen',price:55000,image: IMAGE.IcProduct03},
  {name:'Serum keratin',price:55000,image: IMAGE.IcProduct04},
]

const products04=[
  {name:'Thuốc dưỡng collagen',price:55000,image: IMAGE.IcProduct03},
  {name:'Thuốc dưỡng tóc chẻ ngọn',price:115000,image: IMAGE.IcProduct01},
  {name:'Thuốc dưỡng phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:10},
  {name:'Thuốc dưỡng keratin',price:55000,image: IMAGE.IcProduct04},
]

const products=[
  {name:'Dầu gội',data:products01,id:0},
  {name:'Dầu xả',data:products02,id:1},
  {name:'Serum',data:products03,id:2},
  {name:'Thuốc dưỡng tóc',data:products04,id:3},
]

const options=[
  'Khuyến mãi', 'Dịch vụ', 'Sản phẩm', 'Gói dịch vụ'
]
export const salonConst = {
  infors,
  options,
  promotions,
  services,
  products
}
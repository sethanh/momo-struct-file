import {IMAGE} from  '@src/core'

const infors=[
  {name:'Venus Hair Salon ',address:'130 Đống Đa Hải Châu',image: IMAGE.IcVenus,star:5,quantify:452,open:'8:30 - 21:00',far:0.5,bgImage:IMAGE.BgSalon},
  {name:'Herbal Spa',address:'130 Sơn Trà',image: IMAGE.IcAvenue,star:4.5,quantify:45,open:'8:30 - 21:00',far:0.2,bgImage:IMAGE.BgSalon},
  {name:'Venus Nail',address:'130 Đống Đa hải chây',image: IMAGE.IcLammoc,star:3.5,quantify:512,open:'8:30 - 21:00',far:0.2,bgImage:IMAGE.BgSalon},
  // {name:'Venus Nail',address:'130 Đống Đa hải chây',image: IMAGE.IcQuocphong,star:5,quantify:152,open:'8:30 - 21:00',far:0.3,bgImage:IMAGE.BgSalon},
  {name:'Venus Nail',address:'130 Đống Đa hải chây',image: IMAGE.IcLalui,star:4.8,quantify:252,open:'8:30 - 21:00',far:0.6,bgImage:IMAGE.BgSalon}
]
const promotions=[
  {promotion:30,name:'Dầu gội thảo mộc',address:'130 Đống Đa Hải Châu',price:115000,image: IMAGE.BgPromotion,flash:4800,id:'001'},
  {type:1,promotion:10,name:'Massage toàn thân',address:'130 Sơn Trà',price:125000,image: IMAGE.BgPromotion02,flash:5000,id:'002'},
  {type:1,promotion:5,name:'Cắt tóc nam',address:'130 Đống Đa Hải Châu',price:55000,image: IMAGE.BgPromotion03,flash: 1200,id:'003'},
  {promotion:5,name:'Sơn móng tay',address:'130 Đống Đa Hải Châu',price:55000,image: IMAGE.BgPromotion04,flash:10800,id:'004'},
]

const services01=[
  {type:1,name:'Phục hồi tóc chẻ ngọn',price:115000,image: IMAGE.BgPromotion,time:30,id:'101'},
  {type:1,name:'phụ hồi phủ lụa',price:125000,image: IMAGE.BgPromotion02,time:40, promotion:10,id:'102'},
  {type:1,name:'phục hồi collagen',price:55000,image: IMAGE.BgPromotion03,time:120,id:'103'},
  {type:1,name:'Phục hồi keratin',price:55000,image: IMAGE.BgPromotion04,time:90,id:'104'},
]

const services02=[
  {type:1,name:'Nhuộm collagen',price:55000,image: IMAGE.BgPromotion03,time:120,id:'201'},
  {type:1,name:'Nhuộm keratin',price:55000,image: IMAGE.BgPromotion04,time:90,id:'202'},
  {type:1,name:'Nhuộm tóc chẻ ngọn',price:115000,image: IMAGE.BgPromotion,time:30, promotion:30,id:'203'},
  {type:1,name:'Nhuộm phủ lụa',price:125000,image: IMAGE.BgPromotion02,time:40, promotion:15,id:'204'},
]

const services03=[
  {type:1,name:'Gội đầu collagen',price:55000,image: IMAGE.BgPromotion03,time:120,id:'301'},
  {type:1,name:'Gội đầu keratin',price:55000,image: IMAGE.BgPromotion04,time:90,id:'302'},
  {type:1,name:'Gội đầu tóc chẻ ngọn',price:115000,image: IMAGE.BgPromotion,time:30,id:'303'},
  {type:1,name:'Gội đầu phủ lụa',price:125000,image: IMAGE.BgPromotion02,time:40, promotion:10,id:'304'},
]

const services=[
  {name:'Phục hồi',data:services01,id:0},
  {name:'Nhộm',data:services02,id:1},
  {name:'Gội đầu',data:services03,id:2},
]

const products01=[
  {name:'Dầu gội phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:10,id:'401'},
  {name:'Dầu gội bồ kết',price:55000,image: IMAGE.IcProduct03,id:'402'},
  {name:'Dầu gội keratin',price:55000,image: IMAGE.IcProduct04,id:'403'},
  {name:'Dầu gội phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:10,id:'404'},
  {name:'Dầu gội bưởi',price:115000,image: IMAGE.IcProduct01,id:'405'},
  {name:'Dầu gội bồ kết',price:55000,image: IMAGE.IcProduct03,id:'406'},
]

const products02=[
  {name:'Dầu xả tóc chẻ ngọn',price:115000,image: IMAGE.IcProduct01, promotion:30,id:'501'},
  {name:'Dầu xả phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:15,id:'502'},
  {name:'Dầu xả collagen',price:55000,image: IMAGE.IcProduct03,id:'503'},
  {name:'Dầu xả keratin',price:55000,image: IMAGE.IcProduct04,id:'504'},
]

const products03=[
  {name:'Serum tóc chẻ ngọn',price:115000,image: IMAGE.IcProduct01,id:'601'},
  {name:'Serum phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:10,id:'602'},
  {name:'Serum collagen',price:55000,image: IMAGE.IcProduct03,id:'603'},
  {name:'Serum keratin',price:55000,image: IMAGE.IcProduct04,id:'604'},
]

const products04=[
  {name:'Thuốc dưỡng collagen',price:55000,image: IMAGE.IcProduct03,id:'701'},
  {name:'Thuốc dưỡng tóc chẻ ngọn',price:115000,image: IMAGE.IcProduct01,id:'702'},
  {name:'Thuốc dưỡng phủ lụa',price:125000,image: IMAGE.IcProduct02, promotion:10,id:'703'},
  {name:'Thuốc dưỡng keratin',price:55000,image: IMAGE.IcProduct04,id:'704'},
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
const fillstar=['3','3.5','4','4.5','5']
export const favoriteConst = {
  infors,
  options,
  promotions,
  services,
  products,
  fillstar
}
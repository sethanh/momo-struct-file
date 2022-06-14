import {IMAGE} from  '@src/core'

const service01={
  name:'Dầu gội collagen',
  staff:'Linh Thi',
  time: 40,
  price: 170000,
  quantify:2
}
const service02={
  name:'Dầu xã dưỡng ẩm',
  time: 50,
  price: 400000,
  quantify:1
}
const service03={
  name:'Dầu gội collagen',
  staff:'Bảo Ngọc',
  time: 30,
  price: 300000,
  quantify:3
}
const service04={
  name:'Dầu xã toàn thân',
  staff:'Bảo Ngọc',
  time: 30,
  price: 300000,
  quantify:1
}
const salons={
  name:'Venus Hair Salon',
  date:'01/07/2022 10:30',
  address:'12 Hưng Châu, Hải Châu, Đà Nẵng',
  status:2,
  image: IMAGE.IcVenus
}
const salons02={
  name:'Lam Mộc Salon',
  date:'01/07/2022 11:30',
  address:'130 Đống Đa, Hải Châu, Đà Nẵng',
  status:1,
  image: IMAGE.IcLammoc
}
const salons03={
  name:'Quốc phong Salon',
  date:'03/07/2022 12:30',
  address:'13 Sơn trà, Hải Châu, Đà Nẵng',
  status:0,
  image: IMAGE.IcQuocphong
}

const listorders=[
  {
    unit:1,
    date:'01/07/2022 10:30',
    name:'Nguyễn Thanh',
    phone:'0869221990',
    mahd:'#HD0217',
    status:1,
    salons:salons,
    orders:[
      service01,
      service02,
      service04
    ]
  },
  {
    unit:2,
    date:'01/07/2022 10:30',
    name:'Nguyễn Thanh Sẻ',
    phone:'0869221998',
    mahd:'#HD0217',
    status:2,
    salons:salons02,
    orders:[
      service03,
      service02,
      service01,
    ]
  },
  {
    unit:2,
    date:'01/07/2022 10:30',
    name:'Nguyễn Thanh Sẻ',
    phone:'0869221998',
    mahd:'#HD0217',
    status:2,
    salons:salons,
    orders:[
      service02,
      service01,
      service01,
      service04
    ],
  },
  {
    unit:1,
    date:'01/07/2022 10:30',
    name:'Nguyễn Thanh Sẻ',
    phone:'0869221998',
    mahd:'#HD0217',
    status:1,
    salons:salons03,
    orders:[
      service02,
      service01,
      service01,
      service04
    ],
  }
  ,
  {
    unit:1,
    date:'01/07/2022 10:30',
    name:'Nguyễn Thanh Sẻ',
    phone:'0869221998',
    mahd:'#HD02ss',
    status:2,
    salons:salons02,
    orders:[
      service02,
      service01,
      service01,
      service04
    ],
  }
  ,
  {
    unit:1,
    date:'01/07/2022 10:30',
    name:'Nguyễn Thanh Sẻ',
    phone:'0869221998',
    mahd:'#HD0255',
    status:2,
    salons:salons03,
    orders:[
      service02,
      service01,
      service01,
      service04
    ],
  }
  ,
  {
    unit:2,
    date:'01/07/2022 10:30',
    name:'Nguyễn Thanh Sẻ',
    phone:'0869221998',
    mahd:'#HD0216',
    status:2,
    salons:salons,
    orders:[
      service02,
      service01,
      service01,
      service04
    ],
  }
] 

export const ordersConst = {
  listorders
}
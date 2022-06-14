import {IMAGE} from  '@src/core'

const times = [
  { title: "Sắp tới"},
  { title: "Đã xong" },
  { title: "Đã huỷ"},
]

const service01={
  name:'Phục hồi collagen',
  staff:'Linh Thi',
  time: 40,
  price: 170000
}
const service02={
  name:'Duỗi tóc dưỡng ẩm',
  time: 50,
  price: 400000
}
const service03={
  name:'Phục hồi collagen',
  staff:'Bảo Ngọc',
  time: 30,
  price: 300000
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
  name:'Lam Mộc Salon',
  date:'03/07/2022 12:30',
  address:'13 Sơn trà, Hải Châu, Đà Nẵng',
  status:0,
  image: IMAGE.IcLammoc
}

const info01={
  id:'#LH1560',
  name:'Thái Hoàng',
  unit: 1,
  quantify: 2
}
const info02={
  id:'#LH1212',
  name:'Thái Hoàng',
  unit: 3,
  quantify: 1
}
const info03={
  id:'#LH1222',
  name:'Thái Hoàng',
  unit: 2,
  quantify: 3
}

const appointments=[
  {
    info:info01,
    salons:salons,
    service:[
      service01,
      service02
    ],
    note:'Da mặt bị dị ứng với Keratine'
  },
  {
    info:info02,
    salons:salons02,
    service:[
      service03,
      service02,
      service01,
    ]
  },
  {
    info:info03,
    salons:salons03,
    service:[
      service02,
      service01,
      service01,
    ],
    note:'Da mặt bị dị ứng với Keratine'
  }
] 

export const timeConst = {
  times,
  service01,
  salons,
  appointments
}
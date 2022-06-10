// export const showDate = (date, value) => {
//   date = date + 86400000 * value;
//   let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
//   let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
//   let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
//   return `${da}-${mo}-${ye}`;
// }
// export const  showTime=(date)=>{
//   let ho = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(date);
//   let mi = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(date);
//   return `${ho.slice(0,1)}:${mi}`;
// }
export function formatFlash(number:any) {
  var stNum= ['0','0','0']
  let seconds= number%60
  let newNum= number-seconds
  let hours= (newNum-newNum%3600)/3600
  let minutes= (newNum-hours*3600)/60
  stNum=[hours<10?`0${hours}`:`${hours}`,minutes<10?`0${minutes}`:`${minutes}`,seconds<10?`0${seconds}`:`${seconds}`]
  return stNum
}

export function formatMoney(number:any) {
  var stNum= String(number)
  let l= String(number).length
  var result= ''
  while(l>3){
    result=','+stNum.slice(l-3,l)+result
    l=l-3
  }
  result= stNum.slice(0,l)+result
  return result 
}
import { ActionProps, ResponseProps } from '@src/core'
import { put, takeLatest,select } from 'redux-saga/effects'
import { actionAddServiceCart,actionServiceCartSuccess } from '../reducers'

var findIndex = (products:any, id:string) => {
  var result = -1;
  products.forEach((product:any,index:number) => {
      if (product.id === id) {
          result = index;
      }
  });
  return result;
}

function* onAddService({payload}:any):any {
  const state = yield select()
  console.log(state.cart.services,payload)
  var data= state.cart.services
  var index = findIndex(data,payload.id)
  if(index===-1){
    var rs:any[]=[...data,{...payload,quantify:1}]
  }
  else{
    var rs: any[]= JSON.parse(JSON.stringify(data))
    rs[index].quantify=1+data[index].quantify
    console.log('service',rs[index].quantify,data[index].quantify+1)
  }
  console.log('service',rs[index],index)
  yield put(actionServiceCartSuccess(rs))
}

export function* watchAddServiceCart() {
  yield takeLatest(actionAddServiceCart.type, onAddService)
}
import { ActionProps, ResponseProps } from '@src/core'
import { put, takeLatest,select } from 'redux-saga/effects'
import { actionRemoveServiceCart, actionRemoveCartSuccess } from '../reducers'

var findIndex = (products:any, id:string) => {
  var result = -1;
  products.forEach((product:any,index:number) => {
      if (product.id === id) {
          result = index;
      }
  });
  return result;
}

function* onRemoveService({payload}:any):any {
  const state = yield select()
  console.log(state.cart.services,payload)
  var data= state.cart.services
  var index = findIndex(data,payload.id)
  var rs: any[]= JSON.parse(JSON.stringify(data))
  if(data[index].quantify-1===0){
    rs.splice(index,1)
  }
  else{
    rs[index].quantify=data[index].quantify-1
  }
 
  yield put(actionRemoveCartSuccess(rs))
}

export function* watchRemoveServiceCart() {
  yield takeLatest(actionRemoveServiceCart.type, onRemoveService)
}
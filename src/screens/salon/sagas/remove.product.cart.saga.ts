import { ActionProps, ResponseProps } from '@src/core'
import { put, takeLatest,select } from 'redux-saga/effects'
import { actionRemoveProductCart, actionProductCartSuccess } from '../reducers'

var findIndex = (products:any, id:string) => {
  var result = -1;
  products.forEach((product:any,index:number) => {
      if (product.id === id) {
          result = index;
      }
  });
  return result;
}

function* onRemoveProduct({payload}:any):any {
  const state = yield select()
  console.log(state.cart.products,payload)
  var data= state.cart.products
  var index = findIndex(data,payload.id)
  var rs: any[]= JSON.parse(JSON.stringify(data))
  
  if(data[index].quantify-1===0){
    rs.splice(index,1)
    console.log(rs)
  }
  else{
    rs[index].quantify=data[index].quantify-1
  }
 
  yield put(actionProductCartSuccess(rs))
}

export function* watchRemoveProductCart() {
  yield takeLatest(actionRemoveProductCart.type, onRemoveProduct)
}
import { ActionProps, ResponseProps } from '@src/core'
import { put, takeLatest,select } from 'redux-saga/effects'
import { actionAddProductCart, actionProductCartSuccess } from '../reducers'

var findIndex = (products:any, id:string) => {
  var result = -1;
  products.forEach((product:any,index:number) => {
      if (product.id === id) {
          result = index;
      }
  });
  return result;
}

function* onAddProduct({payload}:any):any {
  const state = yield select()
  console.log(state.cart.products,payload)
  var data= state.cart.products
  var index = findIndex(data,payload.id)
  if(index===-1){
    var rs:any[]=[...data,{...payload,quantify:1}]
  }
  else{
    var rs: any[]= JSON.parse(JSON.stringify(data))
    rs[index].quantify=1+data[index].quantify
    console.log('test',rs[index].quantify,data[index].quantify+1)
  }
  console.log('product',rs[index],index)
  yield put(actionProductCartSuccess(rs))
}

export function* watchAddProductCart() {
  yield takeLatest(actionAddProductCart.type, onAddProduct)
}
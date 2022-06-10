import { ActionProps, ResponseProps } from '@src/core'
import { put, takeLatest,select } from 'redux-saga/effects'
import { actionCart, actionCartSuccess, actionCartFailure, actionAddCart,actionAddCartSuccess } from '../reducers'
import { getCart } from '../services'

var findIndex = (products:any, id:string) => {
  var result = -1;
  products.forEach((product:any,index:number) => {
      if (product.id === id) {
          result = index;
      }
  });
  return result;
}

// function* onGet() {
//   try {
//     const result: ResponseProps = yield getCart()
//     yield put(actionCartSuccess(result))
//   } catch (err) {
//     console.log('err: ', err)
//     yield put(actionCartFailure(undefined))
//   }
// }

function* onAdd({payload}:any):any {
  const state = yield select()
  console.log(state.cart.data,payload)
  var data= state.cart.data
  var index = findIndex(data,payload.id)
  if(index===-1){
    var rs:any[]=[...data,{...payload,quantify:1}]
  }
  else{
    var rs: any[]= JSON.parse(JSON.stringify(data))
    rs[index].quantify=1+data[index].quantify
    console.log('test',rs[index].quantify,data[index].quantify+1)
  }
  console.log('rs',rs[index],index)
  yield put(actionAddCartSuccess(rs))
}

export function* watchCart() {
  // yield takeLatest(actionCart.type, onGet),
  yield takeLatest(actionAddCart.type, onAdd)
}
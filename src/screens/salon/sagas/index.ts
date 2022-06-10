import { all } from 'redux-saga/effects'
import { watchCart } from './cart.saga'
import { watchRemoveCart } from './removecart.saga'

export function* cartSaga() {
  yield all([
    watchCart(),
    watchRemoveCart()
  ])
}
import { all } from 'redux-saga/effects'
import { watchCart } from './cart.saga'
import { watchRemoveCart } from './removecart.saga'

import { watchAddProductCart } from './add.product.cart.saga'
import { watchRemoveProductCart } from './remove.product.cart.saga'
import {watchAddServiceCart} from './add.service.cart.saga'
import {watchRemoveServiceCart} from './remove.service.cart.saga'
export function* cartSaga() {
  yield all([
    watchCart(),
    watchRemoveCart(),
    watchAddProductCart(),
    watchRemoveProductCart(),

    watchAddServiceCart(),
    watchRemoveServiceCart()
  ])
}
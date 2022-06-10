import { all } from "redux-saga/effects"

import { homeSaga } from "@screens/home/sagas"
import { cartSaga } from "@screens/salon/sagas"

export default function* rootSaga() {
  yield all([
    homeSaga(),
    cartSaga()
  ])
}
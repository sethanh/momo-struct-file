import { all } from "redux-saga/effects"

import { homeSaga } from "@screens/home/sagas"

export default function* rootSaga() {
  yield all([
    homeSaga(),
  ])
}
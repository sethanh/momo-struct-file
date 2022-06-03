import { ActionProps, ResponseProps } from '../../interface'
import { put, takeLatest } from 'redux-saga/effects'
import { actionTest, actionTestSuccess, actionTestFailure } from '../../reducers/home'
import { signIn } from '../../services/home'

function* onTest({ payload }: ActionProps) {
  try {
    const result: ResponseProps = yield signIn(payload)
    yield put(actionTestSuccess(result))
  } catch (err) {
    console.log('err: ', err)
    yield put(actionTestFailure(undefined))
  }
}

export function* watchHome() {
  yield takeLatest(actionTest.type, onTest)
}
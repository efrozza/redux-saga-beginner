import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

export function * helloSaga () {
  console.log('Hello Sagas!')
}

// incrementAsync Saga is suspended until the Promise returned by delay resolves, which will happen after 1 second.
export function * incrementAsync () {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function * watchIncrementAsync () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function * rootSaga () {
  yield all([helloSaga(), watchIncrementAsync()])
}

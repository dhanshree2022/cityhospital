import { all, call, put, takeEvery } from 'redux-saga/effects'
import { forgotAPI, logoutAPI, siginAPI, signupAPI } from '../../containers/common/api/auth.api'
import { authError, forgotResponse, logout, logoutRequest, signinResponse, signupResponse } from '../action/auth.action'
import { FORGOT_REQUEST, LOGOUT_REQUEST, SIGNIN_REQUEST, SIGNUP_REQUEST } from '../Action.types'
import { setAlert } from '../slice/alert.slice'

function* signupUser(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        yield put(signupResponse(user.user))
        yield put (setAlert({text:user.message, color:'success'}))
    } catch (e) {
        yield put(authError(e.message))
        yield put (setAlert({text:e.message, color:'error'}))
    }
}

function* siginUser(action){
    try {
        const user = yield call(siginAPI, action.payload.data)
        yield put(signinResponse(user.user))
        yield put (setAlert({text:user.message, color:'success'}))
        action.payload.callback("/")
    } catch (e) {
        console.log(e.message)
        yield put(authError(e.message))
        yield put (setAlert({text:e.message, color:'error'}))
    }
}

function* logoutUser(){
    try {
        const user = yield call(logoutAPI)
        yield put(logout(user.user))
        yield put (setAlert({text:user.message, color:'success'}))

    } catch (e) {
        console.log(e.message)
        yield put(authError(e.message))
        yield put (setAlert({text:e.message, color:'error'}))
    }
}

function* forgotUser(action){
    try{
        const user = yield call(forgotAPI,action.payload)
        yield put(forgotResponse(user.user))
        yield put (setAlert({text:user.message, color:'success'}))
    } catch (e){
        yield put(authError(e.message))
        yield put (setAlert({text:e.message, color:'error'}))
    }
}

//watcher saga
function* watchSignup() {
    yield takeEvery(SIGNUP_REQUEST, signupUser)
    yield takeEvery(SIGNIN_REQUEST, siginUser)
    yield takeEvery(FORGOT_REQUEST, forgotUser)
    yield takeEvery(LOGOUT_REQUEST,logoutUser)

}

export function* authSaga() {
    yield all([
        watchSignup(),
    ])
}

export default authSaga
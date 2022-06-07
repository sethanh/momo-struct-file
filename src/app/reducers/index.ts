import { combineReducers } from '@reduxjs/toolkit'
import { homeReducers } from '@src/screens'
import loadingSlice from './loading.reducer'
import appSlice from './app.reducer'

const appReducer = combineReducers({
    app: appSlice,
    loading: loadingSlice,
    ...homeReducers,
})

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
}

export default rootReducer

import { combineReducers } from '@reduxjs/toolkit'
import { homeReducers } from './home'
import { LoadingReducers} from './app'

const appReducer = combineReducers({
    ...LoadingReducers,
    ...homeReducers,  
})

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
}

export default rootReducer

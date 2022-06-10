import { createSlice } from '@reduxjs/toolkit'
// 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
interface AppProps {
  data:any
}

const initialState: AppProps = {
  data: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    actionCart(state, action) {
      console.log(action)
      return {
        ...state,
      }
    },
    actionAddCart(state, action) {
      console.log('sss',action)
      return {
        ...state
      }
    },
    actionRemoveCart(state, action) {
      console.log('sss',action)
      return {
        ...state
      }
    },
    actionRemoveCartSuccess(state, action) {
      return {
        ...state,
        data: action.payload,
      }
    }
    ,
    actionAddCartSuccess(state, action) {
      return {
        ...state,
        data: action.payload,
      }
    },
    actionCartSuccess(state, action) {
      return {
        ...state,
        signInSuccess: action.payload,
      }
    },
    actionCartFailure(state, action) {
      const { payload } = action || {}
      return {
        ...state,
        signInFailure: payload,
      }
    },
  }
})

export const { actionCart, actionCartSuccess, actionCartFailure,actionAddCart,actionAddCartSuccess,actionRemoveCartSuccess,actionRemoveCart } = cartSlice.actions
export default cartSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
// 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
interface AppProps {
  data:any,
  services:any,
  products:any
}

const initialState: AppProps = {
  data: [],
  services:[],
  products:[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //products  
    actionAddProductCart(state, action) {
      console.log(action)
      return {
        ...state,
      }
    },
    actionRemoveProductCart(state, action) {
      console.log(action)
      return {
        ...state,
      }
    },
    actionProductCartSuccess(state,action){
      return {
        ...state,
        products: action.payload,
      }
    },

    //services

    actionAddServiceCart(state, action) {
      console.log(action)
      return {
        ...state,
      }
    },
    actionRemoveServiceCart(state, action) {
      console.log(action)
      return {
        ...state,
      }
    },
    actionServiceCartSuccess(state,action){
      return {
        ...state,
        services: action.payload,
      }
    },
    
    //note
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
        services: action.payload,
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

export const { 
  actionCart, actionCartSuccess, actionCartFailure,actionAddCart,
  actionAddCartSuccess,actionRemoveCartSuccess,actionRemoveCart,
  actionAddProductCart,actionProductCartSuccess,actionRemoveProductCart,
  actionAddServiceCart,actionServiceCartSuccess,actionRemoveServiceCart 
} = cartSlice.actions
export default cartSlice.reducer

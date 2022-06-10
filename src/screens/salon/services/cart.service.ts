import { SignInRequestProps } from '@src/core'
import { ApiService } from '../../../core/services/api.service'

export const getCart = () => {
  return ApiService.get('cart')
}

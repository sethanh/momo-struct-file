import { SignInRequestProps } from '../../interface'
import { ApiService } from '../'

export const signIn = (body: SignInRequestProps) => {
  return ApiService.post('sign-in', body)
}

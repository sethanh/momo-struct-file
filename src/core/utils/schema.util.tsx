import * as yup from 'yup'
import { regexEmail } from './validate.util'

export const loginSchema = () => {
  return yup.object().shape({
    email: yup.string()
      .nullable()
      .trim()
      .required('Email required')
      .email('Your email address is invalid. Try Again.')
      .matches(regexEmail, 'Your email address is invalid. Try Again.'),
    password: yup.string()
      .nullable()
      .required('Password required')
      .min(8, 'Your password must be at least 8 characters long. Try Again.')
      .max(32, 'Max length password'),
  })
}

export const registerSchema = () => {
  // ts-ignored
  return yup.object().shape({
    newPassword: yup.string()
      .nullable()
      .required('password_require')
      .min(8, 'error_min_password')
      .max(32, 'error_max_password'),
    confirmPassword: yup.string()
      .nullable()
      .required('password_require')
      .min(8, 'error_min_password')
      .max(32, 'error_max_password')
      .oneOf([yup.ref('newPassword'), null], 'not_match_password'),
  })
}

export const changePasswordSchema = () => {
  return yup.object().shape({
    password: yup.string()
    .nullable()
    .required('password_require')
    .min(8, 'error_min_password')
    .max(32, 'error_max_password'),
    newPassword: yup.string()
      .nullable()
      .required('password_require')
      .min(8, 'error_min_password')
      .max(32, 'error_max_password'),
    confirmPassword: yup.string()
      .nullable()
      .required('password_require')
      .min(8, 'error_min_password')
      .max(32, 'error_max_password')
      .oneOf([yup.ref('newPassword'), null], 'not_match_password'),
  })
}


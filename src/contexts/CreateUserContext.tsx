import * as yup from 'yup'

export const createUserFormSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup.string().required('E-mail is required').email('Invalid E-mail'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 8 characters long'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Passwords must be equal'),
})

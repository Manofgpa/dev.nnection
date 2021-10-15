import Router from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { api } from '../services/apiClient'
import * as yup from 'yup'

type User = {
  email: string
  permissions: string[]
  roles: string[]
  token?: string
  refreshToken?: string
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  user: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'devnnection.token': token } = parseCookies()

    if (token) {
      api
        .get<User>('/me')
        .then(res => {
          const { email, permissions, roles } = res.data

          setUser({ email, permissions, roles })
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post<User>('/sessions', {
        email,
        password,
      })

      const { token, refreshToken, permissions, roles } = response.data

      setCookie(undefined, 'devnnection.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      setCookie(undefined, 'devnnection.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      setUser({
        email,
        permissions,
        roles,
        refreshToken,
        token,
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/feed')
    } catch (error) {
      error
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const signOut = () => {
  destroyCookie(undefined, 'devnnection.token')
  destroyCookie(undefined, 'devnnection.refreshToken')

  Router.push('/')
}

export const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  email: yup.string().required('E-mail is required').email('Invalid E-mail'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 8 characters long'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Passwords must be equal'),
})

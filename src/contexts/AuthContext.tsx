import Router from 'next/router'
import { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

type User = {
  email: string
  permissions: string[]
  roles: string[]
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const isAuthenticated = false

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post<User>('sessions', {
        email,
        password,
      })

      const { permissions, roles } = response.data

      setUser({
        email,
        permissions,
        roles,
      })

      console.log({ email, permissions, roles })
      Router.push('/feed')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

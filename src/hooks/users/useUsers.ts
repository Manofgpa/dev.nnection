import { useQuery } from 'react-query'
import { api } from '../../services/api'

type User = {
  id: string
  name: string
  email: string
  birthdate: string
  createdAt: string
}

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get('users')

  const users = data.map(user => {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      birthdate: new Date(user.created_at).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      createdAt: new Date(user.created_at).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })

  return users
}

export const useUsers = () => {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // 5 seg
  })
}

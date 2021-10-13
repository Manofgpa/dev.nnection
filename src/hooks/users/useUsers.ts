import { useQuery } from 'react-query'
import { api } from '../../services/api'

type User = {
  id: string
  name: string
  email: string
  birthdate: string
  createdAt: string
}

type GetUsersResponse = {
  users: User[]
  totalUsers: number
}

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data } = await api.get(`users?page=${page}&per_page=10`)
  const { totalUsers } = data

  const users = data.users.map(user => {
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

  return { users, totalUsers }
}

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}

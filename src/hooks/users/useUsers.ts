import { useQuery } from 'react-query'
import { api } from '../../services/apiClient'

type User = {
  _id: string
  first_name: string
  last_name: string
  email: string
  birthday: string
  createdAt: string
}

type GetUsersResponse = {
  users: User[]
  totalUsers: number
}

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data } = await api.get<GetUsersResponse>(
    `users?page=${page}&per_page=10`
  )
  const { totalUsers } = data

  const users = data.users.map(user => {
    return {
      id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      birthday: new Date(user.created_at).toLocaleDateString('en-US', {
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

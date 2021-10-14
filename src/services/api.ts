import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'

type User = {
  token: string
  refreshToken: string
}

let cookies = parseCookies()

export const api = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    Authorization: `Bearer ${cookies['devnnection.token']}`,
  },
})

api.interceptors.request.use(
  response => {
    return response
  },
  (error: AxiosError) => {
    if (error.response.status === 401) {
      if (error.response.data?.code === 'token.expired') {
        cookies = parseCookies()

        const { 'devnnection.token': refreshToken } = cookies

        api
          .post<User>('refresh', {
            refreshToken,
          })
          .then(response => {
            const { token } = response.data

            setCookie(undefined, 'devnnection.token', token, {
              maxAge: 60 * 60 * 24 * 30, // 30 days
              path: '/',
            })

            setCookie(
              undefined,
              'devnnection.refreshToken',
              response.data.refreshToken,
              {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
              }
            )

            api.defaults.headers['Authorization'] = `Bearer ${token}`
          })
      }
    } else {
      // deslogar
    }
  }
)

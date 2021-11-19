import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Feed } from '../components/Feed'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { TagBar } from '../components/Tagbar'
import { setupAPIClient } from '../services/api'
import { api } from '../services/apiClient'
import { withSSRAuth } from '../utils/withSSRAuth'

type User = {
  first_name: string
  last_name: string
  email: string
}

interface HomeProps {
  user: User
  posts: {
    message: string
    user: User
    timestamp: Date
    likes: {
      count: number
      users: User[]
    }
    github: string
    linkedin: string
    image: string
    tags: string[]
  }[]
}

export default function Home({ user, posts }: HomeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Header user={user} />
      <Flex>
        <Sidebar />
        {isWideVersion ? (
          <Flex flex="1" p="2">
            <Feed user={user} posts={posts} />
          </Flex>
        ) : (
          <Flex flex="1" m="4">
            <Feed user={user} posts={posts} />
          </Flex>
        )}
        <TagBar posts={posts} />
      </Flex>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')

  const posts = await api.get('https://devnnection.herokuapp.com/posts')

  return {
    props: { user: response.data, posts: posts.data },
  }
})

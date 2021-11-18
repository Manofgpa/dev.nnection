import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Feed } from '../components/Feed'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { TagBar } from '../components/Tagbar'
import { setupAPIClient } from '../services/api'
import { api } from '../services/apiClient'
import { withSSRAuth } from '../utils/withSSRAuth'

type HomeProps = {
  user: {
    first_name: string
    last_name: string
    email: string
  }
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
            <Feed user={user} />
          </Flex>
        ) : (
          <Flex flex="1" m="4">
            <Feed user={user} />
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

  const posts = await api.get('/posts')

  return {
    props: { user: response.data, posts },
  }
})

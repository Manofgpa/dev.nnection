import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Feed } from '../components/Feed'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { TagBar } from '../components/Tagbar'
import { setupAPIClient } from '../services/api'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        {isWideVersion ? (
          <Flex flex='1' p='2'>
            <Feed />
          </Flex>
        ) : (
          <Flex flex='1' m='4'>
            <Feed />
          </Flex>
        )}
        <TagBar />
      </Flex>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')

  return {
    props: {},
  }
})

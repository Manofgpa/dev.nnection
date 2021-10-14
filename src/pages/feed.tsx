import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { Feed } from '../components/Feed'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { TagBar } from '../components/Tagbar'
import { api } from '../services/api'

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {
    api
      .get('me')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Sidebar />
      {isWideVersion ? (
        <Flex flex='1' mt='20' p='2' position='absolute' right='25%' left='25%'>
          <Feed />
        </Flex>
      ) : (
        <Flex flex='1' mt='20' mx='5'>
          <Feed />
        </Flex>
      )}
      <TagBar />
    </Flex>
  )
}

import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import { Feed } from '../components/Feed'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { TagBar } from '../components/Tagbar'

export default function Home() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Sidebar />
      <Flex flex='1' mt='20' p='2' position='absolute' right='25%' left='25%'>
        <Feed />
      </Flex>
      <TagBar />
    </Flex>
  )
}

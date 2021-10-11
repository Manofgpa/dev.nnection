import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { TagBar } from '../components/TagBar'

export default function Home() {
  return (
    <>
      <Flex direction='column' h='100vh'>
        <Header />

        <Flex w='100%' mx='auto' maxWidth={1480} flex='1'>
          <Sidebar />

          <Box flex='1'>Content</Box>

          <TagBar />
        </Flex>
      </Flex>
    </>
  )
}

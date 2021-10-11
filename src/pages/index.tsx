import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { TagBar } from '../components/TagBar'

export default function Home() {
  return (
    <>
      <Flex direction='column' h='100vh'>
        <Header />

        <Flex w='100%' maxWidth={1480}>
          <Sidebar />

          <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
            <Box p='8' bg='gray.100'></Box>
          </SimpleGrid>

          <TagBar />
        </Flex>
      </Flex>
    </>
  )
}

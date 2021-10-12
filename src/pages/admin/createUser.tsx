import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import Link from 'next/link'

export default function CreateUser() {
  return (
    <Flex direction='column' h='100vh' bg='gray.900'>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' color='gray.50'>
        <Sidebar />
        <Box
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['6', '8']}
          mt={['10', '10', '20']}
          ml={['0', '0', '0', '60']}>
          <Heading size='lg' fontWeight='normal'>
            Create user
          </Heading>
          <Divider my='6' borderColor='gray.700' />
          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='name' label='Full name' />
              <Input name='email' type='email' label='Email' />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='password' type='password' label='Password' />
              <Input
                name='password_confirmation'
                type='password'
                label='Password Confirmation'
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={['6', '8']} justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/admin'>
                <Button as='a' colorScheme='whiteAlpha'>
                  Cancel
                </Button>
              </Link>
              <Button colorScheme='green'>Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

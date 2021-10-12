import { Flex, Button, Stack, Image, Text } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import Link from 'next/link'

export default function SignIn() {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex>
        <Image src='logo.png' />
      </Flex>
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg='white'
        p='8'
        borderRadius={8}
        flexDirection='column'>
        <Stack spacing='4'>
          <Input type='email' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Password' />
        </Stack>
        <Link href='/'>
          <Button
            as='a'
            type='submit'
            mt='6'
            bgColor='#030301'
            colorScheme='green'
            size='lg'
            borderRadius={20}
            _hover={{ bg: 'green.500' }}>
            LOGIN
          </Button>
        </Link>
        <Text
          m='4'
          textAlign='center'
          color='#000'
          fontWeight='bold'
          borderRadius={20}>
          Forgot your password?
        </Text>
        <Button type='button' colorScheme='green' size='lg' borderRadius={20}>
          CREATE ACCOUNT
        </Button>
      </Flex>
    </Flex>
  )
}

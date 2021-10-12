import { Flex, Button, Stack, Image, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  const handleSignIn = values => {
    console.log(values)
  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
      display={['block', 'flex']}>
      <Flex>
        <Image src='logo.png' />
      </Flex>
      <Flex
        as='form'
        width='100%'
        maxWidth={380}
        bg='white'
        p='8'
        mx='auto'
        borderRadius={8}
        flexDirection='column'
        onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing='4'>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            {...register('email')}
          />
          <Input
            type='password'
            name='password'
            placeholder='Password'
            {...register('password')}
          />
        </Stack>
        <Button
          type='submit'
          mt='6'
          bgColor='#030301'
          colorScheme='green'
          size='lg'
          borderRadius={20}
          _hover={{ bg: 'green.500' }}>
          LOGIN
        </Button>
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

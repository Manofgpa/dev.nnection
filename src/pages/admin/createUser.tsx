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
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  email: yup.string().required('E-mail is required').email('Invalid E-mail'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 8 characters long'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Passwords must be equal'),
})

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    const { name, email, password } = values
    const body = {
      name,
      email,
      password,
    }
    const response = await fetch('http://localhost:3001/login_user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    console.log(response.json())
  }

  return (
    <Flex direction='column' h='100vh' bg='gray.900'>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' color='gray.50'>
        <Sidebar />
        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['6', '8']}
          mt={['10', '10', '20']}
          ml={['0', '0', '0', '60']}
          onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size='lg' fontWeight='normal'>
            Create user
          </Heading>
          <Divider my='6' borderColor='gray.700' />
          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='name'
                label='Full name'
                {...register('name')}
                error={errors.name}
              />
              <Input
                name='email'
                type='email'
                label='Email'
                error={errors.email}
                {...register('email')}
              />
              <Input
                name='birthdate'
                type='date'
                label='Date of Birth'
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='password'
                type='password'
                label='Password'
                error={errors.password}
                {...register('password')}
              />
              <Input
                name='password_confirmation'
                type='password'
                label='Password Confirmation'
                error={errors.password_confirmation}
                {...register('password_confirmation')}
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
              <Button
                type='submit'
                colorScheme='green'
                isLoading={isSubmitting}>
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

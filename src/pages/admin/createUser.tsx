import {
  Box,
  Flex,
  Heading,
  Divider,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react'
import { toast } from 'react-toastify'

import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { queryClient } from '../../services/queryClient'
import { useRouter } from 'next/router'
import { api } from '../../services/apiClient'
import { withSSRAuth } from '../../utils/withSSRAuth'
import { setupAPIClient } from '../../services/api'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
  birthdate: string
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
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    const { name, email, password, birthdate } = values

    try {
      const response = await api.post('login_user', {
        name,
        email,
        password,
        birthdate,
      })

      toast.success(`User ${email} created!`)

      queryClient.invalidateQueries('users')
      router.push('/admin')
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        if (error.response.status === 403) {
          toast.error(`User ${email} already exists!`)
        }
      } else if (error.request) {
        // The request was made but no response was received
        toast(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        toast('Error', error.message)
      }
      return
    }
  }

  return (
    <>
      <Box bg='gray.900'>
        <Header />
        <Flex w='100%' color='gray.50' mx='auto' h='100vh'>
          <Sidebar />

          <Box
            as='form'
            borderRadius={8}
            bg='gray.800'
            flex='1'
            p={['6', '8']}
            onSubmit={handleSubmit(handleCreateUser)}>
            <Heading size='lg' fontWeight='normal'>
              Create user
            </Heading>
            <Divider my='6' borderColor='gray.700' />
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} pt='8'>
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
                error={errors.birthdate}
                {...register('birthdate')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} pt='8'>
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
            <Flex mt={['6', '8']} justify='flex-end'>
              <HStack spacing='4'>
                <Link href='/admin'>
                  <Button as='a' colorScheme='whiteAlpha' cursor='pointer'>
                    Cancel
                  </Button>
                </Link>
                <Button
                  type='submit'
                  colorScheme='green'
                  cursor='pointer'
                  isLoading={isSubmitting}>
                  Save
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
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

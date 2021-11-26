import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  SimpleGrid,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { createUserFormSchema } from '../../contexts/CreateUserContext'
import { Input } from '../Form/Input'
import { api } from '../../services/apiClient'
import { toast } from 'react-toastify'
import { useRef } from 'react'
import { getProfileImage } from '../../utils/profilesMockImages'

type CreateUserFormData = {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirmation: string
  birthday: string
}

export const SignupModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const initialRef = useRef()

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    const { first_name, last_name, email, password, birthday } = values

    try {
      const response = await api.post('login_user', {
        first_name,
        last_name,
        email,
        password,
        birthday,
        image: getProfileImage(),
      })

      toast.success(`${last_name}, your account was created, please login!`)
      onClose()
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        if (error.response.status === 403) {
          toast.error(`User ${email} already exists!`)
        }
      } else if (error.request) {
        // The request was made but no response was received
        toast.error(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        toast('Error', error.message)
      }
      return
    }
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size='2xl'
        initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(handleCreateUser)}>
          <ModalHeader
            fontSize='30'
            align='center'
            bg='gray.900'
            color='green.500'>
            Sign up
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} pt='8'>
              <Input
                name='first_name'
                label='First Name'
                {...register('first_name')}
                error={errors.first_name}
              />
              <Input
                name='last_name'
                label='Last Name'
                {...register('last_name')}
                error={errors.last_name}
              />
              <Input
                name='email'
                type='email'
                label='Email'
                error={errors.email}
                {...register('email')}
              />
              <Input
                name='birthday'
                type='date'
                label='Birthday'
                error={errors.birthday}
                {...register('birthday')}
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
          </ModalBody>

          <ModalFooter>
            <Button mr='2' onClick={onClose}>
              Close
            </Button>
            <Button
              type='submit'
              colorScheme='green'
              mr={3}
              isLoading={isSubmitting}>
              Create account
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

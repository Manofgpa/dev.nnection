import {
  Flex,
  Button,
  Image,
  Text,
  useDisclosure,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { withSSRGuest } from '../utils/withSSRGuest'
import { SignupModal } from '../components/SignupModal'
import { log } from 'console'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail is required').email('Invalid E-mail'),
  password: yup.string().required('Password is required'),
})

export default function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isModalOpen, setIsModalOpen] = useState(true)

  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  const { signIn } = useContext(AuthContext)

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    const response = await signIn(values)
    if (response?.error) {
      setError(response.message)
    }
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      display={['block', 'flex']}>
      <Flex>
        <Image src="logo.png" />
      </Flex>
      <Flex
        as="form"
        width="100%"
        maxWidth={380}
        bg="white"
        p="8"
        mx="auto"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}>
        {!!error && (
          <Alert status="error" borderRadius={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          error={errors.email}
          {...register('email')}
        />
        <Input
          type="password"
          name="password"
          error={errors.password}
          placeholder="Password"
          {...register('password')}
        />
        <Button
          type="submit"
          mt="6"
          bgColor="#030301"
          colorScheme="green"
          size="lg"
          borderRadius={20}
          _hover={{ bg: 'green.500' }}
          isLoading={isSubmitting}>
          LOGIN
        </Button>
        <Text
          m="4"
          textAlign="center"
          color="#000"
          fontWeight="bold"
          borderRadius={20}>
          Forgot your password?
        </Text>
        <Button
          type="button"
          colorScheme="green"
          size="lg"
          borderRadius={20}
          onClick={onOpen}>
          CREATE ACCOUNT
        </Button>
      </Flex>
      {isModalOpen && <SignupModal isOpen={isOpen} onClose={onClose} />}
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async ctx => {
  return {
    props: {},
  }
})

import {
  Input,
  Button,
  Icon,
  Text,
  Box,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/apiClient'
import { PostModal } from '../Post/PostModal'

type InputPostBoxProps = {
  username: string
}

export const InputPostBox = ({ username }: InputPostBoxProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useContext(AuthContext)

  const handleSubmit = async postMessage => {
    if (!postMessage) return

    const post = {
      message: postMessage,
      user: `${user?.first_name} ${user?.last_name}`,
      timestamp: new Date(),
    }

    const response = await api.post(
      'http://localhost:3000/api/post/create',
      post
    )
  }

  return (
    <>
      <Input
        borderRadius={20}
        placeholder="Make a post"
        h={'100%'}
        name="makePost"
        type="text"
        bg="gray.50"
        fontSize="20"
        cursor="pointer"
        _hover={{
          border: '1px solid green',
        }}
        onClick={onOpen}
      />
      <Stack direction="row" justify="space-evenly" p={4}>
        {/* <Box>
          <Button p={8}>
            <Icon as={AiFillGithub} fontSize="35" />
            <Text>Project</Text>
          </Button>
        </Box>
        <Box>
          <Button p={8}>
            <Icon as={AiFillLinkedin} fontSize="35" />
            <Text>Job</Text>
          </Button>
        </Box>
        <Box>
          <Button p={8}>
            <Icon as={HiOutlinePhotograph} fontSize="35" />
            <Text>Photo</Text>
          </Button>
        </Box> */}
      </Stack>
      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        username={username}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

import {
  Input,
  Button,
  Icon,
  Text,
  Box,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { PostModal } from '../Post/PostModal'

type InputPostBoxProps = {
  username: string
}

export const InputPostBox = ({ username }: InputPostBoxProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Input
        borderRadius={20}
        placeholder="Make a post"
        p="8"
        name="makePost"
        type="text"
        bg="gray.50"
        fontSize="20"
        cursor="pointer"
        onClick={onOpen}
      />
      <Stack direction="row" justify="space-evenly" p={4}>
        <Box>
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
        </Box>
        <Box>
          <Button p={8}>
            <Icon as={HiOutlinePhotograph} fontSize="35" />
            Post
          </Button>
        </Box>
      </Stack>
      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        username={username}
      />
    </>
  )
}

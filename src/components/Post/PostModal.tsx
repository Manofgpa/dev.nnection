import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Icon,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { GitHubModal } from './GitHubModal'

type PostModalProps = {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
  handleSubmit: (value: {}) => void
  username: string
}

export const PostModal = ({
  onClose,
  isOpen,
  onOpen,
  username,
  handleSubmit,
}: PostModalProps) => {
  const [value, setValue] = React.useState('')

  const handleInputChange = e => {
    setValue(e.target.value)
  }

  const handleGitHubModal = e => {
      console.log(e.target)
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader align="center" bgColor="green.500">
          Create a post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex m={2}>
            <Avatar
              size="lg"
              name={username}
              src="https://www.github.com/manofgpa.png"
              alignSelf="center"
              mr="4"
            />
            <Text fontWeight="bold">{username}</Text>
          </Flex>
          <Textarea
            variant="filled"
            h="200"
            value={value}
            onChange={handleInputChange}
            placeholder={`What's on your mind, ${username.split(' ')[0]}?`}
          />
          <Flex mt={2} justify="space-between">
            <Button onClick={handleGitHubModal}>
              <Icon as={AiFillGithub} fontSize="35" />
            </Button>
            <Button>
              <Icon as={AiFillLinkedin} fontSize="35" />
            </Button>
            <Button>
              <Icon as={HiOutlinePhotograph} fontSize="35" />
            </Button>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Input
            type="button"
            value="Post"
            color="black"
            fontWeight="bold"
            bgColor="green.500"
            mt={4}
            onClick={() => handleSubmit(value)}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

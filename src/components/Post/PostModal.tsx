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
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

type PostModalProps = {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
  username: string
}

export const PostModal = ({
  onClose,
  isOpen,
  onOpen,
  username,
}: PostModalProps) => {
  const [value, setValue] = React.useState('')

  const handleInputChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
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
              onKeyUp={handleInputChange}
              placeholder={`What's on your mind, ${username.split(' ')[0]}?`}
            />
            <Input type="button" value="Post" bgColor="green.500" mt={4} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

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
  Switch,
  Stack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiOutlinePhotograph } from 'react-icons/hi'

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
  const [value, setValue] = useState('')
  const [buttonsVisibility, setButtonsVisibility] = useState({
    linkedin: true,
    github: true,
    photo: true,
  })

  const handleInputChange = e => {
    setValue(e.target.value)
  }

  const handleClick = e => {
    console.log(e.target.id)

    setButtonsVisibility({
      ...buttonsVisibility,
      [e.target.id]: !buttonsVisibility[e.target.id],
    })
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
          <Stack mt={2}>
            <Input
              placeholder="Github project url"
              hidden={buttonsVisibility.github}
            />
            <Input
              name="linkedin"
              placeholder="Linkedin post url"
              hidden={buttonsVisibility.linkedin}
            />
            <Input
              name="photo"
              placeholder="Photo url"
              hidden={buttonsVisibility.photo}
            />
          </Stack>
          <Flex mt={2} justify="space-between">
            <Button id="github" onClick={e => handleClick(e)}>
              <Icon as={AiFillGithub} id="github" fontSize="35" />
            </Button>
            <Button id="linkedin" onClick={e => handleClick(e)}>
              <Icon as={AiFillLinkedin} id="linkedin" fontSize="35" />
            </Button>
            <Button id="photo" onClick={e => handleClick(e)}>
              <Icon as={HiOutlinePhotograph} id="photo" fontSize="35" />
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
            onClick={e => handleSubmit(e)}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

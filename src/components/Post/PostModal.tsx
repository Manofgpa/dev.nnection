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
  ModalHeader,
  ModalOverlay,
  Text,
  Icon,
  Textarea,
  Stack,
  Badge,
  Checkbox,
  Alert,
  AlertTitle,
  Spinner,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'

type PostModalProps = {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
  finalSubmit: (value: {}) => void
  username: string
}

export const PostModal = ({
  onClose,
  isOpen,
  onOpen,
  username,
  finalSubmit,
}: PostModalProps) => {
  const schema = yup.object({
    message: yup.string().required('This field is required.'),
    github: yup.string(),
    linkedin: yup.string(),
    image: yup.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async data => {
    try {
      finalSubmit(data)
      if (!isSubmitting) {
        onClose()
        reset()
        toast.success(`${username}, your post was successfully created!`)
      }
    } catch (error) {
      toast.error(`Error creating your post!`)
    }
  }

  const [buttonsVisibility, setButtonsVisibility] = useState({
    linkedin_toggle: true,
    github_toggle: true,
    image_toggle: true,
  })

  const handleClick = e => {
    setButtonsVisibility({
      ...buttonsVisibility,
      [e.target.id]: !buttonsVisibility[e.target.id],
    })
  }

  const tags = [
    'react',
    'js',
    'funny',
    'c',
    'help',
    'python',
    'ironhack',
    'safadeza',
  ]

  const colors = [
    'blue',
    'green',
    'pink',
    'purple',
    '',
    'yellow',
    'orange',
    'red',
  ]

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader align="center" bgColor="green.500">
          Create a post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
          <Flex m={2}>
            <Box minW="150px">
              <Avatar
                size="lg"
                name={username}
                src="https://www.github.com/manofgpa.png"
              />
              <Text fontWeight="bold">{username}</Text>
            </Box>
            <Box ml="auto">
              {tags.map((tag, i) => (
                <Checkbox ml={2} {...register(tag)} key={tag}>
                  <Badge colorScheme={colors[i]}>{tag}</Badge>
                </Checkbox>
              ))}
            </Box>
          </Flex>
          {!!errors.message && (
            <Alert status="error" mb={2}>
              <AlertTitle>{errors.message.message}</AlertTitle>
            </Alert>
          )}
          <Textarea
            variant="filled"
            h="200"
            {...register('message')}
            placeholder={`What's on your mind, ${username.split(' ')[0]}?`}
          />
          <Flex mt={4} justify="space-between">
            <Button id="github_toggle" onClick={handleClick}>
              <Icon as={AiFillGithub} id="github_toggle" fontSize="35" />
            </Button>
            <Button id="linkedin_toggle" onClick={handleClick}>
              <Icon as={AiFillLinkedin} id="linkedin_toggle" fontSize="35" />
            </Button>
            <Button id="image_toggle" onClick={handleClick}>
              <Icon as={HiOutlinePhotograph} id="image_toggle" fontSize="35" />
            </Button>
          </Flex>
          <Stack my={2}>
            <Input
              placeholder="Github project url"
              {...register('github')}
              hidden={buttonsVisibility.github_toggle}
            />
            <Input
              placeholder="Linkedin post url"
              hidden={buttonsVisibility.linkedin_toggle}
              {...register('linkedin')}
            />
            <Input
              placeholder="Photo url"
              hidden={buttonsVisibility.image_toggle}
              {...register('image')}
            />
          </Stack>
          <Button
            type="submit"
            value="Post"
            color="black"
            fontWeight="bold"
            bgColor="green.500"
            w="100%"
            _hover={{
              bgColor: 'green.600',
            }}>
            {isSubmitting ? <Spinner /> : 'Post'}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

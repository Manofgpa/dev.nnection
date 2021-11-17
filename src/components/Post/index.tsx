import {
  Box,
  Flex,
  Avatar,
  Text,
  Image,
  Link,
  Button,
  Icon,
  Divider,
} from '@chakra-ui/react'
import { BiLike, BiComment } from 'react-icons/bi'

interface PostProps {
  avatar: string
  userName: string
  image?: string
  text: string
  hour: string
  likes: number
  comments: number
  tags: string[]
}

export const Post = ({
  userName,
  avatar,
  image,
  text,
  hour,
  likes,
  comments,
  tags,
}: PostProps) => {
  return (
    <Flex bg="gray.200" direction="column" borderRadius={10}>
      <Flex justify="right"></Flex>
      <Flex p="2">
        <Link>
          <Avatar src={avatar} size="md" />
        </Link>
        <Flex direction="column" ml="2">
          <Link>
            <Text>{userName}</Text>
          </Link>
          <Link>
            <Text>{hour} ago</Text>
          </Link>
        </Flex>
        <Box ml="auto">
          {tags.map(tag => (
            <Link
              key={tag}
              mr="2"
              mt="2"
              bg="gray.900"
              color="gray.50"
              borderRadius={15}
              p="1">{`#${tag}`}</Link>
          ))}
        </Box>
      </Flex>
      <Box p="2">
        <Text>{text}</Text>
      </Box>
      <Box align="center">
        <Image src={image} />
      </Box>
      <Flex justify="space-between" fontSize="20">
        <Box m="2">
          {likes}
          <Icon ml="0.25" as={BiLike} />
        </Box>
        <Box m="2">{`${comments} Comments`}</Box>
      </Flex>
      <Flex justify="space-around">
        <Button w="50%">
          <Icon as={BiLike} />
          Like
        </Button>
        <Button w="50%">
          <Icon as={BiComment} />
          Comment
        </Button>
      </Flex>
      <Divider />
    </Flex>
  )
}

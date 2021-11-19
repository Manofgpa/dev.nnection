import { Box, Flex, Avatar, Stack, HStack, Text, Link } from '@chakra-ui/react'
import { Post as PostComponent } from '../Post'
import { InputPostBox } from './InputPostBox'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { timeSince } from '../../utils/timeSince'

type User = {
  first_name: string
  last_name: string
  email: string
}

type Post = {
  message: string
  user: User
  timestamp: Date
  likes: {
    count: number
    users: User[]
  }
  github: string
  linkedin: string
  image: string
  tags: string[]
}

export const Feed = ({ user }: FeedProps) => {
  const urlAPI = 'https://devnnection.herokuapp.com/posts'

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  console.log(posts)

  useEffect(() => {
    axios
      .get<Post[]>(urlAPI)
      .then(response => {
        return setPosts(response.data), setIsLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <Flex direction="column" mx="auto" p={['0', '0', '4']}>
      <Flex bg="gray.200" p="4" borderRadius={10} direction="column">
        <Flex>
          <Avatar
            size="2xl"
            name={`${user?.first_name} ${user?.last_name}`}
            // TODO: Dynamic picture
            src="https://www.github.com/manofgpa.png"
            alignSelf="center"
            mr="4"
          />
          <Box as="label" w="100%">
            <InputPostBox username={`${user?.first_name} ${user?.last_name}`} />
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <HStack spacing="6" mt="6" fontSize="20" fontWeight="bold">
          <Link>
            <Text>Feed</Text>
          </Link>
          <Link>
            <Text>Latest</Text>
          </Link>
          <Link>
            <Text>Top</Text>
          </Link>
        </HStack>
      </Flex>
      <Stack spacing="4" mt="5">
        {!isLoading &&
          posts?.map(post => (
            <PostComponent
              key={post['_id']}
              image={post['image']}
              message={post['message']}
              userName={`${post.user.first_name} ${post.user.last_name}`}
              avatar={post['avatar']}
              timestamp={timeSince(post['timestamp'])}
              likes={post['likes']['count']}
              // comments={post['likes']['users'].length}
              tags={post['tags']}
            />
          ))}
      </Stack>
    </Flex>
  )
}

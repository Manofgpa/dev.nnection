import { Box, Flex, Avatar, Stack, HStack, Text, Link } from '@chakra-ui/react'
import { Post } from '../Post'
import { InputPostBox } from './InputPostBox'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const Feed = ({ user }: FeedProps) => {
  const urlAPI: string =
    'https://raw.githubusercontent.com/AiltonRafael/ironbeers/main/db.json'

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(urlAPI)
      .then(response => {
        return setPosts({ ...response.data }), setLoading(false)
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
        {loading
          ? null
          : Object.values(posts).map(currentPost => {
              return Object.values(currentPost).map(currentPostInfo => {
                return (
                  <Post
                    key={currentPostInfo['id']}
                    image={currentPostInfo['image']}
                    text={currentPostInfo['message']}
                    userName={currentPostInfo['userName']}
                    avatar={currentPostInfo['avatar']}
                    hour={currentPostInfo['timestamp']}
                    likes={currentPostInfo['likes']['count']}
                    comments={currentPostInfo['likes']['users'].length}
                    tags={currentPostInfo['tags']}
                  />
                )
              })
            })}
      </Stack>
    </Flex>
  )
}

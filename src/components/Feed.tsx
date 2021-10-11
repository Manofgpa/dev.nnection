import {
  Box,
  Flex,
  Avatar,
  Input,
  Stack,
  HStack,
  Text,
  Image,
  Divider,
  Link,
} from '@chakra-ui/react'
import { Post } from './Post'

export const Feed = () => {
  return (
    <Flex direction='column' mx='auto'>
      <Flex
        bg='gray.200'
        mt='5'
        p='4'
        borderRadius={10}
        direction='column'
        w='100%'>
        <Flex>
          <Avatar
            size='lg'
            name='Felipe Mano'
            src='https://www.github.com/manofgpa.png'
            alignSelf='center'
            mr='4'
          />
          <Box as='label' w='100%'>
            <Input
              borderRadius={20}
              placeholder='Make a post'
              p='8'
              name='makePost'
              type='text'
              bg='gray.50'
              fontSize='20'
              cursor='pointer'
            />
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <HStack spacing='6' mt='6' fontSize='20' fontWeight='bold'>
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
      <Stack spacing='4' mt='5'>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Flex bg='gray.200'>Postagem 2</Flex>
        <Flex bg='gray.200'>Postagem 3</Flex>
      </Stack>
    </Flex>
  )
}

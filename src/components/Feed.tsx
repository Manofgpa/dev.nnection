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
        <Post
          image='https://scontent.fuba2-1.fna.fbcdn.net/v/t1.6435-9/245139559_5198515463508964_2007185322061498706_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PLnfM410RrEAX9OEhH4&tn=OeDYb1pbYGmFyee-&_nc_ht=scontent.fuba2-1.fna&oh=aee6afa88403d2c88ff3449bdad4ba39&oe=6189B85C'
          text='We love you Mark 🙂'
          userName='Web Nation'
          avatar='https://scontent.fuba2-1.fna.fbcdn.net/v/t1.6435-9/73504887_3186919181335279_659877839054569472_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OkcpKFBVC9MAX-XiU9Q&tn=OeDYb1pbYGmFyee-&_nc_ht=scontent.fuba2-1.fna&oh=1b7e9ed8849f3e13e6284b699940e6de&oe=618B5E4A'
          hour='2 hours'
          likes={323}
          comments={23}
          tags={['funny', 'mark', 'lol']}
        />
        <Flex bg='gray.200'>Postagem 2</Flex>
        <Flex bg='gray.200'>Postagem 3</Flex>
      </Stack>
    </Flex>
  )
}

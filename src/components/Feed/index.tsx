import {
  Box,
  Flex,
  Avatar,
  Input,
  Stack,
  HStack,
  Text,
  Link,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Post } from '../Post'
import { InputPostBox } from './InputPostBox'

export const Feed = () => {
  const { user } = useContext(AuthContext)

  return (
    <Flex direction="column" mx="auto" p={['0', '0', '4']}>
      <Flex bg="gray.200" p="4" borderRadius={10} direction="column">
        <Flex>
          <Avatar
            size="2xl"
            name="Felipe Mano"
            src="https://www.github.com/manofgpa.png"
            alignSelf="center"
            mr="4"
          />
          <Box as="label" w="100%">
            <InputPostBox />
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
        <Post
          image="https://scontent.fuba2-1.fna.fbcdn.net/v/t1.6435-9/245139559_5198515463508964_2007185322061498706_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PLnfM410RrEAX9OEhH4&tn=OeDYb1pbYGmFyee-&_nc_ht=scontent.fuba2-1.fna&oh=aee6afa88403d2c88ff3449bdad4ba39&oe=6189B85C"
          text="We love you Mark 🙂"
          userName="Web Nation"
          avatar="https://scontent.fuba2-1.fna.fbcdn.net/v/t1.6435-9/73504887_3186919181335279_659877839054569472_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OkcpKFBVC9MAX-XiU9Q&tn=OeDYb1pbYGmFyee-&_nc_ht=scontent.fuba2-1.fna&oh=1b7e9ed8849f3e13e6284b699940e6de&oe=618B5E4A"
          hour="2 hours"
          likes={323}
          comments={23}
          tags={['funny', 'mark', 'lol']}
        />
        <Post
          text={`Hi everyone,
          I'm still in week 1 on LAB1 "Population". Help50 tells me everything is correct in my coding, however, the number of years don't appear in the Terminal. 
          Any ideas what might be wrong? 
          Thanks in advance for your help,
          Anne`}
          userName="Anne Dias"
          avatar="https://scontent.fuba2-1.fna.fbcdn.net/v/t1.6435-9/184840817_4025480124165055_5091020494814689470_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FOzmoPThITAAX-MdGcR&_nc_ht=scontent.fuba2-1.fna&oh=6ac07dc20641dcf71b1e41455de9c024&oe=618B8F0C"
          hour="10 hours"
          likes={9}
          comments={18}
          tags={['c', 'help', 'cs50']}
        />
        <Post
          image="https://scontent.fuba2-1.fna.fbcdn.net/v/t39.30808-6/s640x640/245181442_590218885724901_3287240177021392033_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=825194&_nc_ohc=WerP14_fnvoAX_-IBLf&tn=OeDYb1pbYGmFyee-&_nc_ht=scontent.fuba2-1.fna&oh=658da52378b733c961318d1ed65a81b8&oe=61699F49"
          text={`Python dna :
          I've stored data from the CSV file into a list of dictionaries, I want to change the value of the STR's to int from each dictionary, but while doing so, it tries to convert the name as well to int which is giving me an error, how do I skip the conversion of the first item in the dictionary?`}
          userName="Irene Naya"
          avatar="https://scontent.fuba2-1.fna.fbcdn.net/v/t1.18169-9/1236610_10151807892304675_1493437916_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=R2DgS-C8r3YAX9f8VvD&_nc_oc=AQkQzTJDPwUnDfvF5gyLAAuL7zxBVjNgST1RBzLy68QzwzNcTdp4Yft5Fe3Zkxgu9aY&_nc_ht=scontent.fuba2-1.fna&oh=b3885cff193dc0b8d307c6680975b3aa&oe=618B7120"
          hour="2 min"
          likes={1}
          comments={5}
          tags={['python', 'harvard', 'cs50']}
        />
      </Stack>
    </Flex>
  )
}

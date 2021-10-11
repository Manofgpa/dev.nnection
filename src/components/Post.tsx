import { Box, Flex, Avatar, Text, Image, Link } from '@chakra-ui/react'

export const Post = () => {
  return (
    <Flex bg='gray.200' direction='column' borderRadius={10}>
      <Flex p='2'>
        <Link>
          <Avatar
            src='https://scontent.fuba2-1.fna.fbcdn.net/v/t1.6435-9/222078416_4451438771565622_6544481935261345499_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WerOAfeDkr8AX_NmjZj&tn=OeDYb1pbYGmFyee-&_nc_ht=scontent.fuba2-1.fna&oh=dc4125840d642a547857cc970d93ff5b&oe=618B7CEF'
            size='md'
          />
        </Link>
        <Flex direction='column' ml='2'>
          <Link>
            <Text>Sensacionalista</Text>
          </Link>
          <Link>
            <Text>47 min ago</Text>
          </Link>
        </Flex>
      </Flex>
      <Box align='center'>
        <Image src='https://scontent.fuba2-1.fna.fbcdn.net/v/t1.6435-9/245278193_4681080421934788_4757357727981321519_n.jpg?_nc_cat=104&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=vmpE-bp62xgAX_g6qJ2&_nc_ht=scontent.fuba2-1.fna&oh=1c91a1d846dd56101e610a302c8789a4&oe=618B1BEC' />
      </Box>
    </Flex>
  )
}

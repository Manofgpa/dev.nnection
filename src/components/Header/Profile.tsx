import React from 'react'
import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export const Profile = () => {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Felipe Mano</Text>
        <Text fontSize='small'>manofgpa@gmail.com</Text>
      </Box>
      <Avatar
        size='md'
        name='Felipe Mano'
        src='https://www.github.com/manofgpa.png'
      />
    </Flex>
  )
}

import React from 'react'
import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Felipe Mano</Text>
          <Text fontSize='small'>manofgpa@gmail.com</Text>
        </Box>
      )}
      <Avatar
        size='md'
        name='Felipe Mano'
        src='https://www.github.com/manofgpa.png'
      />
    </Flex>
  )
}

import React, { useContext } from 'react'
import { Flex, Box, Text, Avatar, Button } from '@chakra-ui/react'
import { AuthContext, signOut } from '../../contexts/AuthContext'

interface ProfileProps {
  showProfileData: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  const { user } = useContext(AuthContext)

  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Felipe Mano</Text>
          <Text fontSize='small'>{user?.email}</Text>
        </Box>
      )}
      <Avatar
        mx='auto'
        size='md'
        name='Felipe Mano'
        src='https://www.github.com/manofgpa.png'
      />
      <Button onClick={signOut}>Signout</Button>
    </Flex>
  )
}

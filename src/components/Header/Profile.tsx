import React, { useContext, useEffect } from 'react'
import { Flex, Box, Text, Avatar, Button } from '@chakra-ui/react'
import { AuthContext, signOut } from '../../contexts/AuthContext'

interface ProfileProps {
  showProfileData: boolean
  user: {
    first_name: string
    last_name: string
    email: string
  }
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  const { user } = useContext(AuthContext)

  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>{`${user?.first_name} ${user?.last_name}`}</Text>
          <Text fontSize='small'>{user?.email}</Text>
        </Box>
      )}
      <Avatar
        mx='auto'
        size='md'
        name={`${user?.first_name} ${user?.last_name}`}
        src={user?.image}
        mr={2}
      />
      <Button onClick={signOut}>Signout</Button>
    </Flex>
  )
}

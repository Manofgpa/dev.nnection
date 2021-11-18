import React, { useContext } from 'react'
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

export const Profile = ({ showProfileData = true, user }: ProfileProps) => {
  const fullName = `${user?.first_name} ${user?.last_name}`
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{fullName}</Text>
          <Text fontSize="small">{user?.email}</Text>
        </Box>
      )}
      <Avatar
        mx="auto"
        size="md"
        name={fullName}
        src="https://www.github.com/manofgpa.png"
        mr={2}
      />
      <Button onClick={signOut}>Signout</Button>
    </Flex>
  )
}

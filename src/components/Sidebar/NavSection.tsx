import { Box, Icon, Link, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import {
  FiHome,
  FiHeart,
  FiUsers,
  FiHash,
  FiBriefcase,
  FiSettings,
} from 'react-icons/fi'

interface NavSectionProps {
  title: string
}

export const NavSection = ({ title }: NavSectionProps) => {
  const icons = {
    Home: FiHome,
    Projects: FiSettings,
    Friends: FiHeart,
    Listings: FiBriefcase,
    Groups: FiUsers,
    Tags: FiHash,
  }

  return (
    <Box color='green.50' pl='4'>
      <Link to={`/${title.toLowerCase()}`} display='flex' align='center'>
        <Icon as={icons[title]} color='gray.500' alignSelf='center' />
        <Text ml='4' fontWeight='medium'>
          {title}
        </Text>
      </Link>
    </Box>
  )
}

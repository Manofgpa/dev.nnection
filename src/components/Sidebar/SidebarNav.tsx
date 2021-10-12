import { Icon, Link, Text } from '@chakra-ui/react'
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

export const SidebarNav = ({ title }: NavSectionProps) => {
  const icons = {
    Home: FiHome,
    Projects: FiSettings,
    Friends: FiHeart,
    Listings: FiBriefcase,
    Groups: FiUsers,
    Tags: FiHash,
  }

  return (
    <Link to={`/${title.toLowerCase()}`} display='flex' align='center' mt='4'>
      <Icon as={icons[title]} color='gray.500' alignSelf='center' />
      <Text ml='4' fontWeight='medium'>
        {title}
      </Text>
    </Link>
  )
}

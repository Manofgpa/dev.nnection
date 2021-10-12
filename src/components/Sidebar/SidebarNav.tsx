import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react'
import Link from 'next/link'
import {
  FiHome,
  FiHeart,
  FiUsers,
  FiHash,
  FiBriefcase,
  FiSettings,
} from 'react-icons/fi'
import { RiAdminLine } from 'react-icons/ri'

interface NavSectionProps {
  title: string
  href: string
}

export const SidebarNav = ({ title, href }: NavSectionProps) => {
  const icons = {
    Home: FiHome,
    Projects: FiSettings,
    Friends: FiHeart,
    Listings: FiBriefcase,
    Groups: FiUsers,
    Tags: FiHash,
    Admin: RiAdminLine,
  }

  return (
    <Link href={href} passHref>
      <ChakraLink display='flex' align='center' mt='4'>
        <Icon as={icons[title]} color='gray.500' alignSelf='center' />
        <Text ml='4' fontWeight='medium'>
          {title}
        </Text>
      </ChakraLink>
    </Link>
  )
}

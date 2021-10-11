import { Box, Stack, Text, Flex, Icon, Link } from '@chakra-ui/react'
import {
  FiHome,
  FiHeart,
  FiUsers,
  FiHash,
  FiBriefcase,
  FiSettings,
} from 'react-icons/fi'

export const Sidebar = () => {
  return (
    <Box as='aside' w='20%' bg='green.500' position='fixed' top='20' left='0'>
      <Stack spacing='12'>
        <Box color='green.50' ml='4'>
          <Stack spacing='4' mt='8' fontSize='20'>
            <Link display='flex' align='center'>
              <Icon as={FiHome} color='gray.500' alignSelf='center' />
              <Text ml='4' fontWeight='medium'>
                Home
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiSettings} color='gray.500' alignSelf='center' />
              <Text ml='4' fontWeight='medium'>
                Projects
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiHeart} color='gray.500' alignSelf='center' />
              <Text ml='4' fontWeight='medium'>
                Friends
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiBriefcase} color='gray.500' alignSelf='center' />
              <Text ml='4' fontWeight='medium'>
                Listings
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiUsers} color='gray.500' alignSelf='center' />
              <Text ml='4' fontWeight='medium'>
                Groups
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiHash} color='gray.500' alignSelf='center' />
              <Text ml='4' fontWeight='medium'>
                Tags
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

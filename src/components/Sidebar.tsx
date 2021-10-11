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
    <Box as='aside' w='64' mr='8' bg='green.500'>
      <Stack spacing='12' align='flex-start'>
        <Box color='green.50'>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' align='center'>
              <Icon as={FiHome} color='gray.500' fontSize='20' />
              <Text ml='4' fontWeight='medium'>
                Home
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiSettings} color='gray.500' fontSize='20' />
              <Text ml='4' fontWeight='medium'>
                Projects
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiHeart} color='gray.500' fontSize='20' />
              <Text ml='4' fontWeight='medium'>
                Friends
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiBriefcase} color='gray.500' fontSize='20' />
              <Text ml='4' fontWeight='medium'>
                Listings
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiUsers} color='gray.500' fontSize='20' />
              <Text ml='4' fontWeight='medium'>
                Groups
              </Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FiHash} color='gray.500' fontSize='20' />
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

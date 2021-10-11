import { Box, Stack, Text, Icon, Link } from '@chakra-ui/react'
import { NavSection } from './NavSection'

export const Sidebar = () => {
  return (
    <Box
      as='aside'
      w='20%'
      bg='green.500'
      position='fixed'
      top='20'
      left='0'
      h='100vh'>
      <Stack spacing='6' mt='5' fontSize='20'>
        <NavSection title='Home' />
        <NavSection title='Projects' />
        <NavSection title='Friends' />
        <NavSection title='Listings' />
        <NavSection title='Groups' />
        <NavSection title='Tags' />
      </Stack>
    </Box>
  )
}

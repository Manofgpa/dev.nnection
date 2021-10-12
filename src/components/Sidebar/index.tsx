import { Box, Stack, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { NavSection } from './NavSection'

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Box
      as='aside'
      w='20%'
      bg='green.500'
      position='fixed'
      top='20'
      hidden={isDrawerSidebar}
      left='0'
      h='100vh'>
      <Stack spacing='6' mt='5' fontSize='20'>
        <NavSection
          isDrawerSidebar={isDrawerSidebar}
          isOpen={isOpen}
          onClose={onClose}
        />
      </Stack>
    </Box>
  )
}

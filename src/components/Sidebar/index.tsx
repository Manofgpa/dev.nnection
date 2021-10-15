import { Box, Stack, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { NavSection } from './NavSection'
import { SidebarNav } from './SidebarNav'

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Box
      as='aside'
      w='15%'
      bg='green.500'
      position='sticky'
      hidden={isDrawerSidebar}
      left='0'>
      <Stack spacing='6' mt='5' fontSize='20'>
        <NavSection
          isDrawerSidebar={isDrawerSidebar}
          isOpen={isOpen}
          onClose={onClose}
        />
        {/* <Box pl='4'>
          <SidebarNav title='Admin' href='/admin' />
        </Box> */}
      </Stack>
    </Box>
  )
}

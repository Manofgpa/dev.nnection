import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import React from 'react'
import { SidebarNav } from './SidebarNav'

interface NavSectionProps {
  isDrawerSidebar: boolean
  isOpen: boolean
  onClose: () => void
}

export const NavSection = ({
  isDrawerSidebar,
  isOpen,
  onClose,
}: NavSectionProps) => {
  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg='gray.800' p='4' color='#ffffff'>
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <SidebarNav title='Home' href='/' />
              <SidebarNav title='Projects' href='/projects' />
              <SidebarNav title='Friends' href='/friends' />
              <SidebarNav title='Listings' href='/listings' />
              <SidebarNav title='Groups' href='/groups' />
              <SidebarNav title='Tags' href='/tags' />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box color='green.50' pl='4'>
      <SidebarNav title='Home' href='/' />
      <SidebarNav title='Projects' href='/projects' />
      <SidebarNav title='Friends' href='/friends' />
      <SidebarNav title='Listings' href='/listings' />
      <SidebarNav title='Groups' href='/groups' />
      <SidebarNav title='Tags' href='/tags' />
    </Box>
  )
}

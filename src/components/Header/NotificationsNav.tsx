import React from 'react'
import { Icon, Button, HStack } from '@chakra-ui/react'
import {
  MdOutlineChatBubbleOutline,
  MdOutlineNotificationsActive,
} from 'react-icons/md'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

export const NotificationsNav = () => {
  return (
    <HStack
      spacing='6'
      mx='8'
      pr='8'
      py='1'
      color='green.800'
      borderRightWidth={1}
      borderColor='gray.700'>
      <Button bg='none' _hover={{ color: 'none' }}>
        <Icon as={MdOutlineNotificationsActive} fontSize='35' />
      </Button>
      <Button bg='none' _hover={{ color: 'none' }}>
        <Icon as={MdOutlineChatBubbleOutline} fontSize='35' />
      </Button>
      <Button bg='none' _hover={{ color: 'none' }}>
        <Icon as={AiOutlineUsergroupAdd} fontSize='35' />
      </Button>
    </HStack>
  )
}

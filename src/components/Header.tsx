import {
  Flex,
  Text,
  Icon,
  Input,
  Image,
  HStack,
  Box,
  Avatar,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import {
  MdOutlineNotificationsActive,
  MdOutlineChatBubbleOutline,
} from 'react-icons/md'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

export const Header = () => {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'>
      <Image src='small-logo.png' width={200} />

      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxWidth={1480}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'>
        <Input
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
          placeholder='Search on Dev'
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize='20' />
      </Flex>

      <Flex align='center' ml='auto'>
        <HStack
          spacing='6'
          mx='8'
          pr='8'
          py='1'
          color='green.800'
          borderRightWidth={1}
          borderColor='gray.700'>
          <Icon as={MdOutlineNotificationsActive} fontSize='50' />
          <Icon as={MdOutlineChatBubbleOutline} fontSize='50' />
          <Icon as={AiOutlineUsergroupAdd} fontSize='50' />
        </HStack>
        <Flex align='center'>
          <Box mr='4' textAlign='right'>
            <Text>Felipe Mano</Text>
            <Text fontSize='small'>manofgpa@gmail.com</Text>
          </Box>

          <Avatar
            size='md'
            name='Felipe Mano'
            src='https://www.github.com/manofgpa.png'
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

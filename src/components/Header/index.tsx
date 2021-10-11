import { Flex, Image } from '@chakra-ui/react'
import { NotificationsNav } from '../Header/NotificationsNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'

export const Header = () => {
  return (
    <Flex
      zIndex={1000}
      position='fixed'
      as='header'
      w='100%'
      h='20'
      mx='auto'
      px='4'
      align='center'
      bg='white'>
      <Image src='/small-logo.png' width={200} />

      <SearchBox />

      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}

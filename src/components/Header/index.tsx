import {
  Flex,
  IconButton,
  Image,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { NotificationsNav } from '../Header/NotificationsNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const { onOpen } = useSidebarDrawer()

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
      {!isWideVersion && (
        <IconButton
          aria-label='Open navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'></IconButton>
      )}

      <Image src='/small-logo.png' width={[100, 130, 250]} />

      {isWideVersion && <SearchBox />}

      <Flex>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}

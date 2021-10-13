import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
  Spinner,
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import Link from 'next/link'

export default function Admin() {
  const { data, isLoading, error } = useQuery(
    'users',
    async () => {
      const response = await fetch('http://localhost:3001/users')

      const data = await response.json()

      const users = data.map(user => {
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.created_at).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        }
      })

      return users
    },
    {
      staleTime: 1000 * 5, // 5 seg
    }
  )

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex direction='column' h='130vh' bg='gray.900'>
      <Header />
      <Flex
        w={['auto', '100%']}
        my='6'
        maxWidth={1480}
        mx='auto'
        px='6'
        color='gray.50'>
        <Sidebar />
        <Box
          flex='1'
          borderRadius={8}
          p='8'
          h={['122vh', '0vh']}
          mt={['10', '10', '20']}
          ml={['0', '0', '0', '60']}>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Users
            </Heading>
            <Link href='/admin/createUser'>
              <Button
                as='a'
                size='md'
                fontSize='md'
                colorScheme='green'
                leftIcon={<Icon as={RiAddLine} fontSize='xl' />}>
                Create user
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Fail to fetch data.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme='blackAlpha'>
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color='gray.300' width='8'>
                      <Checkbox colorScheme='green' />
                    </Th>
                    <Th>User</Th>
                    <Th>Registration date </Th>
                    <Th w='8'></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(user => (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme='green' />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight='bold'>{user.name}</Text>
                          <Text fontSize='small' color='gray.300'>
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                      <Td>
                        <Button
                          as='a'
                          size='md'
                          fontSize='md'
                          colorScheme='orange'
                          leftIcon={<Icon as={RiPencilLine} />}>
                          Edit
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

import { Box, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { setupAPIClient } from '../services/api'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Groups() {
  return (
    <Box position='fixed' top='50%' left='50%' fontSize='30' align='center'>
      <Text m='2'>Under construction.</Text>
      <Link href='/feed'>
        <Button>Back to feed</Button>
      </Link>
    </Box>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')

  return {
    props: {},
  }
})

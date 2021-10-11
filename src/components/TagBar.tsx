import { Box, Stack, Text, Divider, Link } from '@chakra-ui/react'

export const TagBar = () => {
  return (
    <Box
      as='aside'
      bg='gray.200'
      w='20%'
      position='fixed'
      right='0'
      top='20'
      h='100vh'>
      <Stack spacing='4' align='center'>
        <Box w='90%' bg='#FFFFFF' mt='5' borderRadius={10}>
          <Stack spacing='4' mt='4' align='stretch' fontSize='20'>
            <Box p='2'>
              <Link>
                <Text fontWeight='medium'>#react</Text>
              </Link>
            </Box>
            <Divider />
            <Box p='2'>
              <Link>
                <Text>How to improve React skills?</Text>
                <Text fontSize='small'>By Felipe Mano</Text>
              </Link>
            </Box>
            <Divider />
            <Box p='2'>
              <Link>
                <Text>React Guide 101</Text>
                <Text fontSize='small'>By Ailton Rafael</Text>
              </Link>
            </Box>
            <Divider />
            <Box p='2'>
              <Link>
                <Text>10 Trending React projects on GitHub</Text>
                <Text fontSize='small'>By Julia Moraes</Text>
              </Link>
            </Box>
            <Divider />
          </Stack>
        </Box>
        <Box w='90%' bg='#FFFFFF' m='auto' mt='5' borderRadius={10}>
          <Stack spacing='4' mt='4' align='stretch' fontSize='20'>
            <Box p='2'>
              <Link>
                <Text fontWeight='medium'>#javascript</Text>
              </Link>
            </Box>
            <Divider />
            <Box p='2'>
              <Link>
                <Text>Best JS libraries</Text>
                <Text fontSize='small'>By Ailton Rafael</Text>
              </Link>
            </Box>
            <Divider />
            <Box p='2'>
              <Link>
                <Text>Have you tried Typescript?</Text>
                <Text fontSize='small'>By Liniquer Silva</Text>
              </Link>
            </Box>
            <Divider />
            <Box p='2'>
              <Link>
                <Text>Improve your JS skills with these tips</Text>
                <Text fontSize='small'>By Roberta Camilo</Text>
              </Link>
            </Box>
            <Divider />
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

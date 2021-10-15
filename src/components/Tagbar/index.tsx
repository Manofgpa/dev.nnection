import {
  Box,
  Stack,
  Text,
  Divider,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react'
import { TagbarPost } from './TagbarPost'
import { TagbarPostSection } from './TagbarPostSection'

export const TagBar = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const sections = [
    {
      title: 'react',
      posts: [
        {
          title: 'How to improve React Skills?',
          author: 'Felipe Mano',
        },
        {
          title: 'React Guide 101',
          author: 'Ailton Rafael',
        },
        {
          title: '10 Trending React projects on GitHub',
          author: 'Julia Moraes',
        },
      ],
    },
    {
      title: 'javascript',
      posts: [
        {
          title: 'Best JS libraries',
          author: 'Ailton Rafael',
        },
        {
          title: 'Have you tried Typescript?',
          author: 'Liniquer Silva',
        },
        {
          title: 'Improve your JS skills with these tips',
          author: 'Roberta Camilo',
        },
      ],
    },
  ]

  return (
    <>
      {isWideVersion && (
        <Box
          as='aside'
          bg='gray.200'
          w='20%'
          position='sticky'
          // right='0'
          // top='20'
          // h='100vh'
        >
          <Stack spacing='4' align='center'>
            <TagbarPostSection sections={sections} />
          </Stack>
        </Box>
      )}
    </>
  )
}

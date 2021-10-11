import { Box, Stack, Text, Divider, Link } from '@chakra-ui/react'
import { TagbarPost } from './TagbarPost'
import { TagbarPostSection } from './TagbarPostSection'

export const TagBar = () => {
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
    <Box
      as='aside'
      bg='gray.200'
      w='20%'
      position='fixed'
      right='0'
      top='20'
      h='100vh'>
      <Stack spacing='4' align='center'>
        <TagbarPostSection sections={sections} />
        <Box w='90%' bg='#FFFFFF' m='auto' mt='5' borderRadius={10}>
          <Stack spacing='4' mt='4' align='stretch' fontSize='20'>
            <Box p='2'>
              <Link>
                <Text fontWeight='medium'>#javascript</Text>
              </Link>
            </Box>
            <Divider />
            <TagbarPost title='Best JS libraries' author='Ailton Rafael' />
            <Divider />
            <TagbarPost
              title='Have you tried Typescript'
              author='Liniquer Silva'
            />
            <Divider />
            <TagbarPost
              title='Improve your JS skills with these tips'
              author='Roberta Camilo'
            />
            <Divider />
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

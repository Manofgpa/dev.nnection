import { Box, Stack, useBreakpointValue } from '@chakra-ui/react'
import { useEffect } from 'react'
import { api } from '../../services/apiClient'
import { TagbarPostSection } from './TagbarPostSection'

type User = {
  first_name: string
  last_name: string
}

interface TagbarProps {
  posts: {
    message: string
    user: User
    timestamp: Date
    likes: {
      count: number
      users: User[]
    }
    github: string
    linkedin: string
    image: string
    tags: string[]
  }[]
}

export const TagBar = ({ posts }: TagbarProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await api.get(`/posts/${tag}`)
  //   }
  // }, [])

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
          as="aside"
          bg="gray.200"
          w="20%"
          position="sticky"
          // right='0'
          // top='20'
          // h='100vh'
        >
          <Stack spacing="4" align="center">
            <TagbarPostSection sections={sections} />
          </Stack>
        </Box>
      )}
    </>
  )
}

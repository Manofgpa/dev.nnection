import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

interface TagbarPostProps {
  title: string
  author: string
}

export const TagbarPost = ({ title, author }: TagbarPostProps) => {
  return (
    <Box p='2'>
      <Link>
        <Text>{title}</Text>
        <Text fontSize='small'>{`By ${author}`}</Text>
      </Link>
    </Box>
  )
}

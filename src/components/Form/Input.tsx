import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      <FormLabel fontSize='18' py='2'>
        {label}
      </FormLabel>
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor='green.500'
        bgColor='gray.50'
        color='black'
        borderRadius={20}
        variant='filled'
        textAlign='center'
        _hover={{
          bgColor: 'gray.900',
        }}
        size='lg'
        {...rest}
      />
    </FormControl>
  )
}

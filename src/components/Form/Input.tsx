import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
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
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    )
  }

export const Input = forwardRef(InputBase)

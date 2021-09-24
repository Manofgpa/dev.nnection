import React from 'react'
import Button from '../Button'
import { Input, Form, Div } from './FormElements'

export const FormComponent = () => {
  return (
    <Div>
      <Form>
        <Input type='text' name='username' placeholder='Username' />
        <Input type='password' name='password' placeholder='Password' />
        <Button id='loginButton' value='Login' />
      </Form>
    </Div>
  )
}

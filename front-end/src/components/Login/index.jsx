import React from 'react'
import { Main, Container } from './LoginElement'
import { FormComponent } from '../Form'

export const LayoutLoginComponent = () => {
  return (
    <Main>
      <Container>
        <img src='images/logo.png' alt='Logo' fluid width='500px' />
      </Container>
      <Container>
        <FormComponent />
      </Container>
    </Main>
  )
}

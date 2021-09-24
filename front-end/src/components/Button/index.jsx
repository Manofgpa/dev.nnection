import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Button = ({ value }) => {
  return <Input type='button' value={value}></Input>
}

export default Button

const Input = styled.input`
  background: ${props => props.theme.black};
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, '#36A420')};
  }
`

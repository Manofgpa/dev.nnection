import styled from 'styled-components'

export const Input = styled.input`
  background-color: ${props => props.theme.button};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-style: solid 10px;
  width: 100px;
`
export const Div = styled.div`
  display: flex;
  border-style: solid 10px black;
  background-color: #ffffff;
  width: 50%;
  align-content: center;
`

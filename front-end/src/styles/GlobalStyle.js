import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: border-box;
}


body {
    font-family: 'montserrat', sans-serif;
    background-color: ${props => props.theme.bgColor};
}

body, #root {
    height: 100vh;
}
`

export { GlobalStyle }
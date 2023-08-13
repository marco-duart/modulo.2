import { createGlobalStyle } from 'styled-components'
import { styled } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    background-color: black;
  }
`

export const PageStyle = styled.div`
  display: grid;
  place-items: center;
`

export default GlobalStyle
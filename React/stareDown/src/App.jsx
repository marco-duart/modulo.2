import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DefaultPage from './components/DefaultPage'
import GlobalStyle from './assets/styles/globalStyle'
import {PageStyle} from './assets/styles/globalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <PageStyle>
        <DefaultPage />
      </PageStyle>
    </>
  )
}

export default App

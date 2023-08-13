import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import ContentPage from './components/ContentPage'
import Footer from './components/Footer'
import games from './assets/products.json'
import GlobalStyle from './assets/styles/globalStyle'
import {PageStyle} from './assets/styles/globalStyle'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <PageStyle>
        <Header />
        <ContentPage products={games} />
        <Footer />
      </PageStyle>
    </>
  )
}

export default App

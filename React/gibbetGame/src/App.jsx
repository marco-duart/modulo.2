import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GibbetGame from './components/GibbetGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GibbetGame />
    </>
  )
}

export default App

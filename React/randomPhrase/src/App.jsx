import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RandomPhrase from './components/RandomPhrase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomPhrase />
    </>
  )
}

export default App

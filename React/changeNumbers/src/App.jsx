import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChangeNumbers from './components/ChangeNumbers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChangeNumbers />
    </>
  )
}

export default App

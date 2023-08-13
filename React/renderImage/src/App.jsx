import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RenderImage from './components/RenderImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RenderImage />
    </>
  )
}

export default App

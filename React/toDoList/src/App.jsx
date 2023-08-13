import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './components/List/List'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List />
    </>
  )
}

export default App

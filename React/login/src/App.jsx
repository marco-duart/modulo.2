import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormLogin from './components/FormLogin/FOrmLogin'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormLogin />
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, adipisci? Amet sint consectetur in sequi adipisci omnis placeat, repudiandae minima?" title="Algum título" subtitle="Teorias sobre ese título" />
    </>
  )
}

export default App

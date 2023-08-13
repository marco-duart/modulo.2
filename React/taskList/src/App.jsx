import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskList from './components/TaskList'

const tasks = [
	  {
      id: 1,
	    texto: 'Escovar os dentes',
	    concluida: true
    },
    {
      id: 2,
      texto: 'Tomar banho',
      concluida: false
    },
    {
      id: 3,
      texto: 'Fazer café',
      concluida: false
    },
    {
      id: 4,
      texto: 'Alimentar os cachorros',
      concluida: false
    },
    {
      id: 5,
      texto: 'Buscar pedido na fermácia',
      concluida: false
    },
    {
      id: 6,
      texto: 'Recolher as roupas',
      concluida: false
    }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskList title="Lista de Tarefas" tasks={tasks} />
    </>
  )
}

export default App

import HomePage from './pages/HomePage'
import schedule from './assets/data.json'

type Schedule = (Task | Event | Reminder)[]

function App() {

  return (
    <>
      <HomePage schedule={schedule as Schedule} />
    </>
  )
}

export default App

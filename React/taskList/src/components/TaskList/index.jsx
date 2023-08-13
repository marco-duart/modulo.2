import { useState } from 'react'

/* const isDone = (done) => !done */

const TaskList = ({tasks}) => {
    const [done, setDone] = useState(tasks)

    const isDone = (element) => {
        setDone({
          ...element,
          concluida: !element.concluida
        })
        console.log(element.concluida)
    }

    return (
        <div>
            <ul>
                {done.map((task) => <li onClick={() => setDone(isDone(task))} style={{cursor: 'pointer'}} key={task.id}>{task.texto}</li>)}
            </ul>
        </div>
    )
}

export default TaskList

/* {currenTask.map((task) => <li onClick={() => setDone(isDone(task))} style={{cursor: 'pointer'}} key={task.id}>{task.texto}</li>)} */
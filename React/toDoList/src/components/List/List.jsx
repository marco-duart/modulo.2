const tasks = [
	{
	    description: 'Escovar os dentes',
	    isDone: true
    },
    {
        description: 'Tomar banho',
        isDone: false
    },
    {
        description: 'Fazer café',
        isDone: false
    },
    {
        description: 'Alimentar os cachorros',
        isDone: false
    },
    {
        description: 'Buscar pedido na fermácia',
        isDone: false
    },
    {
        description: 'Recolher as roupas',
        isDone: false
    }
]

const List = () => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.description}>
                    <input type="checkbox" name="" id="" checked={task.isDone} />
                    {task.isDone === true ? <p>{task.description}</p> : <s>{task.description}</s>}
                </li>
            ))}
        </ul>
    )
}

export default List
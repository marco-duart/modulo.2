import { useState } from "react"

const ChangeNumbers = () => {
    const [number, setNumber] = useState(1)

    return (
        <div>
            <button onClick={() => setNumber(number-1)}>-</button>
            <p>{number}</p>
            <button onClick={() => setNumber(number+1)}>+</button>
        </div>
    )
}

export default ChangeNumbers
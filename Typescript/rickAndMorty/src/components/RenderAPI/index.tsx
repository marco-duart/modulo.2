import { useState, useEffect, useCallback } from 'react'

const RenderAPI = () => {
    const [numbers, setNumbers] = useState<number[]>([1,2,3,4,5,6])
    const [data, setData] = useState<Results[]>()

    const handleChange = () => {
        const newNumbers = numbers.map(() => Math.floor(Math.random() * (826 - 1 + 1)) + 1)
        setNumbers(newNumbers)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiURL = `https://rickandmortyapi.com/api/character/${numbers[0]},${numbers[1]},${numbers[2]},${numbers[3]},${numbers[4]},${numbers[5]}`
                const response = await fetch(apiURL)
                const dataResponse = await response.json()
                setData(dataResponse)
            } catch {
                console.log('Errou!!!!!')
            }
        }
        fetchData()
    },[numbers])

    return (
        <>
            {data?.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt={item.name} />
                </div>
            ))}
            <div>
                <button onClick={() => handleChange()}>Aleatorizar!!!</button>
            </div>
        </>
    )
}

export default RenderAPI
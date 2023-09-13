import { useEffect, useState } from "react"

const RenderPlanets = () => {
    const [data, setData] = useState<Result[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiURL = `https://swapi.dev/api/planets?page=${page}`
                const response = await fetch(apiURL)
                const responseData = await response.json()
                const { results } = responseData
                setData(results)
            } catch {
                console.log('Erro!!!')
            }
        }
        fetchData()
    },[page])


    const changePage = (operation: boolean) => {
        operation && setPage((prevPage) => prevPage + 1)
        !operation && setPage((prevPage) => prevPage - 1)
    }

    return (
        <ul>
            {data.map((planet, index) => (
                <div key={index}>
                    <li>{planet.name}</li>
                    <div>Período de rotação: {planet.rotation_period}</div>
                    <div>Período orbital: {planet.orbital_period}</div>
                    <div>Diâmetro: {planet.diameter}</div>
                    <div>População: {planet.population}</div>
                </div>
            ))}
            <div>
                <button onClick={() => changePage(false)}>Previous</button>
                <button onClick={() => changePage(true)}>Next</button>
            </div>
        </ul>
    )
}

export default RenderPlanets
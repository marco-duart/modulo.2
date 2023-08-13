import { useState } from "react"
import { faker } from '@faker-js/faker'

const newImage = () => faker.image.url()

const RenderImage = () => {
    const [source, setSource] = useState(faker.image.url())
    return (
        <div>
            <button onClick={() => setSource(newImage())}>Anterior</button>
            <img src={source} alt="" />
            <button onClick={() => setSource(newImage())}>Próxima</button>
        </div>
    )
}

export default RenderImage
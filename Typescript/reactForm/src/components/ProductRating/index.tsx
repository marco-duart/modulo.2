import React, { useState, ChangeEvent } from 'react';

type Rating = "1" | "2" | "3" | "4" | "5"
type Navigation = 'ADDRESS' | 'PRODUCT'
type Props = {
    setPage: React.Dispatch<React.SetStateAction<Navigation>>
}

const ProductRating = (props: Props) => {
    const [review, setReview] = useState<Rating>()

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setReview(event.target.value as Rating)
    }

    return (
        <div>
            <select name="rating" onChange={handleSelectChange} value={review}>
                <option value="" disabled selected>Select a rating</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
            <p>Selected Rating: {review}</p>
            <button onClick={() => props.setPage('ADDRESS')}>Voltar</button>
            <button onClick={() => alert("Avaliação salva!")}>Avaliar</button>
        </div>
    )
}


export default ProductRating
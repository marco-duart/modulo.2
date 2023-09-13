import { useState } from 'react'
import AddressForm from '../AddressForm'
import ProductRating from '../ProductRating'

type Navigation = 'ADDRESS' | 'PRODUCT'

const Title = () => {
    const [page, setPage] = useState<Navigation>('ADDRESS')
    return (
        <main>
            {page === 'ADDRESS' && <AddressForm setPage={setPage}/> }
            {page === 'PRODUCT' && <ProductRating setPage={setPage}/> }
        </main>
    )
}

export default Title
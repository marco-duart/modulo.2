import { useState } from "react"

type Navigation = 'ADDRESS' | 'PRODUCT'
type Props = {
    setPage: React.Dispatch<React.SetStateAction<Navigation>>
}

const AddressForm = (props: Props) => {
  const [address, setAddress] = useState({
    CEP: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: ""
  })

  return (
    <div>
        <div>
            <label htmlFor="">CEP: </label>
            <input value={address.CEP} onChange={(event) => setAddress({ ...address, CEP: event.target.value })}/>
        </div>
        <div>
            <label htmlFor="">Rua: </label>
            <input value={address.street} onChange={(event) => setAddress({ ...address, street: event.target.value })}/>
        </div>
        <div>
            <label htmlFor="">Número: </label>
            <input value={address.number} onChange={(event) => setAddress({ ...address, number: event.target.value })}/>
        </div>
        <div>
            <label htmlFor="">complemento: </label>
            <input value={address.complement} onChange={(event) => setAddress({ ...address, complement: event.target.value })}/>
        </div>
        <div>
            <label htmlFor="">Bairro: </label>
            <input value={address.neighborhood} onChange={(event) => setAddress({ ...address, neighborhood: event.target.value })}/>
        </div>
        <div>
            <label htmlFor="">Cidade: </label>
            <input value={address.city} onChange={(event) => setAddress({ ...address, city: event.target.value })}/>
        </div>
        <div>
            <label htmlFor="">Estado: </label>
            <input value={address.state} onChange={(event) => setAddress({ ...address, state: event.target.value })}/>
        </div>
        <div>
            <p>Eu moro na rua {address.street}, número {address.number}, {address.complement}, bairro {address.neighborhood}, em {address.city} no estado de {address.state}</p>
        </div>
        <button onClick={() => props.setPage('PRODUCT')}>Avaliar</button>
    </div>
  )
}

export default AddressForm

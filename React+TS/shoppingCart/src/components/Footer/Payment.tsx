import mastercard from '../../assets/img/mastercard.png'
import hipercard from '../../assets/img/hipercard.png'
import visa from '../../assets/img/visa.png'
import ticket from '../../assets/img/boleto.png'

const paymentMethods = [
    {
        id: 0,
        flag: 'mastercard',
        src: mastercard
    },
    {
        id: 1,
        flag: 'hipercard',
        src: hipercard
    },
    {
        id: 2,
        flag: 'visa',
        src: visa
    },
    {
        id: 3,
        flag: 'ticket',
        src: ticket
    }
]

const Payment = ({card}) => {
    return (
        <div>
            {paymentMethods.map((paymentItem) => card === paymentItem.flag && <img key={paymentItem.id} src={paymentItem.src} alt={paymentItem.flag} />)}
        </div>
    )
}

export default Payment
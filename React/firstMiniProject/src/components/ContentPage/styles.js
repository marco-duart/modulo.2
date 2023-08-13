import {styled} from "styled-components"

const MainStyle = styled.main`
    width: 595px;
    background-color: rgba(255, 255, 255, 1);
`

const TitleContainerStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 0 15px;
`

const TitleStyle = styled.div`
    font-size: 40px;
`

const CartAmountContainer = styled.div`
    width: 49px;
    height: 44px;
    background-color: rgba(105, 80, 161, 1);
    border-radius: 10px;
    display: grid;
    place-items: center;
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
`

const GameContainerStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
`

const GameCardStyle = styled.div`
    width: 157px;
    height: 195px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const GameImageStyle = styled.img`
    height: 157px;
    max-width: 157px;
    object-fit: cover;
`

const ContainerCartListStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px 20px;
    gap: 20px;
    margin-bottom: 50px;
`

const CartListStyle = styled.div`
    display: flex;
`

const ItemCartCardStyle = styled.div`
    max-height: 157px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ItemImageStyle = styled.img`
    height: 157px;
    max-width: 125px;
    object-fit: cover;
`

const ItemCartTitleStyle = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const ItemCartDescriptionStyle = styled.div`
    font-size: 16px;
    font-weight: bold;
`
const ItemCartButtonContainerStyle = styled.div`
    display: flex;
    justify-content: space-around;
`

const ItemCartButtonStyle = styled.button`
    border: none;
    width: 49px;
    height: 44px;
    background-color: rgba(105, 80, 161, 1);
    border-radius: 10px;
    display: grid;
    place-items: center;
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
`

const ItemCartTotal = styled.strong`
    padding-left: 20px;
`

const CartCheckoutTextStyle = styled.div`
    font-size: 22px;
    font-weight: bold;
`

const CartCheckoutStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 30px 0;
    gap: 30px;
`

const PageOneButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`

const PageTwoButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 20px;
`

const PageThreeButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
`

const CartButton = styled.button`
    border: none;
    border-radius: 10px;
    width: 211px;
    height: 43px;
    font-size: 18px;
    font-weight: 800;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(105, 80, 161, 1);
    cursor: pointer;
`

const IHateCheckbox = styled.div`
    /* Essa miséria sempre gasta tempo! */
    display: flex;
    align-items: center;
    padding-top: 10px;
    gap: 5px;
    input {
        all: unset;
        display: inline-block;
        width: 26px;
        height: 26px;
        border: 1px solid rgba(105, 80, 161, 1);
        border-radius: 10px;
    }
    input:checked {
        background-color: rgba(105, 80, 161, 1);
        width: 25px;
        height: 25px;
    }
`

export {
    MainStyle, 
    TitleContainerStyle, 
    TitleStyle, 
    CartAmountContainer, 
    GameContainerStyle,
    GameCardStyle,
    GameImageStyle,
    CartButton,
    ContainerCartListStyle,
    CartListStyle,
    ItemImageStyle,
    ItemCartCardStyle,
    ItemCartTitleStyle,
    ItemCartDescriptionStyle,
    ItemCartButtonContainerStyle,
    ItemCartButtonStyle,
    ItemCartTotal,
    CartCheckoutTextStyle,
    CartCheckoutStyle,
    PageOneButtonContainer,
    PageTwoButtonContainer,
    PageThreeButtonContainer,
    IHateCheckbox
}
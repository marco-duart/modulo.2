import { styled } from 'styled-components'

export const DetailsContainerStyle = styled.div`
    width: 100vw;
    display: grid;
    place-items: center;
    gap: 20px;
`

export const DetailsContentDivStyle = styled.div`
    width: 80%;
`
export const DetailsImageDivStyle = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DetailsImageStyle = styled.img`
    width: 788px;
    height: 420px;
    border-radius: 5px;
    object-fit: cover;
`

export const DetailsTitleStyle = styled.div`
    color: rgba(105, 80, 161, 1);
    font-size: 32px;
    font-weight: 700;
`

export const DetailsContentStyle = styled.div`
    color: rgba(0, 0, 0, 1);
    font-size: 14px;
`

export const DetailsButtonStyle = styled.button`
    border: none;
    width: 100px;
    height: 42px;
    border-radius: 15px;
    color: rgba(255, 255, 255);
    background-color: rgba(105, 80, 161, 1);
    font-size: 16px;
    cursor: pointer;
`
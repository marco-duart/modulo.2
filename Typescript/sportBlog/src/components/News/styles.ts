import { styled } from 'styled-components'

export const NewsContainerStyle = styled.div`
    width: 900px;
    height: 284px;
    border: 1px solid rgba(105, 80, 161, 1);
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const NewsImageStyle = styled.img`
    width: 401px;
    height: 220px;
    object-fit: cover;
`

export const NewsContentDivStyle = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const NewsTitleStyle = styled.div`
    color: rgba(105, 80, 161, 1);
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
`

export const NewsContentStyle = styled.div`
    color: rgba(0, 0, 0, 1);
    font-size: 14px;
`
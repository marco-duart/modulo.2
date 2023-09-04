import { styled } from 'styled-components'

export const FormContainer = styled.div`
    position: absolute;
    top: 190px;
    right: 90px;
    width: 372px;
    height: 608px;
    border: 2px solid rgba(105, 80, 161, 1);
    border-radius: 15px;
`

export const FormTitleContainer = styled.div`
    width: 372px;
    height: 173px;
    border-radius: 15px;
    border: 1px solid rgba(26, 16, 51, 0.9);
    background-color: rgb(49, 40, 71);
    display: grid;
    place-items: center;
`

export const FormTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
`

export const FormDiv = styled.div`
    padding-top: 20px;
    display: grid;
    place-items: center;
    gap: 20px;
`
export const FormItemDiv = styled.div`
    width: 332px;
`

export const FormLabelItem = styled.label`
    color: rgba(43, 43, 43, 1);
`

export const FormImputItem = styled.input`
    width: 332px;
    height: 32px;
    border: 1px solid rgba(105, 80, 161, 1);
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 1);
`

export const FormButton = styled.button`
    border: none;
    border-radius: 20px;
    width: 332px;
    height: 49px;
    background-color: rgba(105, 80, 161, 1);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
`
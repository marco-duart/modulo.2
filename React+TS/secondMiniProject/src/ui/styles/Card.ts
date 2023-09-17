import { styled } from 'styled-components'
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -119px;
    margin-left: -265px;
    width: 530px;
    height: 238px;
    display: grid;
    place-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const NegateButton = styled.button`
    border: none;
    position: absolute;
    left: 50px;
    bottom: 0px;
    box-sizing: border-box;
    width: 184px;
    height: 59px;
    border-radius: 25px;
    color: #3A72F8;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
`

export const AcceptButton = styled.button`
    border: 1px solid #0A2668;
    position: absolute;
    right: 50px;
    bottom: 0px;
    box-sizing: border-box;
    width: 184px;
    height: 59px;
    border-radius: 25px;
    background-color: #0A2668;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
`

export const SectionCardStyle = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`

export const CardStyle = styled.div`
    box-sizing: border-box;
    width: 290px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 25px;
    background-color: #F8F8F8;
    box-shadow: 2px 4px 3px 0px #00000047;
    padding: 10px;
`

export const TitleCardStyle = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #575757;
`

export const TitleInputCardStyle = styled.input`
    box-sizing: border-box;
    padding: 0 10px;
    width: 260px;
    height: 35px;
    font-size: 20px;
    border: 1px solid #575757;
    border-radius: 25px;
    font-weight: 700;
    color: #575757;
`

export const ContentCardStyle = styled.div`
    font-size: 16px;
    color: #575757;
`

export const ContentInputCardStyle = styled.textarea`
    box-sizing: border-box;
    padding: 10px;
    width: 260px;
    max-height: 90px;
    font-size: 16px;
    border: 1px solid #575757;
    border-radius: 25px;
    color: #575757;
`

export const IcoSectionCardStyle = styled.div`
    width: 100%;
    position: relative;
`

export const RightIconImg = styled.img`
    width: 19px;
    height: 19px;
    position: absolute;
    right: 20px;
    cursor: pointer;
`
export const LeftIconImg = styled.img`
    width: 19px;
    height: 19px;
    position: absolute;
    left: 20px;
    cursor: pointer;
`
export const MidIconImg = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    left: 125px;
    cursor: pointer;
`
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import ArrowIcon from '../../assets/arrow.png'
import { useGlobalContext } from "../../Context"
type HeaderTypes = {
    headerName:string
    pageNumber:number
}
const Header = ({headerName,pageNumber}:HeaderTypes) => {
  const {info} = useGlobalContext()
  const navigate = useNavigate()
  const handleClick = () => {
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <HeaderContainer>
      <ArrowImageContainer onClick={handleClick}>
      <img src={ArrowIcon}/>
      </ArrowImageContainer>
        <HeaderName>{headerName}</HeaderName>
        <PageNumber>{pageNumber}/3</PageNumber>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
border-bottom: 1px solid #1A1A1A;
padding-bottom:10px;
margin-bottom:25px;
align-items:center;
`

const HeaderName = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #1A1A1A;
`

const PageNumber = styled.p`

font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #1A1A1A;
`

const ArrowImageContainer = styled.div`
position:absolute;
left:2%;
width: 40px;
height: 40px;
background: #FFFFFF;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center

`
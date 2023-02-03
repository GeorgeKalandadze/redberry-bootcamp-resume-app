import styled from "styled-components"
type HeaderTypes = {
    headerName:string
}
const Header = ({headerName}:HeaderTypes) => {
  return (
    <HeaderContainer>
        <HeaderName>{headerName}</HeaderName>
        <PageNumber>1/3</PageNumber>
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
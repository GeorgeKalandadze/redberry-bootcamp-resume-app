import styled from "styled-components";
import BackgroundImage from '../../assets/landing-background.jpg'

export const LandingBackground = styled.div`
width:100%;

background-image:url(${BackgroundImage});
background-position:center;
background-size:cover;
padding:30px;
`

export const StyledRedberryIcon = styled.img`
width:180px;
height:180px;
position:absolute;
bottom:30%;
right:30%;
`

export const StyledRedberryLogo = styled.img`
width:150px;
`

export const ButtonContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100vh;
`

export const Line = styled.div`
margin-top:15px;
border-bottom:1px solid #1A1A1A;
width:100%
`


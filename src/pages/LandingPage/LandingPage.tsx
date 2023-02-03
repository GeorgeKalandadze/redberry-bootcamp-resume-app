import { 
    LandingBackground,
    StyledRedberryIcon,
    StyledRedberryLogo,
    Line,
    ButtonContainer
} from "./LandingPage.style"

import RedberryIcon from '../../assets/redberry-icon.png'
import RedberryLogo from '../../assets/redberry-logo.png'
import { Button } from "../../components/Button/Button"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <LandingBackground>
        <StyledRedberryLogo src={RedberryLogo}/>
        <Line></Line>
        <StyledRedberryIcon src={RedberryIcon}/>
        <ButtonContainer>
          <Link to='/personal-info'><Button pdng="10px 55px">ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Button></Link>
        </ButtonContainer>
    </LandingBackground>
  )
}

export default LandingPage


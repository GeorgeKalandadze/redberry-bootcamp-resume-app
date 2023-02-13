import styled from 'styled-components';
import EmailIcon from '../../assets/email-icon.png'
import MobileIcon from '../../assets/mobile-icon.png'
import RedberryRedIcon from '../../assets/redberry-red-logo.png'
import { useGlobalContext } from '../../Context';
import { 
    Section,
    FlexedDiv,
    Name,
    SectionHeader,
    InfoText,
    StyledImage,
    Skills,
    DateText,
    RedberryRedLogo } 
from '../../styles/Resume.styles';


const Resume = () => {
    const {info} = useGlobalContext()
  return (
    <MainContainer>
    <StyledResumeContainer>
   { (info.name || info.surname || info.email || info.phone_number || info.image || info.about_me) && (
    <Section>
      <FlexedDiv>
        <div>
          <Name>{info.name} {info.surname}</Name>
          {info.email && (
            <FlexedDiv2>
              <img src={EmailIcon} />
              <p>{info.email}</p>
            </FlexedDiv2>
          )}

          {info.phone_number && (
            <FlexedDiv2>
              <img src={MobileIcon} />
              <p>{info.phone_number}</p>
            </FlexedDiv2>
          )}
          {info.about_me && (
            <>
              <SectionHeader>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</SectionHeader>
              <InfoText>{info.about_me}</InfoText>
            </>
          )}
        </div>
        <StyledImage src={info.image} />
      </FlexedDiv>
    </Section>
  )
}
            
        {info.experiences.map((experience,index) => {

            if(experience.description || experience.position || experience.employer || experience.due_date ){
                return (
                    <Section key={index}>
                    {<SectionHeader>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</SectionHeader>}
                    <Skills>{experience.position} {experience.employer}</Skills>
                    <DateText>{experience.start_date} - {experience.due_date}</DateText>
                    <InfoText>{experience.description}</InfoText>
                    </Section>
                )
            }
        })
        }
        {info.educations.map((experience,index) => {

            if(experience.description || experience.institute || experience.due_date || experience.degree_id ){
                return (
                    <Section key={index}>
                    {<SectionHeader>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</SectionHeader>}
                    <Skills>{experience.institute} {experience.due_date}</Skills>
                    <DateText>{experience.degree_id} - {experience.due_date}</DateText>
                    <InfoText>{experience.description}</InfoText>
                    </Section>
                )
            }
            })
            }
           
    </StyledResumeContainer>
        <RedberryRedLogo src={RedberryRedIcon}/>
    </MainContainer>
  )
}

export default Resume
const MainContainer = styled.div`
width:45%;
padding:40px 90px;
height:1080px;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-bottom:20px;
`
const StyledResumeContainer = styled.div`

`



const FlexedDiv2 = styled.div`
display:flex;
margin-top:15px;
gap:15px
`






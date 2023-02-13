import styled from 'styled-components';
import EmailIcon from '../../assets/email-icon.png'
import MobileIcon from '../../assets/mobile-icon.png'
import RedberryRedIcon from '../../assets/redberry-red-logo.png'
import { useGlobalContext } from '../../Context'
import CloseModalIcon from '../../assets/close-modal.png'
import { useState } from 'react';
import ArrowIcon from '../../assets/arrow.png'
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

const ResumePage = () => {
    const [closeModal, setCloseModal] = useState(true)
    const {finalResumeResponse} = useGlobalContext()
    
  return (
    <ResumeContainer>
        <ArrowImageContainer >
      <img src={ArrowIcon}/>
      </ArrowImageContainer>
        <MainContainer>
    <div>
            <Section>
            <FlexedDiv>
                <div>
                    <Name>{finalResumeResponse.name} {finalResumeResponse.surname}</Name>
                    {finalResumeResponse.email && 
                        <FlexedDiv2>
                            <img src={EmailIcon}/>
                            <p>{finalResumeResponse.email}</p>
                        </FlexedDiv2>
                    }

                    {finalResumeResponse.phone_number && 
                        <FlexedDiv2>
                            <img src={MobileIcon}/>
                            <p>{finalResumeResponse.phone_number}</p>
                        </FlexedDiv2>
                    }
                    {finalResumeResponse.about_me &&
                        <>
                        <SectionHeader>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</SectionHeader>
                        <InfoText>{finalResumeResponse.about_me}</InfoText>
                        </>  
                    }
                </div>
                    <StyledImage src={`https://resume.redberryinternship.ge${finalResumeResponse.image}`}/>
            </FlexedDiv>
            </Section>
        {finalResumeResponse.experiences.map((experience,index) => {

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
        {finalResumeResponse.educations.map((experience,index) => {

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
    </div>
        <RedberryRedLogo src={RedberryRedIcon}/>
    </MainContainer>
    {closeModal &&
    <Modal>
        რეზიუმე წარმატებით გაიგზავნა  🎉
        <CloseModal src={CloseModalIcon} onClick={() => setCloseModal(false)}/>
    </Modal>
    }
    
    </ResumeContainer>
  )
}

export default ResumePage

const ResumeContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
padding:30px;
`

const MainContainer = styled.div`
width:45%;
padding:40px 90px;
height:1080px;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-bottom:20px;
border:1px solid black;
position:absolute;
left:50%;
transform:translateX(-50%);
`




const FlexedDiv2 = styled.div`
    display:flex;
    margin-top:15px;
    gap:15px;
`

const Modal = styled.div`
width: 427px;
height: 167px;
padding: 28px 30px 30px;
gap: 10px;
display:flex;
align-items:center;
justify-content:center;
background: #FFFFFF;
border: 1px solid #E4E4E4;
box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
border-radius: 8px;
font-weight: 600;
font-size: 28px;
line-height: 43px;
position:relative;
`

const CloseModal = styled.img`
position: absolute;
top:0%;
right:5%;
`

const ArrowImageContainer = styled.div`

width: 40px;
height: 40px;
background: #FFFFFF;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center
`

import styled from 'styled-components';
import EmailIcon from '../../assets/email-icon.png'
import MobileIcon from '../../assets/mobile-icon.png'
import AvatarImage from '../../assets/avatar-image.jpg'
import RedberryRedIcon from '../../assets/redberry-red-logo.png'
import { useGlobalContext } from '../../Context';
import { useEffect, useState } from 'react';


const Resume = () => {
    const {info} = useGlobalContext()

  return (
    <MainContainer>
    <StyledResumeContainer>
        <Section>
        <FlexedDiv>
            <div>
                <Name>{info.name}</Name>
                <FlexedDiv>
                    <img src={EmailIcon}/>
                    <p>anzorr666@redberry.ge</p>
                </FlexedDiv>
                <FlexedDiv>
                    <img src={MobileIcon}/>
                    <p>+995 597 63 45 16</p>
                </FlexedDiv>
                <SectionHeader>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</SectionHeader>
                <InfoText>
                    ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ 
                    ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ. 
                </InfoText>
            </div>
                <StyledImage src={info.image}/>
        </FlexedDiv>
        </Section>
        <Section>
            <SectionHeader>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</SectionHeader>
            <Skills>React Native Developer, </Skills>
            <DateText>2020-09-23 - 2020-09-23</DateText>
            <InfoText>
                Experienced Javascript Native Developer with 5 years in the industry. 
                proficient withreact. Used problem-solving aptitude to encahge application 
                performance by 14%.created data visualisation tools and integrated designs. 
            </InfoText>
        </Section>
        <Section>
            <SectionHeader>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</SectionHeader>
            <Skills>წმ. ანდრიას საპატრიარქოს სასწავლებელი, </Skills>
            <DateText>2020-09-23</DateText>
            <InfoText>
                ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. 
                კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. 
                მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო. 
                აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
            </InfoText>
        </Section>
        
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
`
const StyledResumeContainer = styled.div`

`

const Section = styled.div`
border-bottom: 1px solid #C8C8C8;
`

const FlexedDiv= styled.div`
display:flex;
margin-top:15px;
gap:15px;
`
const Name = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 42px;
color: #F93B1D;
margin-bottom:20px;
`

const SectionHeader = styled.p`
margin-top:30px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #F93B1D;
margin-bottom:15px;
`

const InfoText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-transform: lowercase;
color: #000000;
margin-top:15px;
margin-bottom:20px;
`
const StyledImage = styled.img`
width: 246px;
height: 246px;
aspect-ratio:1/1;
border-radius:50%;
`

const Skills = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #1A1A1A;
`

const DateText = styled.p`

font-style: italic;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #919191;
margin-top:15px;
`

const RedberryRedLogo = styled.img`
width: 42px;
height: 42px;
`




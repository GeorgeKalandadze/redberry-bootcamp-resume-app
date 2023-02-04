import React, { useState } from 'react'
import { Button } from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { ExperienceContainer, FlexedDiv, ExperiencForm,ButtonsContainer } from './ExperiencePage.style'

const ExperiencePage = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

  return (
    <FlexedDiv>
        <ExperiencForm>
        <Header headerName='ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ'/>
        <ExperienceContainer>
            
            <InputGroup
                label='თანამდებობა'
                placeHolder='დეველოპერი, დიზაინერი, ა.შ.'
                hint='მინიმუმ 2 სიმბოლო'
                inputType='text'
            />
             <InputGroup
                label='დამსაქმებელი'
                placeHolder='დამსაქმებელი'
                hint='მინიმუმ 2 სიმბოლო'
                inputType='text'
            />
            <FlexedDiv >
                <InputGroup 
                    width='370px' 
                    label='დაწყების რიცხვი' 
                    inputType='date'
                />
                <InputGroup 
                    width='370px'
                    label='დამთავრების რიცხვი' 
                    inputType='date'
                />
            </FlexedDiv>
            <TextareaGroup
                label='აღწერა'
                placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
            />
        </ExperienceContainer>
        {[...Array(count)].map((_,i) => (
            <ExperienceContainer key={i}>
                <InputGroup
                    label='თანამდებობა'
                    placeHolder='დეველოპერი, დიზაინერი, ა.შ.'
                    hint='მინიმუმ 2 სიმბოლო'
                    inputType='text'
                />
                 <InputGroup
                    label='დამსაქმებელი'
                    placeHolder='დამსაქმებელი'
                    hint='მინიმუმ 2 სიმბოლო'
                    inputType='text'
                />
                <FlexedDiv >
                    <InputGroup 
                        width='370px' 
                        label='დაწყების რიცხვი' 
                        inputType='date'
                    />
                    <InputGroup 
                        width='370px'
                        label='დამთავრების რიცხვი' 
                        inputType='date'
                    />
                </FlexedDiv>
                <TextareaGroup
                    label='აღწერა'
                    placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                />
            </ExperienceContainer>
        ))}
        <Button bgColor='#62A1EB' onClick={handleClick}>მეტი გამოცდილების დამატება</Button>
        <ButtonsContainer>
            <Button bgColor='#6B40E3;' pdng='10px 35px'>უკან</Button>
            <Button bgColor='#6B40E3;' pdng='10px 35px'>შემდეგი</Button>
        </ButtonsContainer>
        </ExperiencForm>
        <Resume/>
    </FlexedDiv>
  )
}

export default ExperiencePage
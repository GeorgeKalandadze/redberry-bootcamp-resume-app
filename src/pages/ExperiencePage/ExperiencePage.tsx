import React, { useState } from 'react'
import { Button } from '../../components/Button/Button'
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { FlexedDiv, ExperiencePageContainer ,ButtonsContainer } from './ExperiencePage.style'

const ExperiencePage = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

  return (
    <FlexedDiv>
        <ExperiencePageContainer >
        <Header headerName='ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ' pageNumber={2}/>
        <ExperienceForm/>
        {[...Array(count)].map((_,i) => (
            <ExperienceForm key={i}/>
        ))}
        <Button bgColor='#62A1EB' onClick={handleClick}>მეტი გამოცდილების დამატება</Button>
        <ButtonsContainer>
            <Button bgColor='#6B40E3;' pdng='10px 35px'>უკან</Button>
            <Button bgColor='#6B40E3;' pdng='10px 35px'>შემდეგი</Button>
        </ButtonsContainer>
        </ExperiencePageContainer >
        <Resume/>
    </FlexedDiv>
  )
}

export default ExperiencePage
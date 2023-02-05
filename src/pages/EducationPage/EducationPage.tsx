import React, { useState } from 'react'
import { Button } from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { ButtonsContainer, EducationContainer, EducationForm, FlexedDiv, StyldeDropdownContainer, StyledDropdown, StyledLabel, StyledOptions } from './EducationPage.style'

const EducationPage = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

  return (
    <FlexedDiv>
        <EducationForm>
            <Header headerName='განათლება' pageNumber={3}/>
            <EducationContainer>
                <InputGroup
                    label='სასწავლებელი'
                    placeHolder='სასწავლებელი'
                    hint='მინიმუმ 2 სიმბოლო'
                    inputType='text'
                />
                <FlexedDiv>
                <StyldeDropdownContainer>
                        <StyledLabel>ხარისხი</StyledLabel>
                        <StyledDropdown >
                            <StyledOptions defaultValue={""} disabled selected hidden>აირჩიეთ ხარისხი</StyledOptions>
                            <StyledOptions value="1">აირჩიეთ rame</StyledOptions>
                            <StyledOptions value="2">აირჩიეთ some</StyledOptions>
                        </StyledDropdown>
                    </StyldeDropdownContainer>
                    <InputGroup
                        label='დამთავრების რიცხვი'
                        inputType='date'
                        width='370px'
                    />
                </FlexedDiv>
                <TextareaGroup
                    label='აღწერა'
                    placeholder='განათლების აღწერა'
                />
            </EducationContainer>
            {[...Array(count)].map((_,i) => (
                <EducationContainer key={i}>
                    <InputGroup
                        label='სასწავლებელი'
                        placeHolder='სასწავლებელი'
                        hint='მინიმუმ 2 სიმბოლო'
                        inputType='text'
                    />
                    <FlexedDiv>
                    <StyldeDropdownContainer>
                            <StyledLabel>ხარისხი</StyledLabel>
                            <StyledDropdown >
                                <StyledOptions defaultValue={""} disabled selected hidden>აირჩიეთ ხარისხი</StyledOptions>
                                <StyledOptions value="1">აირჩიეთ rame</StyledOptions>
                                <StyledOptions value="2">აირჩიეთ some</StyledOptions>
                            </StyledDropdown>
                        </StyldeDropdownContainer>
                        <InputGroup
                            label='დამთავრების რიცხვი'
                            inputType='date'
                            width='370px'
                        />
                    </FlexedDiv>
                    <TextareaGroup
                        label='აღწერა'
                        placeholder='განათლების აღწერა'
                    />
                </EducationContainer>
            ))}
             <Button bgColor='#62A1EB' onClick={handleClick}>მეტი განათლების დამატება</Button>
            <ButtonsContainer>
                <Button bgColor='#6B40E3;' pdng='10px 35px'>უკან</Button>
                <Button bgColor='#6B40E3;' pdng='10px 35px'>შემდეგი</Button>
            </ButtonsContainer>
        </EducationForm>
        <Resume/>
    </FlexedDiv>
  )
}

export default EducationPage
import React from 'react'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import { EducationContainer, EducationForm, FlexedDiv } from './EducationPage.style'

const EducationPage = () => {
  return (
    <FlexedDiv>
        <EducationForm>
            <Header headerName='განათლება'/>
            <EducationContainer>
                <InputGroup
                    label='სასწავლებელი'
                    placeHolder='სასწავლებელი'
                    hint='მინიმუმ 2 სიმბოლო'
                    inputType='text'
                />
            </EducationContainer>
        </EducationForm>
        <Resume/>
    </FlexedDiv>
  )
}

export default EducationPage
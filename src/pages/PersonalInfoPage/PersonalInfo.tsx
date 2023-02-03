import React from 'react'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import { PersonalInfoContainer } from './PersonalInfo.style'

const PersonalInfo = () => {
  return (
    <PersonalInfoContainer>
        <Header
            headerName='ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ'
        />
        <InputGroup/>
    </PersonalInfoContainer>
  )
}

export default PersonalInfo
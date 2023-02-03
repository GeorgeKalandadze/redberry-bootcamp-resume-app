import React, { useRef } from 'react'
import { Button } from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { 
    PersonalInfoContainer,
    FlexedDiv,
    UploadImageContainer,
    UploadImageText,
    ButtonContainer
} from './PersonalInfo.style'

const PersonalInfo = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };
  return (
    <FlexedDiv>
    <PersonalInfoContainer>
        <Header
            headerName='ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ'
        />
        <FlexedDiv >
            <InputGroup 
                width='370px' 
                label='სახელი' 
                inputType='text'
                hint='მინიმუმ 2 ასო, ქართული ასოები' 
                placeHolder='ანზორ'
            />
            <InputGroup 
                width='370px'
                label='გვარი' 
                inputType='text'
                hint='მინიმუმ 2 ასო, ქართული ასოები' 
                placeHolder='მუმლაძე'
            />
        </FlexedDiv>
        <UploadImageContainer>
            <input type="file" ref={fileInputRef} hidden/>
            <UploadImageText>პირადი ფოტოს ატვირთვა</UploadImageText>
            <Button bgColor='#0E80BF;' onClick={handleClick} pdng='5px 10px'>ატვირთვა</Button>
        </UploadImageContainer>
        <TextareaGroup label='ჩემ შესახებ (არასავალდებულო)' placeholder="ზოგადი ინფო შენ შესახებ"/>
        <InputGroup
            label='ელ.ფოსტა' 
            inputType='email'
            hint='უნდა მთავრდებოდეს @redberry.ge-ით' 
            placeHolder='anzorr666@redberry.ge'
        />
        <InputGroup
            label='მობილურის ნომერი' 
            inputType='number'
            hint='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს' 
            placeHolder='+995 551 12 34 56'
        />
        <ButtonContainer>
            <Button bgColor='#6B40E3'>შემდეგი</Button>
        </ButtonContainer>
    </PersonalInfoContainer>
    <Resume/>
    </FlexedDiv>
  )
}

export default PersonalInfo
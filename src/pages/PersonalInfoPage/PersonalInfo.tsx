import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { useGlobalContext } from '../../Context'
import { 
    PersonalInfoContainer,
    FlexedDiv,
    ButtonContainer
} from './PersonalInfo.style'
import UploadImage from '../../components/UploadImage/UploadImage'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { personalInfoFormSchema } from '../../schema/FormSchema'
import { useNavigate } from 'react-router-dom'

const PersonalInfo = () => {
    const {info, handleChange} = useGlobalContext()

    const {handleSubmit,register,formState:{errors},setError} = useForm({
        resolver:yupResolver(personalInfoFormSchema)
    })
    
    const navigate = useNavigate()
    const onSubmit = () => {
        if(info.image){
            navigate('/experience-page')
        } 
    }

    console.log(errors)
  return (
    <FlexedDiv>
    <PersonalInfoContainer onSubmit={handleSubmit(onSubmit)}>
        <Header
            headerName='ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ'
            pageNumber={1}
        />

         <h1 style={{color:errors.name && errors.name?"red": !errors.name?"green":"black"}}>text</h1>
        <FlexedDiv >
            <InputGroup 
                width='370px' 
                label='სახელი' 
                inputType='text'
                hint='მინიმუმ 2 ასო, ქართული ასოები' 
                placeHolder='ანზორ'
                name='name'
                register={register}
                error={errors.name}
                value={info.name}
                changeHandler={handleChange}
                
            />
            <InputGroup 
                width='370px'
                label='გვარი' 
                inputType='text'
                hint='მინიმუმ 2 ასო, ქართული ასოები' 
                placeHolder='მუმლაძე'
                name='surname'
                register={register}
                error={errors.surname}
                value={info.surname}
                changeHandler={handleChange}
                
            />
        </FlexedDiv>
        <UploadImage />
        <TextareaGroup 
            label='ჩემ შესახებ (არასავალდებულო)' 
            placeholder="ზოგადი ინფო შენ შესახებ" 
            
        />
        <InputGroup
            label='ელ.ფოსტა' 
            inputType='email'
            hint='უნდა მთავრდებოდეს @redberry.ge-ით' 
            placeHolder='anzorr666@redberry.ge'
            name='email'
            register={register}
            error={errors.email}
            value={info.email}
            changeHandler={handleChange}
            
        />
        <InputGroup
            label='მობილურის ნომერი' 
            inputType='tel'
            hint='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს' 
            placeHolder='+995 551 12 34 56'
            name="phone_number"
            register={register}
            error={errors.phone_number}
            value={info.phone_number}
            changeHandler={handleChange}
            
        />
        <ButtonContainer>
            <Button bgColor='#6B40E3' type='submit' >შემდეგი</Button>
        </ButtonContainer>
    </PersonalInfoContainer>
    <Resume />
    </FlexedDiv>
  )
}

export default PersonalInfo
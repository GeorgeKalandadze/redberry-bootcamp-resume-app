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
    const {info, handleChange,handleInputChange,statusHandler} = useGlobalContext()
    
    const {handleSubmit,register,formState:{errors}} = useForm({
        mode:"all",
        resolver:yupResolver(personalInfoFormSchema),
        
    })

    

  
    
    const navigate = useNavigate()
    const onSubmit = () => {
        
        if(info.image){
            navigate('/experience-page')
        }
         
    }
  return (
    <FlexedDiv>
    <PersonalInfoContainer onSubmit={handleSubmit(onSubmit)}>
        <Header
            headerName='ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ'
            pageNumber={1}
        />
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
                status={statusHandler(errors.name, info.name)}
            />
            <InputGroup 
                width='370px'
                label='გვარი' 
                inputType='text'
                hint='მინიმუმ 2 ასო, ქართული ასოები' 
                placeHolder='მუმლაძე'
                name='surname'
                register={register}
                error={errors.surname?.message}
                value={info.surname}
                changeHandler={handleChange}
                status={statusHandler(errors.surname, info.surname)}
                
                
            />
        </FlexedDiv>
        <UploadImage />
        <TextareaGroup 
            label='ჩემ შესახებ (არასავალდებულო)' 
            placeholder="ზოგადი ინფო შენ შესახებ"
            value={info.about_me}
            changeHandler={handleChange}
            name="about_me"
            // status={statusHandler(errors.about_me?.message, info.about_me)}
        />
        <InputGroup
            label='ელ.ფოსტა' 
            inputType='email'
            hint='უნდა მთავრდებოდეს @redberry.ge-ით' 
            placeHolder='anzorr666@redberry.ge'
            name='email'
            register={register}
            error={errors.email?.message}
            value={info.email}
            changeHandler={handleChange}
            status={statusHandler(errors.email , info.email)}
            
            
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
            status={statusHandler(errors.phone_number , info.phone_number)}
            
            
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
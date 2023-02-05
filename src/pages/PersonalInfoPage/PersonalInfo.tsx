import React, { useRef, useState } from 'react'
import { Button } from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { useGlobalContext } from '../../Context'
import AvatarImage from '../../assets/avatar-image.jpg'

import { 
    PersonalInfoContainer,
    FlexedDiv,
    UploadImageContainer,
    UploadImageText,
    ButtonContainer
} from './PersonalInfo.style'


const PersonalInfo = () => {
    const {info,handleSubmit,register,handleChange,errors} = useGlobalContext()

    //functions for file input that it works as button
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        fileInputRef.current?.click();
    };

    //image upload
    
    
    const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
        const image = event.target.files[0];
        console.log(image)
        info.image = image && URL.createObjectURL(image)
    }
    }
  return (
    <FlexedDiv>
    <PersonalInfoContainer onSubmit={handleSubmit(()=> console.log("yess"))}>
        <Header
            headerName='ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ'
            pageNumber={1}
        />
        <h1>{info.name}</h1>
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
        <UploadImageContainer >
            <input  ref={fileInputRef} hidden {...register("image")} type="file" onChange={() => handleAddImage} />
            <UploadImageText >პირადი ფოტოს ატვირთვა</UploadImageText>
            <Button type="button"bgColor='#0E80BF;' onClick={handleClick} pdng='5px 10px' >ატვირთვა</Button>
        </UploadImageContainer>
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
            <Button bgColor='#6B40E3' type='submit'>შემდეგი</Button>
        </ButtonContainer>
    </PersonalInfoContainer>
    <Resume/>
    </FlexedDiv>
  )
}

export default PersonalInfo
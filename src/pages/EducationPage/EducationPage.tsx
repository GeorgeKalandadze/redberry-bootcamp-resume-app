import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import SelectInput from '../../components/SelectInput/SelectInput';
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { educationFormSchema } from '../../schema/FormSchema'
import { ButtonsContainer, EducationContainer, EducationForm, FlexedDiv } from './EducationPage.style'



interface Education {
    university:string
    due_date:string
    quality:string
    description:string
}
const EducationPage = () => {
    const {handleSubmit,register,formState:{errors},setError} = useForm<{education:Education[]}>({
        resolver:yupResolver(educationFormSchema)
    })
    
   

    const [inputList, setinputList]= useState([{ university: "",
    due_date: "",
    description: "",
    quality:"",
    education:""
}]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { id, value } = event.target;
      const list = [...inputList];
      list[index] = { ...list[index], [id]: value };
      setinputList(list);
    };


    const handleaddclick = () => { 
      setinputList([...inputList, { university: "",
        due_date: "",
        description: "",
        quality:"",
        education:""}]);
    }

    console.log(errors)
    
  return (
    <FlexedDiv>
        <EducationForm onSubmit={handleSubmit(console.log)}>
            <Header headerName='განათლება' pageNumber={3}/>
            {
                inputList.map((x,i) => (
                    <EducationContainer>
                        <InputGroup
                            name={`education[${i}].university`}
                            register={register}
                            label='სასწავლებელი'
                            placeHolder='სასწავლებელი'
                            hint='მინიმუმ 2 სიმბოლო'
                            inputType='text'
                            changeHandler={ e=>handleInputChange(e,i)}
                            error={
                            errors.education?.[i]?.university
                            }
                            value={x.university}
                            id={"university"}
                        />
                        <FlexedDiv>
                            <SelectInput register={register} error={errors.education?.[i]?.quality} name={`education[${i}].quality`}/>
                            <InputGroup
                                name={`education[${i}].due_date`}
                                register={register}
                                label='დამთავრების რიცხვი'
                                inputType='date'
                                width='370px'
                                changeHandler={ e=>handleInputChange(e,i)}
                                error={
                                errors.education?.[i]?.due_date
                                }
                                value={x.due_date}
                                id={"due_date"}
                                
                            />
                        </FlexedDiv>
                        <TextareaGroup
                            label='აღწერა'
                            placeholder='განათლების აღწერა'
                            register={register}
                            name={`education[${i}].description`}
                            error={
                                errors.education?.[i]?.description
                            }
                            id={'description'}
                            value={x.description}
                            changeHandler={e=>handleInputChange(e,i)}
                        />
                    </EducationContainer>
                ))
            }
            
           
             <Button bgColor='#62A1EB' type='button' onClick={handleaddclick}>მეტი განათლების დამატება</Button>
            <ButtonsContainer>
                <Button bgColor='#6B40E3;' pdng='10px 35px'>უკან</Button>
                <Button bgColor='#6B40E3;' pdng='10px 35px' type='submit'>შემდეგი</Button>
            </ButtonsContainer>
        </EducationForm>
        <Resume/>
    </FlexedDiv>
  )
}

export default EducationPage
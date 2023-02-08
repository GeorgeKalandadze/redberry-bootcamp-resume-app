import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { useGlobalContext } from '../../Context'
import { ButtonsContainer, EducationContainer, EducationForm, FlexedDiv, StyldeDropdownContainer, StyledDropdown, StyledLabel, StyledOptions } from './EducationPage.style'

type QualityTypes = {
    title:string
    id:number
}
const EducationPage = () => {
    const {register,errors,handleSubmit} = useGlobalContext()
    const [quality, setQuality] = useState<QualityTypes[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://resume.redberryinternship.ge/api/degrees')
            const data = await response.json();
            
            setQuality(data)
        }
        fetchData()
    },[])

    const [inputList, setinputList]= useState([{ university: "",
    due_date: "",
    description: "",
    quality:""
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
        quality:""}]);
    }

    console.log(errors)
    
  return (
    <FlexedDiv>
        <EducationForm onSubmit={handleSubmit()}>
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
                            <StyldeDropdownContainer>
                                <StyledLabel>ხარისხი</StyledLabel>
                                <StyledDropdown name='quality' {...register("quality")} error={errors.education?.[i]?.quality}>
                                    <StyledOptions defaultValue={""} disabled selected hidden>აირჩიეთ ხარისხი</StyledOptions>
                                    {
                                        quality.map((item) => (
                                            <option key={item.id} value={item.title}>{item.title}</option>
                                        ))
                                    }
                                </StyledDropdown>
                            </StyldeDropdownContainer>
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
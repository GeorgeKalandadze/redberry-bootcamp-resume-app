import { Button } from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { FlexedDiv, ExperiencePageContainer ,ButtonsContainer } from './ExperiencePage.style'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context'
import {  useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { experienceFormSchema } from '../../schema/FormSchema'
import { Experiences } from '../../types/MostUsableTypes'


const ExperiencePage = () => {
  const {info,handleInputChange,handleAddClick,statusHandler} = useGlobalContext()

  const {handleSubmit,register,formState:{errors}} = useForm<{experiences:Experiences[]}>({
    resolver:yupResolver(experienceFormSchema)
})



    const navigate = useNavigate()
   
    const onSubmit = () => {
      navigate('/education-page')
    }

    console.log(errors)
  return (
    <FlexedDiv>
        <ExperiencePageContainer onSubmit={handleSubmit(onSubmit )}>
        <Header headerName='ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ' pageNumber={2}/>
        {info.experiences.map((x,i)=>{
          return(
            <ExperienceContainer key={i}>
            <InputGroup
                label='თანამდებობა'
                placeHolder='დეველოპერი, დიზაინერი, ა.შ.'
                hint='მინიმუმ 2 სიმბოლო'
                name={`experiences[${i}].position`}
                inputType='text'
                register={register}
                changeHandler={ e=>handleInputChange(e,i,'experience')}
                error={
                  errors.experiences?.[i]?.position
                }
                id="position"
                value={x.position}
                status={statusHandler(errors.experiences?.[i]?.position, x.position)}
                
            />
             <InputGroup
                label='დამსაქმებელი'
                placeHolder='დამსაქმებელი'
                name={`experiences.${i}.employer`}
                
                hint='მინიმუმ 2 სიმბოლო'
                inputType='text'
                register={register}
                changeHandler={ e=>handleInputChange(e,i,'experience')}
                error={
                  errors.experiences?.[i]?.employer
                }
                
                id="employer"
                value={x.employer}
                status={statusHandler(errors.experiences?.[i]?.employer, x.employer)}
            />
            <FlexedDiv >
                <InputGroup 
                    width='370px' 
                    label='დაწყების რიცხვი' 
                    name={`experiences.${i}.start_date`}
                    
                    inputType='date'
                    register={register}
                    changeHandler={ e=>handleInputChange(e,i,'experience')}
                    error={
                      errors.experiences?.[i]?.start_date
                    }
                    value={x.start_date}
                    id="start_date"
                    status={statusHandler(errors.experiences?.[i]?.start_date, x.start_date)}
                    
                />
                <InputGroup 
                    width='370px'
                    label='დამთავრების რიცხვი' 
                    name={`experiences.${i}.due_date`}
                    
                    inputType='date'
                    register={register}
                    changeHandler={ e=>handleInputChange(e,i,'experience')}
                    error={
                      errors.experiences?.[i]?.due_date
                    }
                    value={x.due_date}
                    
                    id={"due_date"}
                    status={statusHandler(errors.experiences?.[i]?.due_date, x.due_date)}
                />
            </FlexedDiv>
            <TextareaGroup
                label='აღწერა'
                register={register}
                id={"description"}
                RegisterName={`experiences.${i}.description`}
                placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                error={errors.experiences?.[i]?.description}
                value={x.description}
                changeHandler={e=>handleInputChange(e,i,'experience')}
                status={statusHandler(errors.experiences?.[i]?.description, x.description)}
                
            />
        </ExperienceContainer>
          )
        }    
        )

        }
     
        <Button bgColor='#62A1EB' onClick={ ()=> handleAddClick('experience')} type='button'>მეტი გამოცდილების დამატება</Button>
        <ButtonsContainer>
            <Button bgColor='#6B40E3;' pdng='10px 35px'>უკან</Button>
            <Button bgColor='#6B40E3;' pdng='10px 35px' type='submit'>შემდეგი</Button>
        </ButtonsContainer>
        </ExperiencePageContainer >
        <Resume />
    </FlexedDiv>
  )
}

export default ExperiencePage

const ExperienceContainer = styled.div`
display:flex;
flex-direction:column;
margin-bottom:30px;
border-bottom:1px solid #C1C1C1;
padding-bottom:50px;

`

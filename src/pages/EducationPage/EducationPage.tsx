import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import InputGroup from '../../components/InputGroup/InputGroup';
import Resume from '../../components/Resume/Resume';
import SelectInput from '../../components/SelectInput/SelectInput';
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup';
import { useGlobalContext } from '../../Context';
import { educationFormSchema } from '../../schema/FormSchema'
import { ButtonsContainer, FlexedDiv } from '../../styles/Form.styles';
import { Educations } from '../../types/MostUsableTypes';
import {  EducationContainer, EducationForm } from './EducationPage.style';




const EducationPage = () => {
    const {handleSubmit,register,formState:{errors}} = useForm<{education:Educations[]}>({
        resolver:yupResolver(educationFormSchema)
    })
    const {info,handleInputChange,handleAddClick,statusHandler,sendData} = useGlobalContext()

    const navigate = useNavigate()
    const onSubmit = () => {
        
        sendData()
        navigate('/resume-page')
    }

    console.log(errors)
   


  return (
    <FlexedDiv>
        <EducationForm onSubmit={handleSubmit(onSubmit)}>
            <Header headerName='განათლება' pageNumber={3}/>
            {
                info.educations.map((x,i) => (
                    <EducationContainer key={i}>
                        <InputGroup
                            name={`education[${i}].institute`}
                            register={register}
                            label='სასწავლებელი'
                            placeHolder='სასწავლებელი'
                            hint='მინიმუმ 2 სიმბოლო'
                            inputType='text'
                            changeHandler={ e=>handleInputChange(e,i,'education')}
                            
                            value={x.institute}
                            id={"institute"}
                            status={statusHandler(errors.education?.[i]?.institute, x.institute)}
                        />
                        <FlexedDiv>
                            <SelectInput 
                                name={`education[${i}].degree_id`}
                                register={register} 
                                changeHandler={ e=>handleInputChange(e,i,'education')}
                                value={x.degree_id}
                                id={'degree_id'}
                                status={statusHandler(errors.education?.[i]?.degree_id, x.degree_id)}
                            />
                           
                            <InputGroup
                                name={`education[${i}].due_date`}
                                register={register}
                                label='დამთავრების რიცხვი'
                                inputType='date'
                                width='370px'
                                changeHandler={ e=>handleInputChange(e,i,'education')}
                                value={x.due_date}
                                id={"due_date"}
                                status={statusHandler(errors.education?.[i]?.due_date, x.due_date)}
                                
                            />
                        </FlexedDiv>
                        <TextareaGroup
                            label='აღწერა'
                            placeholder='განათლების აღწერა'
                            register={register}
                            RegisterName={`education[${i}].description`}
                            id={'description'}
                            value={x.description}
                            changeHandler={e=>handleInputChange(e,i,'education')}
                            status={statusHandler(errors.education?.[i]?.description, x.description)}
                        />
                    </EducationContainer>
                ))
            }
             <Button bgColor='#62A1EB' type='button' onClick={() => handleAddClick('education')}>მეტი განათლების დამატება</Button>
            <ButtonsContainer>
                <Button bgColor='#6B40E3;' pdng='10px 35px' onClick={() => navigate(-1)}>უკან</Button>
                <Button bgColor='#6B40E3;' pdng='10px 35px' type='submit'>შემდეგი</Button>
            </ButtonsContainer>
        </EducationForm>
        <Resume/>
    </FlexedDiv>
  )
}

export default EducationPage
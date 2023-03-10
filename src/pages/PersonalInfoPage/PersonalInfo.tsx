import { Button } from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InputGroup from '../../components/InputGroup/InputGroup'
import Resume from '../../components/Resume/Resume'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import { useGlobalContext } from '../../context/Context'
import UploadImage from '../../components/UploadImage/UploadImage'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { personalInfoFormSchema } from '../../schema/FormSchema'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer, FlexedDiv, FormContainer } from '../../styles/Form.styles'

const PersonalInfo = () => {
    const {info, handleChange,statusHandler} = useGlobalContext()
    
    const {handleSubmit,register,formState:{errors}} = useForm({
        mode:"onChange",
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
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
            status={statusHandler(undefined, info.about_me)}
        />
        <InputGroup
            label='ელ.ფოსტა' 
            inputType='email'
            hint='უნდა მთავრდებოდეს @redberry.ge-ით' 
            placeHolder='anzorr666@redberry.ge'
            name='email'
            register={register}
            
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
            value={info.phone_number}
            changeHandler={handleChange}
            status={statusHandler(errors.phone_number , info.phone_number)}
        />
        <ButtonContainer>
            <Button bgColor='#6B40E3' type='submit' >შემდეგი</Button>
        </ButtonContainer>
    </FormContainer>
    <Resume />
    </FlexedDiv>
  )
}

export default PersonalInfo
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
import { Educations } from '../../types/MostUsableTypes';
import { ButtonsContainer, EducationContainer, EducationForm, FlexedDiv } from './EducationPage.style';
import axios from 'axios';



const EducationPage = () => {
    const {handleSubmit,register,formState:{errors}} = useForm<{education:Educations[]}>({
        
        resolver:yupResolver(educationFormSchema)
    })

    const {info,handleInputChange,handleAddClick,statusHandler} = useGlobalContext()

    const navigate = useNavigate()
    const ChemiKargicMovtkan = (edu:any) => {
        if(edu === "საშუალო სკოლის დიპლომი"){
            return 1
        }
        if(edu === "ზოგადსაგანმანათლებლო დიპლომი"){
            return 2
        }
        if(edu === "ბაკალავრი"){
            return 3
        }
        if(edu === "მაგისტრი"){
            return 4
        }
        if(edu === "დოქტორი"){
            return 5
        }
        if(edu === "ასოცირებული ხარისხი"){
            return 6
        }
        if(edu === "სტუდენტი"){
            return 7
        }
        if(edu === "კოლეჯი(ხარისიხს გარეშე)"){
            return 8
        }
        if(edu === "სხვა"){
            return 9
        }
    }
    const onSubmit = () => {
        const newStory = {
            ...info, educations:info.educations.map((edu) => {
                return {...edu, degree_id:ChemiKargicMovtkan(edu.degree_id)}
            })
        }

        const formData = new FormData();

        formData.append("name", newStory.name);
        formData.append("surname", newStory.surname);
        formData.append("email", newStory.email);
        formData.append("phone_number", newStory.phone_number);
        
        newStory.experiences.forEach((experience, index) => {
            formData.append(`experiences[${index}][position]`, experience.position);
            formData.append(`experiences[${index}][employer]`, experience.employer);
            formData.append(`experiences[${index}][start_date]`, experience.start_date);
            formData.append(`experiences[${index}][due_date]`, experience.due_date);
            formData.append(`experiences[${index}][description]`, experience.description);
          });
          
          newStory.educations.forEach((education, index) => {
            formData.append(`educations[${index}][institute]`, education.institute);
            formData.append(`educations[${index}][due_date]`, education.due_date);
            formData.append(`educations[${index}][description]`, education.description);
            formData.append(`educations[${index}][degree_id]`, education.degree_id);
          });
        
        fetch(newStory.image)
          .then((response) => response.blob())
          .then((blob) => {
            formData.append("image", blob, "image.png");
            axios({
              method: "POST",
              url: "https://resume.redberryinternship.ge/api/cvs",
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            })
              .then(function (response) {
               
                console.log(response)
              })
              .catch(function (response) {
                console.log(response);
              });
          });
        formData.append("about_me", newStory.about_me);


        navigate('/resume-page')

    }


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
                            error={
                            errors.education?.[i]?.institute
                            }
                            value={x.institute}
                            id={"institute"}
                            status={statusHandler(errors.education?.[i]?.institute, x.institute)}
                        />
                        <FlexedDiv>
                            <SelectInput 
                                name={`education[${i}].degree_id`}
                                register={register} 
                                error={errors.education?.[i]?.degree_id} 
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
                                error={
                                errors.education?.[i]?.due_date
                                }
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
                            error={
                                errors.education?.[i]?.description
                            }
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
                <Button bgColor='#6B40E3;' pdng='10px 35px'>უკან</Button>
                <Button bgColor='#6B40E3;' pdng='10px 35px' type='submit'>შემდეგი</Button>
            </ButtonsContainer>
        </EducationForm>
        <Resume/>
    </FlexedDiv>
  )
}

export default EducationPage
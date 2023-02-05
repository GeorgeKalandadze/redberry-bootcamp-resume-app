import InputGroup from '../../components/InputGroup/InputGroup'
import TextareaGroup from '../../components/TextareaGroup/TextareaGroup'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context'

const ExperienceForm = () => {
    const {info,handleSubmit,register,handleChange,errors} = useGlobalContext()
    const ExperienceInfo = info.experiences;

    console.log(ExperienceInfo)
  return (
    <div>
        <ExperienceContainer>
            <InputGroup
                label='თანამდებობა'
                placeHolder='დეველოპერი, დიზაინერი, ა.შ.'
                hint='მინიმუმ 2 სიმბოლო'
                inputType='text'
                register={register}
                name={"position"}
            />
             <InputGroup
                label='დამსაქმებელი'
                placeHolder='დამსაქმებელი'
                hint='მინიმუმ 2 სიმბოლო'
                inputType='text'
                register={register}
                name={"employer"}
            />
            <FlexedDiv >
                <InputGroup 
                    width='370px' 
                    label='დაწყების რიცხვი' 
                    inputType='date'
                    register={register}
                    name="start_date"
                />
                <InputGroup 
                    width='370px'
                    label='დამთავრების რიცხვი' 
                    inputType='date'
                    register={register}
                    name="due_date"
                />
            </FlexedDiv>
            <TextareaGroup
                label='აღწერა'
                placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
            />
        </ExperienceContainer>
    </div>
  )
}

export default ExperienceForm

const ExperienceContainer = styled.div`
display:flex;
flex-direction:column;
margin-bottom:30px;
border-bottom:1px solid #C1C1C1;
padding-bottom:50px;

`
const FlexedDiv = styled.div`
display:flex;
justify-content:space-between;
`
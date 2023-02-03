import styled from "styled-components"

type TextareaPropTypes = {
    label:string
    placeholder:string
}
const TextareaGroup = ({label,placeholder}:TextareaPropTypes) => {
  return (
    <TextAreraContainer>
        <StyledLabel>{label}</StyledLabel>
        <StyledTextArea  rows={5} placeholder={placeholder}>

        </StyledTextArea>
    </TextAreraContainer>
  )
}

export default TextareaGroup

const TextAreraContainer = styled.div`
display:flex;
flex-direction:column;
gap:15px;
`

const StyledTextArea = styled.textarea`
background: #FFFFFF;
border: 1px solid #BCBCBC;
border-radius: 4px;
width:100%;
padding:10px 20px;
resize:none;

`

const StyledLabel = styled.label`
font-weight: 600;
font-size: 16px;
line-height: 21px;

`
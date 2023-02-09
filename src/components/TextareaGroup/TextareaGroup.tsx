import styled from "styled-components"

type TextareaPropTypes = {
    label:string
    placeholder:string
    register?:any
    name?:string
    id?:string
    error?:any
    value:string
    changeHandler?:(event: React.ChangeEvent<HTMLInputElement>) => void
}

type ErrorType = {
  error:any
}
const TextareaGroup = ({label,placeholder,register = {},name,id,error,value,changeHandler}:TextareaPropTypes) => {
  return (
    <TextAreraContainer>
        <StyledLabel>{label}</StyledLabel>
        <StyledTextArea name={name} id={id} rows={5} placeholder={placeholder} {...(name ? register( name ) : {})} error={error} value={value} onChange={changeHandler}>
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

const StyledTextArea = styled.textarea<ErrorType>`
background: #FFFFFF;
border: 1px solid #BCBCBC;
border-color:${prop => prop.error? "red" : "#BCBCBC"};
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
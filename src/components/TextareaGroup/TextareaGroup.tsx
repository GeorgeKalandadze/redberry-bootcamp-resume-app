import styled from "styled-components"

type TextareaPropTypes = {
    label:string
    placeholder:string
    register?:any
    RegisterName?:string
    id?:string
    value:string
    name?:string
    changeHandler?:(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void
    status: any
}


type ErrorType = {
  
  status: any
}
const TextareaGroup = ({label,placeholder,register = {},RegisterName,id,value,changeHandler,name,status}:TextareaPropTypes) => {
  const registerType = RegisterName ? register(RegisterName) : null;
  return (
    <TextAreraContainer>
        <StyledLabel>{label}</StyledLabel>
        <StyledTextArea 
          name={name}  
          id={id} 
          rows={5} 
          placeholder={placeholder}  
          
          {...(registerType || {})} 
          value={value} 
          onChange={e => {
            registerType ? registerType.onChange(e) : null;
            changeHandler ? changeHandler(e) : null;
          }}
          status={status}
          >
            
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
border: 1px solid ;
border-radius: 4px;
width:100%;
padding:10px 20px;
resize:none;
border-color: ${props => props.status === "error" ? "red": props.status === "validated"?"#98E37E":"#BCBCBC" };
`

const StyledLabel = styled.label`
font-weight: 600;
font-size: 16px;
line-height: 21px;
`
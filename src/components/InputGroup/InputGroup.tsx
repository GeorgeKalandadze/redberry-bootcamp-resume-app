import styled from 'styled-components';
import SuccessImage from '../../assets/success-icon.png'
import ErrorImage from '../../assets/error-icon.png'


type InputPropTypes = {
  width?:string
  label:string
  inputType:string
  hint?:string
  placeHolder?:string
  name?:string
  register?:any
  value?:string|number
  changeHandler?:((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
  id?:string
  status: any
  
}

type InputStylePropTypes = {
type?:string
value?:string|number
valid?:string
status: any
}



const InputGroup = ({width, label, placeHolder, inputType, hint, name, register,value,changeHandler,id,status}:InputPropTypes ) => { 
  
  const registerType = register(name)
  return (
    <StyledInputsContainer 
      type={inputType} 
      value={value} 
      status={status}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput 
          placeholder={placeHolder} 
          type={inputType} 
          width={width} 
          name={name} 
          {...registerType}
          value={value} 
          onChange={(e) => {registerType.onChange(e);if (changeHandler) {
            changeHandler(e);
          }}}
          
          id={id}
          status={status}
        />
        <StyledHint>{hint}</StyledHint>
          
           
          
    </StyledInputsContainer>
  )
}



export default InputGroup

const StyledInputsContainer = styled.div<InputStylePropTypes>`
margin-top:40px;
display:flex;
flex-direction:column;
gap:10px;
position:relative;
&::after{
  content: '';
   ;
   background-image:${props => props.type !== 'date' ? `url(${props.status === "error" ? ErrorImage : props.status === "validated" ? SuccessImage : ""})` : ""};
    background-size: 16px;
    background-repeat: no-repeat;
    position: absolute;
    right:${prop => prop.status === "error" ? "-0px":"-10px"} ;
    top: 40%;
    width: 30px;
    height: 30px;
}
`

const StyledLabel = styled.label`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 21px;
`

const StyledInput = styled.input<InputStylePropTypes>`
outline:"none";
width:${prop => prop.width || "100%"};
background: #FFFFFF;
border-radius: 4px;
padding:12px 15px;
font-weight: 400;
font-size: 16px;
line-height: 21px;
position:relative;
color: rgba(0, 0, 0, 0.6);
border:1px solid;
border-color: ${props => props.status === "error" ? "red": props.status === "validated"?"#98E37E":"#BCBCBC" };
`

const StyledHint = styled.p`
font-weight: 300;
font-size: 14px;
line-height: 21px;


`




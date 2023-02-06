import styled from 'styled-components';
import SuccessImage from '../../assets/success-icon.png'
import ErrorImage from '../../assets/error-icon.png'


type InputPropTypes = {
  width?:string
  label:string
  inputType:string
  hint?:string
  placeHolder?:string
  name:string
  register?:any
  error?:any
  value?:string|number
  changeHandler?:(event: React.ChangeEvent<HTMLInputElement>) => void
}

type InputStylePropTypes = {
error:boolean
type?:string
value?:string|number
}



const InputGroup = ({width, label, placeHolder, inputType, hint, name, register,error,value,changeHandler}:InputPropTypes ) => {
  return (
    <StyledInputsContainer error={error} type={inputType} value={value}>
        <StyledLabel error={error}>{label}</StyledLabel>
        <StyledInput 
          
          placeholder={placeHolder} 
          type={inputType} 
          width={width} 
          name={name} 
          {...register(name)}
          value={value} 
          onChange={changeHandler}
          error={error}

        />
        <StyledHint error={error}>{hint}</StyledHint>
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
   background-image:${props => props.type !== 'date' ? `url(${props.error ? ErrorImage : SuccessImage})` : ""};
    background-size: 16px;
    background-repeat: no-repeat;
    position: absolute;
    right:${prop => prop.error?"-40px":"0"} ;
    top: 40%;
    width: 30px;
    height: 30px;
}
`

const StyledLabel = styled.label<InputStylePropTypes>`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 21px;
color:${prop => prop.error ? "red" : "black"};
`

const StyledInput = styled.input<InputStylePropTypes>`
width:${prop => prop.width || "100%"};
background: #FFFFFF;
border: 1px solid #BCBCBC;
border-color:${prop => prop.error? "red" : "#BCBCBC"};
border-radius: 4px;
padding:12px 15px;
font-weight: 400;
font-size: 16px;
line-height: 21px;
position:relative;
color: rgba(0, 0, 0, 0.6);
`

const StyledHint = styled.p<InputStylePropTypes>`
font-weight: 300;
font-size: 14px;
line-height: 21px;
color:${prop => prop.error ? "red" : "#2E2E2E"};
`


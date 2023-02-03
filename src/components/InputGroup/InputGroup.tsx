import styled from 'styled-components';

type InputPropTypes = {
  width?:string
  label:string
  inputType:string
  hint:string
  placeHolder:string
}

const InputGroup = ({width, label, placeHolder, inputType, hint}:InputPropTypes ) => {
  return (
    <StyledInputsContainer>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput placeholder={placeHolder} type={inputType} width={width}/>
        <StyledHint>{hint}</StyledHint>
    </StyledInputsContainer>
  )
}

export default InputGroup

const StyledInputsContainer = styled.div`
margin-top:40px;
display:flex;
flex-direction:column;
gap:10px;
`

const StyledLabel = styled.label`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 21px; 
`

const StyledInput = styled.input`
width:${prop => prop.width || "100%"};
background: #FFFFFF;
border: 1px solid #BCBCBC;
border-radius: 4px;
padding:12px 15px;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: rgba(0, 0, 0, 0.6);

`

const StyledHint = styled.p`
font-weight: 300;
font-size: 14px;
line-height: 21px;
color: #2E2E2E;

`


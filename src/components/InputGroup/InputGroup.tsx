import styled from 'styled-components';

const InputGroup = () => {
  return (
    <StyledInputsContainer>
        <StyledLabel>სახელი</StyledLabel>
        <StyledInput placeholder='ანზორ' type="text"/>
        <StyledHint>მინიმუმ 2 ასო, ქართული ასოები</StyledHint>
    </StyledInputsContainer>
  )
}

export default InputGroup

const StyledInputsContainer = styled.div`
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
background: #FFFFFF;
border: 1px solid #BCBCBC;
border-radius: 4px;
padding:12px 15px;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: rgba(0, 0, 0, 0.6);
width:100%;
`

const StyledHint = styled.p`
font-weight: 300;
font-size: 14px;
line-height: 21px;
color: #2E2E2E;

`


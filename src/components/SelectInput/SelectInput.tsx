import styled from 'styled-components';
import { useGlobalContext } from '../../Context';


type SelectInputPropTypes= {
    register:any
    name:string
    changeHandler?:((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined
    value:string | undefined
    id:string | undefined
    status:any
}

type SelectInputStyle = {
    status: any
}



const SelectInput = ({register,name,changeHandler,value,id,status}:SelectInputPropTypes ) => {
    const {quality} = useGlobalContext()
    
      const registerType = register(name,{required:true})

    return (
        <StyldeDropdownContainer>
            <StyledLabel>ხარისხი</StyledLabel>
            <StyledDropdown  
                {...registerType}  
                status={status} 
                name={name} 
                
                onChange={(e) => {registerType.onChange(e);if (changeHandler) {
                    changeHandler(e);
                  }}} 
                id={id} 
                value={value}> 
                {
                    quality.map((item) => (
                        <>
                        <option value=""   disabled hidden>აირჩიეთ ხარისხი</option>
                        <StyledOptions key={item.id} value={item.title} >{item.title}</StyledOptions>
                        </>
                      
                    ))
                }
            </StyledDropdown>
        </StyldeDropdownContainer>
      )
    }

export default SelectInput

const StyledDropdown = styled.select<SelectInputStyle>`
width: 371px;
background: #FFFFFF;
border: 1px solid #BCBCBC;
border-color: ${props => props.status === "error" ? "red": props.status === "validated"?"#98E37E":"#BCBCBC" };
border-radius: 4px;
padding:12px 15px;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: rgba(0, 0, 0, 0.6);
`

const StyldeDropdownContainer = styled.div`
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


export const StyledOptions = styled.option`
    border:none;
    outline:none
`
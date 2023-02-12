import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context';

type QualityTypes = {
    title:string
    id:number
}

type SelectInputPropTypes= {
    error:any
    register:any
    name:string
    // changeHandler:(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number, type: 'experience' | 'education') => void
    changeHandler?:((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined
    value:string|number
    id:string | undefined
    status:any
}

type SelectInputStyle = {
    error:string
    status: any
}


const SelectInput = ({error,register,name,changeHandler,value,id,status}:SelectInputPropTypes ) => {
    const {quality} = useGlobalContext()
    // const [quality, setQuality] = useState<QualityTypes[]>([]);
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://resume.redberryinternship.ge/api/degrees')
    //         const data = await response.json();
    //         setQuality(data)
    //     }
    //     fetchData()
    // },[])

    // const handleSelectChange = (e) => {
    //     const selectedId = quality.find(item => item.title === e.target.value)?.id;
    //     console.log(selectedId)
    //     changeHandler(e, selectedId);
    //   }

    // const handleSelectChange = (e) => {
    //     const selectedId = quality.find(item => item.title === e.target.value)?.id;
    //     changeHandler(e, selectedId,'education');
    //   }
      const registerType = register(name)

    return (
        <StyldeDropdownContainer>
            <StyledLabel>ხარისხი</StyledLabel>
            <StyledDropdown  
                {...registerType}  
                status={status} 
                name={name} 
                error={error} 
                onChange={(e) => {registerType.onChange(e);if (changeHandler) {
                    changeHandler(e);
                  }}} 
                id={id} 
                value={value || "none"}> 
                {
                    quality.map((item) => (
                        <>
                        <option value="none" className="opt" selected disabled hidden>აირჩიეთ ხარისხი</option>
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
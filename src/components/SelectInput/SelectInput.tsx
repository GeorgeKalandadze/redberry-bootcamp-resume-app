import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

type QualityTypes = {
    title:string
    id:number
}

type SelectInputPropTypes= {
    error:any
    register:any
    name:string
    changeHandler:(event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>, index: number, type: 'experience' | 'education') => void
    value:string
    id:string
}

type SelectInputStyle = {
    error:string
}


const SelectInput = ({error,register,name,changeHandler,value,id}:SelectInputPropTypes ) => {
    const [quality, setQuality] = useState<QualityTypes[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://resume.redberryinternship.ge/api/degrees')
            const data = await response.json();
            setQuality(data)
        }
        fetchData()
    },[])

  return (
    <StyldeDropdownContainer>
        <StyledLabel>ხარისხი</StyledLabel>
        <StyledDropdown  {...register(name)}  name={name} error={error} onChange={changeHandler} id={id} value={value || ''}> 
            {
                quality.map((item) => (
                    <StyledOptions key={item.id} value={item.title}>{item.title}</StyledOptions>
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
border-color:${prop => prop.error? "red" : "#BCBCBC"};
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
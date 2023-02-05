import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context'
import { Button } from '../Button/Button'

type ErrorProps = {
    error:boolean
}

const UploadImage = () => {
    const [someImage, setSomeImage] = useState()
    const {info,register} = useGlobalContext()
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const image = event.target.files?.[0];
        if (image) {
          info.image = URL.createObjectURL(image);
        } 
    };


  return (
    <UploadImageContainer >
        <input  ref={fileInputRef} hidden   type="file"  name="image"  onChange={handleImageChange}/>
        <UploadImageText >პირადი ფოტოს ატვირთვა</UploadImageText>
        <Button type="button"bgColor='#0E80BF;' onClick={handleClick} pdng='5px 10px' >ატვირთვა</Button>
    </UploadImageContainer>
  )
}

export default UploadImage

export const UploadImageContainer = styled.div`
margin-top:50px;
display:flex;
align-items:center;
gap:30px;
position:relative;
margin-bottom:50px;
&::after{
  content: '';
   ;
   
    background-size: 16px;
    background-repeat: no-repeat;
    position: absolute;
    left: 42%;
    top: 40%;
    width: 30px;
    height: 30px;
}
`

export const UploadImageText = styled.p`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
`
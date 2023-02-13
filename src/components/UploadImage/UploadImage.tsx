
import styled from 'styled-components'
import { useGlobalContext } from '../../Context'
import { Button } from '../Button/Button'
import SuccessImage from '../../assets/success-icon.png'
import ErrorImage from '../../assets/error-icon.png'

type ErrorProps = {
    error:string
}



const UploadImage = () => {
  const {handleImageChange,info} = useGlobalContext()
  

  return (
    <UploadImageContainer error={info.image}>
      <UploadImageText >პირადი ფოტოს ატვირთვა</UploadImageText>
        <StyledUploadButtonContainer>
        <StyledUploadImage  type="file"   name="picture" onChange={handleImageChange}/>
        <Button type='button' bgColor='#0E80BF;'   pdng='5px 10px'>ატვირთვა</Button>
        </StyledUploadButtonContainer>
    </UploadImageContainer>
  )
}

export default UploadImage

export const UploadImageContainer = styled.div<ErrorProps >`
margin-top:50px;
display:flex;
align-items:center;
gap:30px;
position:relative;
margin-bottom:50px;
&::after{
  content: '';
   ;
    background-image:url(${prop =>  prop.error === "" ? ErrorImage : prop.error !=="" ? SuccessImage: null});
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

const StyledUploadButtonContainer = styled.div`
  position: relative;
  max-width: 50%;
  & input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
  }
  & button {
    max-width: 100%;
    font-size: smaller;
  }
`;

export const StyledUploadImage = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
`;
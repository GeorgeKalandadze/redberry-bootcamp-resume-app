import Resume from '../../components/Resume/Resume'
import styled from 'styled-components'

const ResumePage = () => {

  return (
    <ResumeContainer>
        <ResumeDiv>
        <Resume/>
        </ResumeDiv>
        
    </ResumeContainer>
  )
}

export default ResumePage

const ResumeContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
`

const ResumeDiv = styled.div`
display:flex;
justify-content:center;
width:100%;
`
import React, { useEffect } from 'react'
import Resume from '../../components/Resume/Resume'
import { useGlobalContext } from '../../Context'


const ResumePage = () => {
const {info} = useGlobalContext()

  useEffect(() => {
    fetch(`https://resume.redberryinternship.ge/api/cvs`, {
          method: 'POST', 
          
          headers: {
              accept: "multipart/form-data",
              'Content-Type': 'multipart/form-data'
          },
          body: JSON.stringify(info) 
          })
          .then(response => response.status === 201?console.log(response):null)
          .catch(error => console.error(error));
  },[])
  return (
    <div>
        <Resume/>
    </div>
  )
}

export default ResumePage
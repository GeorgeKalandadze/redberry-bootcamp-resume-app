import React, {  createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { useSessionStorage } from './hooks/useSessionStorage';
import { Educations, Experiences, ResumeObjectTypes } from './types/MostUsableTypes';
import axios from 'axios';

type ContextTypes = {
    handleChange:(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void
    info:ResumeObjectTypes
    handleImageChange:(event: React.ChangeEvent<HTMLInputElement>) => void
    handleAddClick:(type: 'experience' | 'education') => void
    handleInputChange:(event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>, index: number, type: 'experience' | 'education') => void
    resetInfo:() => void
    statusHandler: (error: FieldError | Partial<{ type: string | number; message: string; }> | Merge<FieldError, FieldErrorsImpl<any>> | undefined, input: any) => "error" | "validated" | "default"
    quality:QualityTypes[]
    sendData: () => void
    finalResumeResponse:ResumeObjectTypes
    resetLastSavedInfo:() => void
}


const AppContext = createContext({} as ContextTypes);

type ContextChildType = {
    children: ReactNode
}

const resumeInfo = {
  name:"",
    surname:"",
    email:"",
    phone_number:"",
    experiences: [{
        position:"",
        employer:"",
        start_date:"",
        due_date:"",
        description:"",
    }],
    educations:[{
        institute:"",
        due_date:"",
        description:"",
        degree_id:"",
    }],
    image:"",
    about_me:"",
}

type QualityTypes = {
  title:string
  id:number
}


export const AppProvider:FunctionComponent<ContextChildType> = ({children}) => {
const [info,setInfo] = useSessionStorage<ResumeObjectTypes>('resume-info',resumeInfo)
const [quality, setQuality] = useState<QualityTypes[]>([]);
const [finalResumeResponse, setFinalResumeResponse] = useSessionStorage('final-resume-info',{} as ResumeObjectTypes)


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://resume.redberryinternship.ge/api/degrees')
            const data = await response.json();
            setQuality(data)
        }
        fetchData()
    },[])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInfo((formData) => ({ ...formData, [name]: value }));
       
        
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const dataURL = reader.result as string;
            setInfo((prev) => ({ ...prev, image: dataURL }));
          };
        }
     
      };


      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>, index: number, type: 'experience' | 'education') => {
        const { id, value } = event.target;
        
        let experiences: Experiences[];
        let educations: Educations[];
        if (type === 'experience') {
          experiences = [...info.experiences];
          experiences[index] = { ...experiences[index], [id]: value };
          setInfo({ ...info, experiences });
        } else if (type === 'education') {
          educations = [...info.educations];
          educations[index] = { ...educations[index], [id]: value };
          setInfo({ ...info, educations });
        }
      };
  
        
        const handleAddClick = (type: 'experience' | 'education') => {
          if (type === 'experience') {
            setInfo({
              ...info,
              experiences: [...info.experiences,{position: '',employer: '',start_date: '',due_date: '',description: '',},],
            });
          } else if (type === 'education') {
            
            setInfo({
              ...info,
              educations: [...info.educations,{institute: '',due_date: '',description: '',degree_id:""},],
            });
          }
        };

       const resetInfo = () => {
          setInfo(resumeInfo) 
          sessionStorage.clear()
        }

        //change status of validation messages
        const statusHandler = (error: FieldError | Partial<{ type: string | number; message: string; }> | Merge<FieldError, FieldErrorsImpl<any>> | undefined, input: any) => {
          return error ? "error" : input ? "validated" : "default";
        };

        //send data 
        const degreeIdHandler = (edu:any) => {
          if(edu === "საშუალო სკოლის დიპლომი"){
              return 1
          }
          if(edu === "ზოგადსაგანმანათლებლო დიპლომი"){
              return 2
          }
          if(edu === "ბაკალავრი"){
              return 3
          }
          if(edu === "მაგისტრი"){
              return 4
          }
          if(edu === "დოქტორი"){
              return 5
          }
          if(edu === "ასოცირებული ხარისხი"){
              return 6
          }
          if(edu === "სტუდენტი"){
              return 7
          }
          if(edu === "კოლეჯი(ხარისიხს გარეშე)"){
              return 8
          }
          if(edu === "სხვა"){
              return 9
          }
      }


      const sendData = () => {
          const newResumeInfo = {
              ...info, educations:info.educations.map((edu) => {
                  return {...edu, degree_id:degreeIdHandler(edu.degree_id)}
              })
          }
          const formData = new FormData();
          formData.append("name", newResumeInfo.name);
          formData.append("surname", newResumeInfo.surname);
          formData.append("email", newResumeInfo.email);
          formData.append("phone_number", newResumeInfo.phone_number);
          
          newResumeInfo.experiences.forEach((experience, index) => {
              formData.append(`experiences[${index}][position]`, experience.position);
              formData.append(`experiences[${index}][employer]`, experience.employer);
              formData.append(`experiences[${index}][start_date]`, experience.start_date);
              formData.append(`experiences[${index}][due_date]`, experience.due_date);
              formData.append(`experiences[${index}][description]`, experience.description);
            });
            
            newResumeInfo.educations.forEach((education, index) => {
              formData.append(`educations[${index}][institute]`, education.institute);
              formData.append(`educations[${index}][due_date]`, education.due_date);
              formData.append(`educations[${index}][description]`, education.description);
              const degreeId = education.degree_id ? education.degree_id.toString() : "";
              formData.append(`educations[${index}][degree_id]`, degreeId);
            });
          
          fetch(newResumeInfo.image)
            .then((response) => response.blob())
            .then((blob) => {
              formData.append("image", blob, "image.png");
              axios({
                method: "POST",
                url: "https://resume.redberryinternship.ge/api/cvs",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
              })
                .then(function (response) {
                 
                  setFinalResumeResponse(response.data)
                })
                .catch(function (response) {
                  console.log(response);
                });
            });
          formData.append("about_me", newResumeInfo.about_me);
      }


      const resetLastSavedInfo = () => {
        setInfo(resumeInfo) 
        sessionStorage.clear()
        setFinalResumeResponse({} as ResumeObjectTypes)
      }



    
    return <AppContext.Provider value={{
        handleChange,
        info,
        handleImageChange,
        handleAddClick,
        handleInputChange,
        resetInfo,
        statusHandler,
        quality,
        sendData,
        finalResumeResponse,
        resetLastSavedInfo
        }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}



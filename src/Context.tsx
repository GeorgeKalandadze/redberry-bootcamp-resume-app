import React, {  createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { useSessionStorage } from './hooks/useSessionStorage';
import { Educations, Experiences, ResumeObjectTypes } from './types/MostUsableTypes';

type ContextTypes = {
    handleChange:(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void
    info:ResumeObjectTypes
    handleImageChange:(event: React.ChangeEvent<HTMLInputElement>) => void
    handleAddClick:(type: 'experience' | 'education') => void
    handleInputChange:(event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>, index: number, type: 'experience' | 'education') => void
    resetInfo:() => void
    statusHandler: (error: FieldError | Partial<{ type: string | number; message: string; }> | Merge<FieldError, FieldErrorsImpl<any>> | undefined, input: any) => "error" | "validated" | "default"
    quality:QualityTypes[]
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

        const statusHandler = (error: FieldError | Partial<{ type: string | number; message: string; }> | Merge<FieldError, FieldErrorsImpl<any>> | undefined, input: any) => {
          return error ? "error" : input ? "validated" : "default";
        };
    
    return <AppContext.Provider value={{
        handleChange,
        info,
        handleImageChange,
        handleAddClick,
        handleInputChange,
        resetInfo,
        statusHandler,
        quality
        }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}



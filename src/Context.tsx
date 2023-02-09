import React, { ContextType, createContext, FunctionComponent, ReactNode, useContext, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { useSessionStorage } from './hooks/useSessionStorage';

type ContextTypes = {
    handleChange:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    info:ResumeObjectTypes
    handleImageChange:(event: React.ChangeEvent<HTMLInputElement>) => void
    statusChanger:(error: FieldError | undefined, inputName: keyof ResumeObjectTypes) => "error" | "validated" | "default"
    handleAddClick:(type: 'experience' | 'education') => void
    handleInputChange:(event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>, index: number, type: 'experience' | 'education') => void
}


const AppContext = createContext({} as ContextTypes);

type ContextChildType = {
    children: ReactNode
}

//resume object types
interface ResumeObjectTypes {
    name:string
    surname:string
    email:string
    phone_number:string
    experiences: Experiences[]
    educations:Educations[]
    image:string;
    about_me:string;
}


type Experiences = {
    position:string
    employer:string
    start_date:string
    due_date:string
    description:string
}

type Educations = {
    university:string
    degree:string
    due_date:string
    description:string
}



export const AppProvider:FunctionComponent<ContextChildType> = ({children}) => {
const [info,setInfo] = useSessionStorage<ResumeObjectTypes>('resume-info',{
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
        university:"",
        degree:"",
        due_date:"",
        description:"",
    }],
    image:"",
    about_me:"",
})



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

      const statusChanger = (
        error: FieldError | undefined,
        inputName: keyof typeof info
      ) => {
        return error ? "error" : info[inputName] ? "validated" : "default";
      };


      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>, index: number, type: 'experience' | 'education') => {
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
              experiences: [...info.experiences,{position: '',employer: '',start_date: '',due_date: '',description: '',},      ],
            });
          } else if (type === 'education') {
            setInfo({
              ...info,
              educations: [...info.educations,{university: '',degree: '',due_date: '',description: '',},],
            });
          }
        };

    
    
    return <AppContext.Provider value={{handleChange,info,handleImageChange,statusChanger,handleAddClick,handleInputChange}}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}



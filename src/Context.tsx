import React, { ContextType, createContext, FunctionComponent, ReactNode, useContext, useState } from 'react';
import { useSessionStorage } from './hooks/useSessionStorage';

type ContextTypes = {
    handleChange:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    info:ResumeObjectTypes
    handleImageChange:(event: React.ChangeEvent<HTMLInputElement>) => void
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
    experiences: {
        position:string
        employer:string
        start_date:string
        due_date:string
        description:string
    }[]
    educations:{
        institute:string
        degree:string
        due_date:string
        description:string
    }[]
    image:string;
    about_me:string;
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
        institute:"",
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

    
    
    return <AppContext.Provider value={{handleChange,info,handleImageChange}}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}



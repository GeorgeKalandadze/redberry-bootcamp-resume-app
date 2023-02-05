import React, { ContextType, createContext, FunctionComponent, ReactNode, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema/FormSchema';

type ContextTypes = {
    handleSubmit:any
    register:any
    errors:any
    handleChange:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    info:ResumeObjectTypes
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

const [info,setInfo] = useState<ResumeObjectTypes>({
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

  
    const {handleSubmit,register,formState:{errors}} = useForm({
        resolver:yupResolver(formSchema)
      })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInfo((formData) => ({ ...formData, [name]: value }));
    };

    
    return <AppContext.Provider value={{handleSubmit,register,errors,handleChange,info}}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}



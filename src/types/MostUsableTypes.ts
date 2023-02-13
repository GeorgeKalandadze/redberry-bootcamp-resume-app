

export type ResumeObjectTypes = {
    name:string
    surname:string
    email:string
    phone_number:string
    experiences: Experiences[]
    educations:Educations[]
    image:string;
    about_me:string;
}


export type Experiences = {
    position:string
    employer:string
    start_date:string
    due_date:string
    description:string
}

export type Educations = {
    institute:string
    degree_id?:string|undefined
    due_date:string
    description:string
    degree?:string
}
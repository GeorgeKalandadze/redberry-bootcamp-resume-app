import * as yup from 'yup';


export const formSchema = yup.object().shape({
    name:yup
    .string()
    .min(2)
    .required()
    .matches(/^[ა-ჰ]+$/g),

    surname:yup
    .string()
    .min(2)
    .required()
    .matches(/^[ა-ჰ]+$/g),

    email:yup
    .string()
    .required()
    .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge\s*$/),

    
    phone_number:yup
    .string()
    .matches(/^(\+?995)?(79\d{7}|5\d{8})$/)
    .required(),

    

    experiences: yup.array().of(yup.object().shape({
      position:yup
      .string()
      .min(2)
      .required(),

      employer:yup
      .string()
      .min(2)
      .required(),
  
  
      start_date:yup
      .date()
      .required(),
  
      due_date:yup
      .date()
      .required(),
    })),


   


    picture: yup.mixed()
    .test('required', (value) =>{
      return value && value.length
    })
    

})
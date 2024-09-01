// import { Password, RollerShades } from '@mui/icons-material';
import  { useState } from 'react'

export function useFormState() {
    const [therapistFormData, settherapistFormData] = useState({
       firstname: '',
       lastname: '',
       middlename: '',
       email: '',
        phone: '',
        password: '',
        mailingAddress: '',
        previousExperience: '',
        documents: [],
        additionalComments: '',
        role:'therapist',
        termsAgreement: false,
    })
    const [patientFormData, setPatientFormData] = useState({
        
        firstname: '',
        lastname: '',
        middlename: '',
        password: '',
        email: '',
        age: '',
        phone: '',
        role: 'patient',
        documents: [],
        termsAgreement: false,


    });
    // const [anonymousFormData, setAnonymousFormData] = useState({
    //     firstname: 'anonymous',
    //     lastname: 'anonymous',
    //     email: 'anonymous',
    //     age: 'anonymous',
    //     phone: 'null',
    //     role: 'anonymous',
    //     documents: [],
    //     termsAgreement: false,
    // })

    const handleChange = (e, typeuser) => {
        const {name, value } = e.target;

        console.log(name + value)
        if(typeuser === 'Therapist') {
            settherapistFormData(prevValues => ({
                ...prevValues,
                [name]: value,
            }))
        }else if (typeuser === 'Patient') {
            setPatientFormData(prevValues => ({
                ...prevValues,
                [name]: value,
            }))
        }
    }
  return {
    therapistFormData, patientFormData, handleChange
  }
}

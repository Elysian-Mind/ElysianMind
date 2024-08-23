import  { useState } from 'react'

export function useFormState() {
    const [therapistFormData, settherapistFormData] = useState({
       
        contactPersonName: '',
        email: '',
        phone: '',
        mailingAddress: '',
        previousExperience: '',
        documents: [],
        additionalComments: '',
        termsAgreement: false,
    })
    const [patientFormData, setPatientFormData] = useState({
        
        contactPersonName: '',
        email: '',
        age: '',
        phone: '',
        documents: [],

    });

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

import React, { useState } from 'react'
import { useFormState } from '../../../Components/forms/formsutils'
import TherapistContact from '../Forms/TherapistForms/TherapistContact';
import { handleTherapistReg } from './utils';


function TherapistReg() {
    // const [step, setStep] = useState();
    const {therapistFormData, handleChange } = useFormState();
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
        

    const handleSubmitTherapist = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
          const message = await handleTherapistReg(therapistFormData);
          setSuccessMessage(message);
        } catch (error) {
          setErrorMessage(error.message || 'An error occurred during registration.');
        } finally {
          setIsLoading(false);
        }
      };
    
    return (
    <div>
        <form onSubmit={handleSubmitTherapist} className='form-container'>
        
        <TherapistContact formData={therapistFormData} handleChange={handleChange} />
         <button type='submit' 
          disabled={!therapistFormData.documents || !therapistFormData.termsAgreement || isLoading}>
               {isLoading ? 'Setting up ...' : 'Register'} </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>} 

    </div>
  )
}

export default TherapistReg
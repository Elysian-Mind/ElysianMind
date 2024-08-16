import React, { useState } from 'react'
import PatientContact from '../PatientForms/PatientContact';
import { handlePatientReg } from './utils';
import { useFormState } from '../../../Components/forms/formsutils';



function PatientReg() {
  // const [step, setStep] = useState();
  const {patientFormData, handleChange } = useFormState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
      

  const handleSubmitPatient = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const message = await handlePatientReg(patientFormData);
        setSuccessMessage(message);
      } catch (error) {
        setErrorMessage(error.message || 'An error occurred during registration.');
      } finally {
        setIsLoading(false);
      }
    };
  



  return (
    <div>
      <form onSubmit={handleSubmitPatient} className='form-container'>
        
        <PatientContact formData={patientFormData} handleChange={handleChange} />
         <button type='submit' 
          disabled={!patientFormData.documents || !patientFormData.termsAgreement || isLoading}>
               {isLoading ? 'Setting up ...' : 'Register'} </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>} 

      

    </div>
  )
}

export default PatientReg
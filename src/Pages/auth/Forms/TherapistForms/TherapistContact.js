import React from 'react'
import { Link } from 'react-router-dom';
import '../TherapistForms/TherapistContact.css'


const TherapistContact = ({ formData, handleChange }) => {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    handleChange({target: {name: 'documents', value: files }})
  };


  return (
    <div className='card-contact' id='therapist'>
    <div className='therapistcontact'>
      <h1>Create Account : Therapist</h1>
      <h2>Fill in Your details</h2>
      <input 
      name="firstname"
      type="text" 
      placeholder='First name'
      value={formData.firstname}
      onChange={(e) => handleChange(e, 'Therapist')}
      required
      />
      <input name="middlename"
      type="text" 
      placeholder='Middle name'
      value={formData.middlename}
      onChange={(e) => handleChange(e, 'Therapist')}
      
      />
      <input name="lastname"
      type="text" 
      placeholder='Last name'
      value={formData.lastname}
      onChange={(e) => handleChange(e, 'Therapist')}
      required
      />
       <input name="email"
      type="email" 
      placeholder='Email'
      value={formData.email}
      onChange={(e) => handleChange(e, 'Therapist')}
      required
      />
       <input name="phone"
      type="number" 
      placeholder='Phone number'
      value={formData.phone}
      onChange={(e) => handleChange(e, 'Therapist')}
      required
      />

  <input name="phone"
      type="password" 
      placeholder='password'
      value={formData.password}
      onChange={(e) => handleChange(e, 'Therapist')}
      required
      />



    {/* </div> */}
    <div className="form-component">
      <h4 className='form-sec-title' > Relevant Documentation</h4>
      <div id="documents">
          < input
          name='documents' 
          type="file" 
          multiple
          onChange={handleFileChange}
          required />
          {formData.documents && formData.documents.length > 0 && (
            <ul>
              {formData.documents.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
      </div>

      <h4 className='form-sec-title'>Compliance & Terms Agreement</h4>
      <label>
        <input 
        name='termsAgreement'
        type="checkbox"
        checked={formData.termsAgreement}
        onChange={(e) => handleChange(e, 'Therapist')} />
        I agree to comply with all terms and Conditions.
      </label>

    </div>
    </div>
      <div className="navigate">
      <p className='final'>Already have an account ? <Link className='login'to='/therapistlogin'>Log in </Link></p>

      </div>
</div>


    // </div>

  )

}


export default TherapistContact
import React from 'react'
import { Link } from 'react-router-dom'


function PatientContact({ formData , handleChange}) {

    // const handleFileChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     handleChange({target: {name: 'documents', value: files }})
    //   };

  return (
    <div>
         <div className='therapistcontact'>
      <h1>Create an Account</h1>
      <h2>Fill in Your details</h2>
      <input 
      name="firstname"
      type="text" 
      placeholder='First name'
      value={formData.firstname}
      onChange={(e) => handleChange(e, 'Patient')}
      required
      />
      <input name="middlename"
      type="text" 
      placeholder='Middle name'
      value={formData.middlename}
      onChange={(e) => handleChange(e, 'Patient')}
      
      />
      <input name="lastname"
      type="text" 
      placeholder='Last name'
      value={formData.lastname}
      onChange={(e) => handleChange(e, 'Patient')}
      required
      />
       <input name="email"
      type="email" 
      placeholder='Email'
      value={formData.email}
      onChange={(e) => handleChange(e, 'Patient')}
      required
      />
       <input name="phone"
      type="number" 
      placeholder='Phone number'
      value={formData.phone}
      onChange={(e) => handleChange(e, 'Patient')}
      required
      />

  <input name="password"
      type="password" 
      placeholder='password'
      value={formData.password}
      onChange={(e) => handleChange(e, 'Patient')}
      required
      />
    <input name="age"
      type="number" 
      placeholder='age'
      value={formData.age}
      onChange={(e) => handleChange(e, 'Patient')}
      required
      />
      



    </div>
    <div className="form-component">
        
        <h4 className='form-sec-title'>Compliance & Terms Agreement</h4>
      <label>
        <input 
        name='termsAgreement'
        type="checkbox"
        checked={formData.termsAgreement}
        onChange={(e) => handleChange(e, 'Patient')} />
        I agree to comply with all terms and Conditions.
      </label>

    </div>
    <p>Already have an account ? <Link to='/patientlogin'>Log in </Link></p>

    </div>
  )
}

export default PatientContact
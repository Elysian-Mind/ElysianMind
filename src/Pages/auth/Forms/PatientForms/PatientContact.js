import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../PatientForms/PatientContact.css'




function PatientContact({ formData , handleChange}) {

 

  return (
    <div className='card-contact-patient' id='patient'>
      <div className='patientcontact'>
        <h1>Create an Account: Patient </h1>
        <h2>Fill in Your details</h2>
        {/* <div className="card"> */}
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
             

              



      <div className="form-component-patient">
          
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
      <p className='final'>Already have an account ? <Link className='login' to='/patientlogin'>Log in </Link></p>

    </div>
    </div>
  )
}

export default PatientContact
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserSelection = () => {
  const navigate = useNavigate();

  const handleUserChoice = (userType) => {
    if (userType === 'patient') {
      navigate('/register');
    } else if (userType === 'therapist') {
      navigate('/therapist-form');
    }
  };

  return (
    <div>
      <h2>Select Your Role</h2>
      <button onClick={() => handleUserChoice('patient')}>Patient</button>
      <button onClick={() => handleUserChoice('therapist')}>Therapist</button>
    </div>
  );
};

export default UserSelection;

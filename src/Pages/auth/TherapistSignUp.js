import React from 'react'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function TherapistSignUp() {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const auth = getAuth();
    
  return (
    <div>TherapistSignUp</div>
    
  )
}

export default TherapistSignUp
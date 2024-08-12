import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'

const Reset = () => {
    const[email, setEmail] = useState("")
    const auth = getAuth();

    const handleReset = () => {
        sendPasswordResetEmail( auth, email)
        .then(() => {
            console.log("success");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("An error has occured: ", errorCode, errorMessage)
        })

    }
    
  return (
    <div>
        <h1>Reset Password</h1>
        Email:
        <br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button onClick={handleReset}> Reset Password</button>
    </div>
  )
}

export default Reset
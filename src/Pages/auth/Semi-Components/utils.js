import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { db } from '../../../configs/firebaseConfig'
import { collection, addDoc, doc, getDoc} from 'firebase/firestore';
// import { Navigate } from 'react-router-dom';
// import { useState } from 'react';
// import firebase from 'firebase/compat/app';

// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate()


const auth = getAuth();

export const fetchUserType = async (uid) => {
  if (!uid) 
  {
      console.log ('User ID is undefined or null')
      return null
  }
  try {
      console.log("Fetching user type for UID:", uid);

      const therapistDoc = doc(db, 'TherapistData', uid)

      const therapistSnapshot = await  getDoc(therapistDoc)

      
      if (therapistSnapshot.exists()){
          console.log("User found in TherapistData");
          return 'therapist'
      }

      const patientDoc = doc(db, 'PatientData', uid)

      const patientSnapshot = await getDoc(patientDoc);
      if (patientSnapshot.exists()) {
          console.log("User found in PatientData");

          return 'patient'
      }
      console.error('No such document found in either collection!'.error)

  } catch (error) {
      console.error("Error fetching user type:", error)
      return null;
  }
}


export const handleTherapistReg = async(formData) => {

    try{
        const therapistEmail = formData.email;
        const password = formData.password;
        const userCredential = await createUserWithEmailAndPassword(auth, therapistEmail, password)

        await sendEmailVerification(userCredential.user)
        
        const therapistContactID = userCredential.user.uid;
        const formDataWiththerapistContactID = {...formData, therapistContactID };
        
        const docRef = await addDoc(collection(db, 'TherapistData'), formDataWiththerapistContactID);
        console.log ('Document written with ID: ', docRef.id);

        return 'Registration successful, Please check your email for verification.Then go to : ';
    } catch(error) {
        if(error.code === 'auth/email-already-in-use') {
            return error.message;
        } else {
            return 'An expected error occured.';
        }
    }
};

export const handlePatientReg = async(formData) => {


    try{
        const patientEmail = formData.email;
        const password = formData.password;
        const userCredential = await createUserWithEmailAndPassword(auth, patientEmail, password)

        await sendEmailVerification(userCredential.user)
        
        const patientContactID = userCredential.user.uid;
        const formDataWithpatientContactID = {...formData, patientContactID };

        const docRef = await addDoc(collection(db, 'PatientData'), formDataWithpatientContactID);
        console.log ('Document written with ID: ', docRef.id);

        return 'Registration successful, Please check your email for verification';
    } catch(error) {
        if(error.code === 'auth/email-already-in-use') {
            return error.message;
        } else {
            return 'An expected error occured.';
        }
    }
};


export const handleTherapistLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      
      //I try using setDoc instead of getDoc 
      const therapistDoc = await getDoc(doc(db, 'TherapistData', user.id));
      
    //   i need to add a spread here ..data,
      if (therapistDoc.exists()) {
        return { type: 'therapist', data: therapistDoc.data() };
      } else {
        throw new Error('User not found in TherapistData');
      }
    } catch (error) {
      console.error('Therapist login error:', error);
      throw error;
    }
  };
  



// new functions
export const handlePatientLogin = async (formData) => {
    try {
        const { email, password } = formData;
        // const navigate = useNavigate()

  
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', userCredential.user.uid);
        
        // const userType = await fetchUserType(userCredential.user.uid);

        // if (userType === 'therapist') {
        //     navigate(`/therapist/profile/${userCredential.user.uid}`);
        // } else if (userType === 'patient') {
        //     navigate(`/patient/profile/${userCredential.user.uid}`);
        // } else {
        //     navigate('/patientlogin');
        // }
        return 'Login successful!'
        
        
      } catch (error) {
        return Promise.reject(error);
      }
};


// export const handlePatientLogin = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
      
//       const patientDoc = await getDoc(doc(db, 'PatientData', user.uid));
//       if (patientDoc.exists()) {
//         return { type: 'patient', data: patientDoc.data() };
//       } else {
//         throw new Error('User not found in PatientData');
//       }
//     } catch (error) {
//       console.error('Patient login error:', error);
//       throw error;
//     }
//   };


// fetching all the data



// Login Functions








// export const handleTherapistLogin = async (formData, navigate) => {
//     try {
//       const { email, password } = formData;
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);

//       console.log('User logged in: ', userCredential.user.uid);
    
  
//       const userDocRef = doc(db, "TherapistData", userCredential.user.uid);
//       const userDoc = await getDoc(userDocRef);
  
//       if (userDoc.exists()) {
//         navigate(`/therapistprofile${userCredential.user.uid}`);
//       } else {
//         const patientDocRef = doc(db, "PatientData", userCredential.user.uid);
//         const patientDoc = await getDoc(patientDocRef);
        
//         if (patientDoc.exists()) {
//           navigate(`/patient/profile/${userCredential.user.uid}`);
//         } else {
//           navigate('/patientlogin');
//         }
//       }
  
//       return 'You are logged in as a patient with the email: ' + userCredential.user.email;
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   };







// export const handlePatientLogin = async (formData, navigate) => {
//     try {
//         const { email, password } = formData;
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         console.log('User logged in: ', userCredential.user.uid);

//         navigate(`/therapist`)


        // const userType = await fetchUserType(userCredential.user.uid);

        // if (userType === 'therapist') {
        //     navigate(`/therapist/profile/${userCredential.user.uid}`);
        // } else if (userType === 'patient') {
        //     navigate(`/patient/profile/${userCredential.user.uid}`);
        // } else {
        //     navigate('/patientlogin');
        // }

//         return 'You are logged in as a patient with the email: ' + userCredential.user.email;
//     } catch (error) {
//         return Promise.reject(error);
//     }
// };






export const handleSendPasswordResetEmail = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email send successfully!")

    }catch (error) {
        console.error('error sending password reset email: ', error.message);
        throw error;
    }
}



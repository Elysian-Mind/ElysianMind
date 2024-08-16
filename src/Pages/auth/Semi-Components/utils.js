import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { db } from '../../../configs/firebaseConfig'
import { collection, addDoc, doc, getDoc} from 'firebase/firestore';

// import { useNavigate } from 'react-router-dom';



const auth = getAuth();


export const fetchUserType = async (uid) => {
    if (!uid) 
    {
        console.log ('User ID is undefined or null')
        return null
    }
    try {
        const therapistDoc = doc(db, 'TherapistData', uid)
        const patientDoc = doc(db, 'PatientData', uid)

        const therapistSnapshot = await  getDoc(therapistDoc)
        if (therapistSnapshot.exists()){
            return 'therapist'
        }
        const patientSnapshot = await getDoc(patientDoc);
        if (patientSnapshot.exists()) {
            return 'patient'
        }
        console.error('No such document found in either collection!')

    } catch (error) {
        console.error("Error fetching user type:", error)
        return null;
    }
}

export const handleTherapistReg = async(formData) => {

    try{
        const therapistEmail = formData.email;
        const password = therapistEmail;
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
        const password = patientEmail;
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

export const handleLogin = async (formData, navigate) => {
    try {
        const { email, password } = formData;
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in: ', userCredential.user.uid);

        const userType = await fetchUserType(userCredential.user.uid);

        if (userType === 'therapist') {
            navigate(`/therapist/profile/${userCredential.user.uid}`);
        } else if (userType === 'patient') {
            navigate(`/patient/profile/${userCredential.user.uid}`);
        } else {
            navigate('/login');
        }

        return 'You are logged in as: ' + userCredential.user.email;
    } catch (error) {
        return Promise.reject(error);
    }
};



export const handleSendPasswordResetEmail = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email send successfully!")

    }catch (error) {
        console.error('error sending password reset email: ', error.message);
        throw error;
    }
}



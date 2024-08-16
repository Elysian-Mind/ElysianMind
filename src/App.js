import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Therapist from './Pages/Therapist';
import Patients from './Pages/Patients';
import Chatbot from './Pages/Chatbot';
import Reset from './Pages/auth/Reset';
import Signup from './Pages/auth/Signup';
import ProtectedRoute from './utils/ProtectedRoute';
import React from 'react';
import ProfilePage from './Pages/Profile';
import Resources from './Pages/Resources';
import Contactpage from './Pages/Contactpage';
import PatientReg from './Pages/auth/Semi-Components/PatientReg';
import TherapistReg from './Pages/auth/Semi-Components/TherapistReg';
import Login from './Pages/auth/Login';
import Therapistprofile from './Pages/Therapistprofile';
import Patientprofile from './Pages/Patientprofile';




function App() {
  
  return (
    <div>
    
      <Router>
        <Navbar />
        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path='/therapist' element={<Therapist />} />
            <Route path='/patient' element={ <Patients />} />
            <Route path='/resource' element={ <Resources />} />
            <Route path='/contact' element={<Contactpage />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path='login' element={<Login />} />
            <Route path='/reset' element={<Reset />} />
            <Route path="/chatbot" element={
                    <ProtectedRoute>
                        <Chatbot/>
                    </ProtectedRoute>
                } 
            />
            <Route  path='/Signup' element={ <Signup />}/>
            <Route  path='/register/Patient' element={ <PatientReg /> }/>
            <Route path='register/Therapist'  element={<TherapistReg /> }/>
            <Route path='/profile' element={<ProfilePage />} />  
            <Route path='/therapist/Therapistprofile' element={<Therapistprofile />} />  
            <Route path='/patient/Patientprofile' element={<Patientprofile />} />       

          
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

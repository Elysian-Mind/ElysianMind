import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Therapist from './Pages/Therapist';
import Patients from './Pages/Patients';
import Chatbot from './Pages/Chatbot';
import Reset from './Pages/auth/Reset';
import SignUp from './Pages/auth/Register';
import UserSelection from './Pages/auth/UserSelection';
// import Secret from './Pages/protected/Secret'
import Login from './Pages/auth/Login';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './configs/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from './redux/Slice/authSlice';
import { useEffect } from 'react';
import ProtectedRoute from './utils/ProtectedRoute';
import React from 'react';
import TherapistForm from './Pages/TherapistForm';
import ProfilePage from './Pages/Profile';
import Resources from './Pages/Resources';
// import Contact from './Pages/Contactpage';
import Contactpage from './Pages/Contactpage';




function App() {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useSelector((state) => state.auth.value);
  console.log("user from state", user);
  const dispatch = useDispatch();
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed, user:", user); 
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);
  
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
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/reset' element={<Reset />} />
            <Route path="/chatbot" element={
                    <ProtectedRoute>
                        <Chatbot/>
                    </ProtectedRoute>
                } 
            />
            <Route path="/" element={<UserSelection />} />
            <Route path="/therapist-form" element={<TherapistForm />} />
            <Route path='/profile' element={<ProfilePage />} />            

          
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

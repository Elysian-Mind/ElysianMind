import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Therapist from './Pages/Therapist';
import Patients from './Pages/Patients';
import Chatbot from './Pages/Chatbot';
import Reset from './Pages/auth/Reset';
import Register from './Pages/auth/Register';
// import Secret from './Pages/protected/Secret'
import Login from './Pages/auth/Login';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './configs/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from './redux/Slice/authSlice';
import { useEffect } from 'react';
import ProtectedRoute from './utils/ProtectedRoute';



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
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/reset' element={<Reset />} />
            <Route path="/chatbot" element={
                    <ProtectedRoute>
                        <Chatbot/>
                    </ProtectedRoute>
                } 
            />
            

          
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

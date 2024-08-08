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
import Secret from './Pages/protected/Secret'
import { Login } from '@mui/icons-material';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './configs/firebaseConfig';


function App() {
  initializeApp(firebaseConfig);
  
  return (
    <div>
    
      <Router>
        <Navbar />
        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path='/therapist' element={<Therapist />} />
            <Route path='/patient' element={ <Patients />} />
            <Route path='/chatbot' element={ <Chatbot />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/reset' element={<Reset />} />
            <Route path='/protected' element={<Secret />}/>

          
        </Routes>
        <Footer />
      </Router>

      
     


      
    </div>
  );
}

export default App;

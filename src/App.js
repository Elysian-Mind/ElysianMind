import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Therapist from './Pages/Therapist';
import Patients from './Pages/Patients';
import Chatbot from './Pages/Chatbot';
import { Login } from '@mui/icons-material';
import Signup from './authentication/Signup';
import Authentication from './authentication/Authentication';
// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { loginUser, setLoading } from './features/userSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch(
          loginUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,

        })
      );
      dispatch(setLoading(false))

      }else{
        console.log("User is not logged in")
        dispatch(setLoading(false));


      }
    });

  }, [dispatch]);
  // const user = useSelector(state => state.data.user.user)
  

  return (
    <div>
    
      <Router>
        <Navbar />
        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path='/therapist' element={<Therapist />} />
            <Route path='/patient' element={ <Patients />} />
            <Route path='/chatbot' element={ <Chatbot />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/signup' element={ <Signup />} /> 
            <Route path='/authentication' element={ <Authentication />} />
  
        </Routes>
        <Footer />
      </Router>


      
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Therapist from './Pages/Therapist';
import Patients from './Pages/Patients';
import AIPatient from './Pages/AIPatient';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/therapist' element={<Therapist />} />
          <Route path='/patient' element={<Patients />} />
          <Route path='/ai-patient' element={<AIPatient />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

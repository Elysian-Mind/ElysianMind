import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Therapist from './Pages/Therapist';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/therapist' element={<Therapist />} />
        </Routes>
        
        <Footer />

      </BrowserRouter>
     
    </div>
  );
}

export default App;

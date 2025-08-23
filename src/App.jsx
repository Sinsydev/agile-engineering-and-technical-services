import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ElectricalServices from './pages/ElectricalServices';
import SolarInstallation from './pages/SolarInstallation';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/electrical-services" element={<ElectricalServices />} />
        <Route path="/solar-installation" element={<SolarInstallation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;



 









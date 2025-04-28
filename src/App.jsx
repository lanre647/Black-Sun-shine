import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Navbar from './Pages/Navbar';

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#000', color: 'white', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

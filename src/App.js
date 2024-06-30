import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Clientes from './components/Clientes';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Grilla from './components/Grilla';
import Inicio from './components/Inicio';
import Radio from './components/Radio';
import ServicioInternet from './pages/ServicioInternet';
import ServicioTele from './pages/ServicioTele';
import Servicios from './components/Servicios';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Navbar'; // Asegúrate de importar tu Navbar aquí
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
  
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Inicio />
                <Grilla />
                <Servicios />
                <Radio />
                <Clientes />
                <Contacto />
                <Footer />
                <ScrollToTopButton />
              </>
            } />
            <Route path="/internet" element={<ServicioInternet />} />
            <Route path="/television" element={<ServicioTele />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-techcore">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">TechCore</h3>
          <p>Tu universo de tecnología y sonido. Innovación y calidad en cada producto.</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Navegación</h3>
          <ul className="footer-links">
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Legal</h3>
          <ul className="footer-links">
            <li><a href="#!">Política de Privacidad</a></li>
            <li><a href="#!">Términos de Servicio</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} TechCore. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
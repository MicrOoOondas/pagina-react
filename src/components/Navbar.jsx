import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

function Navbar()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top techcore-navbar">
            <div className="container">
                <NavLink className="navbar-brand-techcore" to="/productos">TechCore</NavLink>
                <button className="navbar-toggler"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                 aria-expanded="false"
                 aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/productos" className="nav-link nav-link-techcore">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard" className="nav-link nav-link-techcore">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link nav-link-techcore">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-danger float-end logout-btn-techcore"
                onClick={() => {
                    localStorage.removeItem("isAuthenticated");
                    window.location.href="/login"
                }}>
                    Cerrar Sesión
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
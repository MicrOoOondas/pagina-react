function Navbar()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <button className="navbar-toggler"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                 aria-expanded="false"
                 aria-label="Toggle navegacion">
                    <span className="navbar-toggle-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a href="#home" className="nav-link" >Home</a></li>
                        <li className="nav-item"><a href="#productos" className="nav-link" >Productos</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link" >Contacto</a></li>
                    </ul>
                </div>
                <button className="btn btn-danger float-end"
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
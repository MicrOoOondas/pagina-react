import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css';

function Login(){
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const navigate = useNavigate();

const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234"){
        localStorage.setItem("isAuthenticated","true");
        navigate("/productos");

    }
    else{
        alert("Credenciales incorrectas");
    }
};

return(
    <div id="Bienvenida">
    <h1 id="saludobienvenida">Bienvenido a Techcore!</h1>
    
        <div id="login-container" >
        
            <h3 id="login-title">Inicia Sesion</h3>
            <form onSubmit={handleLogin}>
                <div id="username-group">
                    <label id="username-label">Nombre de usuario: </label>
                    <input type="text" 
                    id="username-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ingrese el usuario"/>
                </div>
                <div id="password-group">
                    <label id="password-label">Contraseña: </label>
                    <input type="password" 
                    id="password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese la contraseña"/>
                </div>
                <button type="submit" id="login-button">Ingresar</button>
            </form>
        </div>
    </div>
);

}
export default Login;


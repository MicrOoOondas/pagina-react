import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="container mt-5" style={{maxWidth: "480px"}}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label className="form-label">Usuario: </label>
                <input type="text" 
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingrese el usuario"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password: </label>
                <input type="password" 
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese la contraseña"/>
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
        </form>
    </div>
);

}
export default Login;
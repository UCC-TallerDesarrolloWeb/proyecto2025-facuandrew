import "./Login.css" ;
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    // para declarar y manipular estados locales de un componente usando los Hooks
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navegador = useNavigate();

    const handleLogin = async (e) => {


        e.preventDefault();

        if(nombreUsuario == "admin" && contrasena == "admin"){

            console.log("Login correcto");
            navegador("/cursos")
        } else{
            console.log("Datos incorrecto");
        }
    }

    return (
        <div className = "login-contenedor" onSubmit={handleLogin}>
            <form className = "login-form">
                <h2>
                    Iniciar Sesion
                </h2>
                <input
                    type="text"
                    placeholder="Usuario"
                    // cambia el valor cuando usuario ingresa input
                    onChange={(e) => setNombreUsuario(e.target.value)}
                    value={nombreUsuario}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setContrasena(e.target.value)}
                    value={contrasena}
                    required
                />
                <button type="submit"> Ingresar </button>
            </form>
        </div>
    );
}

export default Login;
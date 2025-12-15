import "@styles/Login.css" ;
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from '@components/Button';

const Login = () => {

    // para declarar y manipular estados locales de un componente usando los Hooks
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navegador = useNavigate();

    const handleLogin = async (e) => {


        e.preventDefault();

        if(nombreUsuario == "admin" && contrasena == "admin"){

            console.log("Login correcto");
            localStorage.setItem("usuarioLogeado", "true");
            navegador("/cursos")
        } else{
            console.log("Datos incorrecto");
        }
    }

    return (
        <div className = "login-contenedor" onSubmit={handleLogin}>
            <form className = "login-form">
                <h2 className="login-titulo">
                    Iniciar Sesion
                </h2>
                <div>
                <input
                    type="text"
                    placeholder="Usuario"
                    className="contenedorUsuario"
                    // cambia el valor cuando usuario ingresa input
                    onChange={(e) => setNombreUsuario(e.target.value)}
                    value={nombreUsuario}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="contenedorPassword"
                    onChange={(e) => setContrasena(e.target.value)}
                    value={contrasena}
                    required
                />
                </div>
                <Button text="Ingresar" type="submit" />    
            </form>
        </div>
    );
}

export default Login;
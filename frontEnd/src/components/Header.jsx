import "../styles/Header.css"
import logo from "../assets/imagenes/Escuela_Escalada.png"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navegador = useNavigate();
    const estaLogeado = localStorage.getItem("usuarioLogeado") === "true";

    const logout = () =>{
        localStorage.removeItem("usuarioLogeado")

        // si el usuario cierra sesion lo mando a la pagina raiz home
        navegador("/")
    }

    return (
        <header>

            <div className="contenedor-logo-Header">
                {/*<button> <a href={/Home}></a> </button>*/}
                <img src={logo} alt="Logo"/>
            </div>

            <h1>Escuela Escalada en Roca</h1>

            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/cursos">Cursos</Link></li>
                    <li><a href="#contacto">Contacto</a></li>

                    {/*operad ternario para corrobar si estaLogeado true muestro boton para cerrar sesion Y si estaLogeado false entonces muestro boton login */}
                    {estaLogeado ? (
                        <button onClick={logout}> Cerrar Sesion</button>
                        ): ( <a href="/login">Login </a>)
                    }

                    {/*<li><a href="foro.html">Foros</a></li>*/}
                    {/*<li><a href="rutas.html">Ruta</a></li>*/}
                    {/*<li><a href="/login">Login</a></li>*/}
                </ul>
            </nav>
        </header>

    )
}
export default Header

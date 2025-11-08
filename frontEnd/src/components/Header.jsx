import "../styles/Header.css"
import logo from "../assets/imagenes/Escuela_Escalada.png"
import { Link } from "react-router-dom"
const Header = () =>
{
    return (
<header>
          <div>
            <a href="/index.html">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <nav>
            <ul>
              <li><Link to="/cursos">Tienda</Link></li>
              <li><a href="foro.html">Foros</a></li>
              <li><a href="rutas.html">Ruta</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>

    )
}
export default Header

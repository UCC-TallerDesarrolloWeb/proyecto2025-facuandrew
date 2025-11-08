import { useState } from 'react'
import './App.css'
import logo from '../public/imagenes/Escuela_Escalada.png'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

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

        <section className="hero">
          <div>
            <h2>Take me to the Mountains</h2>
          </div>
        </section>
        <section className="comentarios">
          <h2>Comentarios</h2>

         
        
        
        {/* Lista de comentarios existentes */}
        
          <div className="lista-comentarios">
            <div className="comentario">
              <h3>María López</h3>
              <p>Excelente experiencia en la salida de trekking, súper recomendada!</p>
              <span className="fecha">Publicado el 3 de octubre de 2025</span>
            </div>
            <div className="comentario">
              <h3>Juan Pérez</h3>
              <p>Muy buena organización y guía. Volvería sin dudarlo.</p>
              <span className="fecha">Publicado el 5 de octubre de 2025</span>
            </div>
          </div>

          {/*Formulario para agregar un nuevo comentario */}
        </section>


        <footer className="footer">
          <div className="footer_contenedor">

            <div className="footer_info">
              <img src={logo} alt="Logo" className='footer_logo'/>
                <p>
                  Somos una Escuela de Escalada, un espacio dedicado<br />
                    a la enseñanza y práctica de escalada.
                </p>
            </div>

            <div className="footer_servicios">
              <h2>Servicios</h2>
              <ul>
                <li>Trekking</li>
                <li>Escalada</li>
                <li>Snowboard</li>
                <li>Mountain Bike</li>
              </ul>
            </div>

            <div className="footer_contacto" id="contacto">
              <h2>Contacto</h2>
              <p><strong>Email:</strong> escalada@ecs.edu.ar</p>
              <p><strong>Teléfono:</strong> +54 351 5789530</p>
            </div>
          </div>
        </footer>
      </>
  )
}

export default App

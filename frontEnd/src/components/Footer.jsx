import "@styles/Footer.css"
import logo from "@assets/imagenes/Escuela_Escalada.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_contenedor">

                <div className="footer_info">
                    <img src={logo} alt="Logo" className='footer_logo'/>
                    <p>
                        Somos una escuela de escalada, un espacio dedicado<br/>
                        a la enseñanza y práctica de escalada.
                    </p>
                </div>

                <div className="footer_servicios">
                    <h2>Servicios</h2>
                    <ul className="lista_servicios">
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

    )
}
export default Footer


import "../styles/Cursos.css"
import TarjetasCursos from "../components/TarjetasCursos.jsx";

function Cursos() {
    function buscarCurso() {
    }

    function cerrarModal1() {
    }

    return (
        <>
            <nav className="item2">
                <a href="CarritoCursosSalidas.html">Carrito Cursos/Salidas Seleccionados</a>
            </nav>

            <aside className="item3">
                <form>
                    <fieldset>
                        <legend>Busqueda</legend>
                        <label htmlFor="search">Buscar:</label>
                        <input type="text" id="search" placeholder="Searching..." onClick={buscarCurso}/>
                    </fieldset>

                    <fieldset>
                        <legend>Precios</legend>
                        <p>
                            <label htmlFor="price-min">Minimo:</label>
                            <input type="text" id="price-min" name="price-min" onClick={buscarCurso}/>
                        </p>
                        <p>
                            <label htmlFor="price-max">Maximo:</label>
                            <input type="text" id="price-max" name="price-max" onClick={buscarCurso}/>
                        </p>
                    </fieldset>

                    <fieldset>
                        <legend>Tipo Curso</legend>
                        <p>
                            <input type="checkbox" id="escalada" name="cursoIniciante" onClick={buscarCurso}/>
                            <label htmlFor="escalada">Escalada</label>
                        </p>
                        <p>
                            <input type="checkbox" id="trekking" name="cursoIntermedio" onClick={buscarCurso}/>
                            <label htmlFor="trekking">Trekking</label>
                        </p>
                        <p>
                            <input type="checkbox" id="bike" name="cursoAvanzado" onClick={buscarCurso}/>
                            <label htmlFor="bike"> Bike</label>
                        </p>
                    </fieldset>
                </form>
            </aside>

            <dialog id="modal1">
                <h2 id="titulo_curso"></h2>
                <p id="detalleCurso"></p>
                <button type="button" onClick={cerrarModal1}>Cerrar</button>
            </dialog>

            <main className="item4" id="catalogoCursos">
                <TarjetasCursos />
            </main>

        </>
    )
}

export default Cursos
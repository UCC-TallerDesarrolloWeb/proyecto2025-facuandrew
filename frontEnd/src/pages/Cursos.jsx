import "../styles/Cursos.css"
import TarjetasCursos from "../components/TarjetasCursos.jsx";
import {useState} from "react";
import tarjetasCursos from "../components/TarjetasCursos.jsx";

function Cursos() {

    function buscarCurso() {
        let nuevaListaCursos = cursosSalidas;

        //estados para cada filtro
        const [buscarPalabra, setBuscarPalabra] = useState("");
        const [min, setMin] = useState("");
        const [max, setMax] = useState("");
        const [escalada, setEscalada] = useState(false);
        const [trekking, setTrekking] = useState(false);
        const [bike, setBike] = useState(false);

        //array asignado con el valor de la funcion
        const cursosSalidas = [tarjetasCursos()];


        const [cursosFiltrados, setCursosFiltrados] = useState(cursosSalidas);

        //Evitar números en el campo de búsqueda por texto
        if (buscarPalabra.trim() !== "" && !isNaN(buscarPalabra)) {
            alert("Debe ingresar texto, no números, en la búsqueda");
            setBuscarPalabra("");
            return;
        }

        //Filtrar por palabra clave
        if (buscarPalabra) {
            nuevaListaCursos = nuevaListaCursos.filter(curso =>
                curso.nombre.toLowerCase().includes(buscarPalabra.toLowerCase())
            );
        }

        //filtrar por precio
        if (min && !isNaN(min)) nuevaListaCursos = nuevaListaCursos.filter(c => c.precio >= min);
        if (max && !isNaN(max)) nuevaListaCursos = nuevaListaCursos.filter(c => c.precio <= max);

        //filtrar por tipo de curso
        const categorias = [];
        if (escalada) {return true}
        if (trekking) {return true}
        if (bike) {return true}
        if (categorias) {
            nuevaListaCursos = nuevaListaCursos.filter(curso => categorias.includes(curso.categoria));
        }

        //luego de todos los filtros actualizo los cursos para renderizar de acuerdo a lo filtrado
        setListaFiltrada(nuevaListaCursos);
    }

    return (
        <div className="contenedor-filtros-cursos">
            <nav className="item2">
                <a href="CarritoCursosSalidas.html">Carrito Cursos/Salidas Seleccionados</a>
            </nav>

            <aside className="item3">
                <form>
                    <fieldset>
                        <legend>Busqueda</legend>
                        <label htmlFor="search">Buscar:</label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Searching..."
                            onChange={(e) => setBucarPalabra(e.target.value)}/>
                    </fieldset>

                    <fieldset>
                        <legend>Precios</legend>
                        <p>
                            <label htmlFor="price-min">Minimo:</label>
                            <input
                                type="text"
                                id="price-min"
                                name="price-min"
                                onChange = {(e) => setMin(e.target.value)}/>
                        </p>
                        <p>
                            <label htmlFor="price-max">Maximo:</label>
                            <input
                                type="text"
                                id="price-max"
                                name="price-max"
                                onChange={(e) => setMax(e.target.value)}/>
                        </p>
                    </fieldset>

                    <fieldset>
                        <legend>Tipo Curso</legend>
                        <p>
                            <input
                                type="checkbox"
                                checked={escalada}
                                onChange={() => setEscalada(!escalada)}/>
                            <label htmlFor="escalada">Escalada</label>
                        </p>
                        <p>
                            <input
                                type="checkbox"
                                checked={trekking}
                                onChange={() => setTrekking(!trekking)}/>
                            <label htmlFor="trekking">Trekking</label>
                        </p>
                        <p>
                            <input
                                type="checkbox"
                                checked={bike}
                                onChange={() => setBike(!bike)}/>
                            <label htmlFor="bike"> Bike</label>
                        </p>
                    </fieldset>

                    <button type="button" onClick={buscarCurso}>Buscar</button>
                </form>
            </aside>

            {/*<dialog id="modal1">*/}
            {/*    <h2 id="titulo_curso"></h2>*/}
            {/*    <p id="detalleCurso"></p>*/}
            {/*    <button type="button" onClick={cerrarModal1}>Cerrar</button>*/}
            {/*</dialog>*/}

            <main className="item4" id="catalogoCursos">
                <TarjetasCursos/>
            </main>

        </div>
    )
}

export default Cursos
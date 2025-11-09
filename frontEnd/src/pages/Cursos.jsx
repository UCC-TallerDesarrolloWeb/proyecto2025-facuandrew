import "../styles/Cursos.css"

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

            <main className="item4" id="catalogoCursos"></main>

        </>
    )
}

const tarjetasCursos = () => {
    const cursos = [
        {
            id: 1,
            nombre: "Curso Iniciación Escalada en Roca",
            descripcion: "Aprenderás las técnicas básicas para iniciarte en la escalada con seguridad. Objetivos del curso: Que los alumnos obtengan todos los conocimientos teóricos y prácticos para poder ejecutar escaladas en montañas de roca vertical, mediante la progresión en libr y aseguramiento con empotradores.",
            detalleCurso: "Objetivos del curso: Que los alumnos obtengan todos los conocimientos teóricos y prácticos para poder ejecutar escaladas en montañas de roca vertical, mediante la progresión en libre y aseguramiento con empotradores",
            categoria: "escalada",
            precio: 65000,
            imagen: "cursoIntermedio.jpg",
        },
        {
            id: 2,
            nombre: "Curso Intermedio Escalada en Roca",
            descripcion: "Escala al siguiente nivel. Requerido conocimientos previos. Para mas detalle presione ver detalle",
            detalleCurso: "Curso intermedio de escalada en roca Nivel 2. Se enfoca en progresiones de varios largos, técnicas de escalada en punta, anclajes, rapel avanzado y colocación de material, para que puedas escalar como primero de cordada en vías equipadas y semiequipadas. Para poder realizarlo es necesario poder escalar vía de grado V+ y saber montar reuniones y descolgarse con seguridad. Si no es así, deberán realizar el curso de nivel 1",
            categoria: "escalada",
            precio: 100000,
            imagen: "escalada.jpeg",
        },
        {
            id: 3,
            nombre: "Curso Avanzado Escalada en Roca",
            descripcion: "Se debe haber pasado por el curso de iniciante e intermedio. Se requiere estar en aptas condiciones fisicas debido a la dificultad de la escalada y el terreno. Para mas informacion presione ver detalle",
            detalleCurso: "Curso Avanzado Escalada en Roca nivel 3 requiere superar una prueba de ingreso. Es necesario tener experiencia para avanzar en situaciones y terrenos complejos.",
            categoria: "escalada",
            precio: 200000,
            imagen: "cursoAvanzado.jpg",
        },
        {
            id: 4,
            nombre: "Trekking",
            descripcion: "Salida grupal , distendida para pasar un dia agradable en contacto con la naturaleza",
            detalleCurso: "Se realizan salidas grupales a distintos lugares. Dependiendo el lugar y las horas de caminata se provee alimento y bebida. El transporte hacia el lugar es independiente de cada participante. Consultar por disponibilidad y proximas salidas",
            categoria: "trekking",
            precio: 20000,
            imagen: "trekking.jpeg",
        },
        {
            id: 5,
            nombre: "Mountain Bike Road",
            descripcion: "Salida grupal de maximo 5 personas. Ruta a traves de la montaña con partes de mucha adrenalida. Se proveen los elementos de seguridad y la bici.",
            detalleCurso: "Se eligen diferentes rutas en cada salida. El transporte hasta el lugar es independiente de cada persona. Nosotros nos encargamos de todo, bici, repuestos, elementos de seguridad, alimentos, bebida,",
            categoria: "mountain bike",
            precio: 120000,
            imagen: "mountain%20bike.jpeg",
        },
    ];

    return (
        <div className="cursos-contenedor">
            {/*similar al forEach con la diferencia que a medida que itera crea un elemento nuevo*/}
            {/*key = {indice} para diferenciar las tarjetas*/}
            {tarjetasCursos.map((curso, indice) => (
            <div className="tarjeta-curso" key={indice}>
                <h3>{curso.nombre}</h3>
                <p>{curso.descripcion}</p>
            </div>
            ))}
        </div>
    )
}

export default Cursos
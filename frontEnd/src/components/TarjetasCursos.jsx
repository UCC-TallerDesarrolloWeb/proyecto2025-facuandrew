import "../styles/TarjetasCursos.css"
import mountainBikeImg from "../assets/imagenes/mountainBike.jpeg"
import cursoIntermedioImg from "../assets/imagenes/cursoIntermedio.jpg"
import escaladaImg from  "../assets/imagenes/escalada.jpeg"
import cursoAvanzadaImg from "../assets/imagenes/cursoAvanzado.jpg"
import trekkingImg from "../assets/imagenes/trekking.jpeg"

const tarjetasCursos = () => {
    const cursos = [
        {
            id: 1,
            nombre: "Curso Iniciación Escalada en Roca",
            descripcion: "Aprenderás las técnicas básicas para iniciarte en la escalada con seguridad. Objetivos del curso: Que los alumnos obtengan todos los conocimientos teóricos y prácticos para poder ejecutar escaladas en montañas de roca vertical, mediante la progresión en libr y aseguramiento con empotradores.",
            detalleCurso: "Objetivos del curso: Que los alumnos obtengan todos los conocimientos teóricos y prácticos para poder ejecutar escaladas en montañas de roca vertical, mediante la progresión en libre y aseguramiento con empotradores",
            categoria: "escalada",
            precio: 65000,
            imagen: cursoIntermedioImg,
            horario: [
                { dia: 5, "inicio":"8:00", "fin":"17:00"}
            ]
        },
        {
            id: 2,
            nombre: "Curso Intermedio Escalada en Roca",
            descripcion: "Escala al siguiente nivel. Requerido conocimientos previos. Para mas detalle presione ver detalle",
            detalleCurso: "Curso intermedio de escalada en roca Nivel 2. Se enfoca en progresiones de varios largos, técnicas de escalada en punta, anclajes, rapel avanzado y colocación de material, para que puedas escalar como primero de cordada en vías equipadas y semiequipadas. Para poder realizarlo es necesario poder escalar vía de grado V+ y saber montar reuniones y descolgarse con seguridad. Si no es así, deberán realizar el curso de nivel 1",
            categoria: escaladaImg,
            precio: 100000,
            imagen: cursoIntermedioImg,
            horario: [
                { dia: 2, "inicio":"8:00", "fin":"17:00"},
                {dia: 3, "inicio":"8:00", "fin":"17:00"}
            ]
        },
        {
            id: 3,
            nombre: "Curso Avanzado Escalada en Roca",
            descripcion: "Se debe haber pasado por el curso de iniciante e intermedio. Se requiere estar en aptas condiciones fisicas debido a la dificultad de la escalada y el terreno. Para mas informacion presione ver detalle",
            detalleCurso: "Curso Avanzado Escalada en Roca nivel 3 requiere superar una prueba de ingreso. Es necesario tener experiencia para avanzar en situaciones y terrenos complejos.",
            categoria: "escalada",
            precio: 200000,
            imagen: cursoAvanzadaImg,
            horario: [
                { dia: 1, "inicio":"8:00", "fin":"19:00"},
                {dia: 0, "inicio":"8:00", "fin":"19:00"}
            ]
        },
        {
            id: 4,
            nombre: "Trekking",
            descripcion: "Salida grupal , distendida para pasar un dia agradable en contacto con la naturaleza",
            detalleCurso: "Se realizan salidas grupales a distintos lugares. Dependiendo el lugar y las horas de caminata se provee alimento y bebida. El transporte hacia el lugar es independiente de cada participante. Consultar por disponibilidad y proximas salidas",
            categoria: "trekking",
            precio: 20000,
            imagen: trekkingImg,
            horario: [
                { dia: 5, "inicio":"7:00", "fin":"18:00"},
                {dia: 4, "inicio":"8:00", "fin":"20:00"}
            ]
        },
        {
            id: 5,
            nombre: "Mountain Bike Road",
            descripcion: "Salida grupal de maximo 5 personas. Ruta a traves de la montaña con partes de mucha adrenalida. Se proveen los elementos de seguridad y la bici.",
            detalleCurso: "Se eligen diferentes rutas en cada salida. El transporte hasta el lugar es independiente de cada persona. Nosotros nos encargamos de todo, bici, repuestos, elementos de seguridad, alimentos, bebida,",
            categoria: "mountain bike",
            precio: 120000,
            imagen: mountainBikeImg,
            horario: [
                { dia: 6, "inicio":"9:00", "fin":"20:00"},
                {dia: 5, "inicio":"8:00", "fin":"17:00"}
            ]
        },
    ];

    const diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    const handleInscription = (nombreCurso) => {
        alert(`Inscripto en ${nombreCurso}`);
    }

    // obtengo el valor del localStorage para comprobar si el usuario inicio o no sesion
    const estaLogeado = localStorage.getItem("usuarioLogeado") === "true";

    return (
        <div className="TarjetasCursos-contenedor">

            {cursos.map((curso, indice) => (
                <div className="tarjeta-curso" key={indice}>
                    <h3>{curso.nombre}</h3>
                    <img className="contenedor-img-cursos" src={curso.imagen} alt={curso.nombre}/>
                    <p>{curso.descripcion}</p>
                    <ul>
                        {/*ind = indice identificador,  */}
                        {curso.horario.map((horario, ind) =>
                            <li key={ind}>
                                Dia: {diaSemana[horario.dia]} - Hora de Inicio: {horario["inicio"]} - Hora fin: {horario["fin"]}
                            </li>
                        )}
                    </ul>

                    {/*corroboro que el usuario inicio sesion. Es decir si estaLogeado es true entonces el usuario podra usar el button */}
                    {
                        estaLogeado &&
                        (<button onClick= { () => handleInscription(curso.nombre) }> Incribirse </button>)
                    }
                </div>
            ))}
        </div>
    )
}

export default tarjetasCursos;
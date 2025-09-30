/**
 * @method cargarCursos()
 * producto.forEach recorre la base de datos y carga los cursos disponibles a la pagina web dinamicamente
 */

const cursosSalidas = [
    {
        nombre: "Curso Iniciación Escalada en Roca",
        descripcion: "Aprenderás las técnicas básicas para iniciarte en la escalada con seguridad. Objetivos del curso: Que los alumnos obtengan todos los conocimientos teóricos y prácticos para poder ejecutar escaladas en montañas de roca vertical, mediante la progresión en libr y aseguramiento con empotradores.",
        categoria: "escalada",
        marca: "",
        talle: [],
        precio: 65000,
        web: "",
        imagen: "cursoIntermedio.jpg",
    },
    {
        nombre: "Curso Intermedio Escalada en Roca",
        descripcion: "Curso Intermedio Escalada en Roca",
        categoria: "escalada",
        marca: "",
        talle: [],
        precio: 100000,
        web: "",
        imagen: "escalada.jpeg",
    },
    {
        nombre: "Curso Avanzado Escalada en Roca",
        descripcion: "Curso Avanzado Escalada en Roca",
        categoria: "escalada",
        marca: "",
        talle: [],
        precio: 200000,
        web: "",
        imagen: "cursoAvanzado.jpg",
    },
    {
        nombre: "Trekking",
        descripcion: "Salida grupal , distendida para pasar un dia agradable en contacto con la naturaleza",
        categoria: "trekking",
        marca: "",
        talle: [],
        precio: 20000,
        web: "",
        imagen: "trekking.jpeg",
    },
    {
        nombre: "Mountain Bike Ruta",
        descripcion:"Salida grupal de maximo 5 personas. Ruta a traves de la montaña con partes de mucha adrenalida. Se proveen los elementos de seguridad y la bici.",
        categoria: "mountain bike",
        marca: "",
        talle: [],
        precio: 50000,
        web: "",
        imagen: "mountain%20bike.jpeg",
    },
];



let cargarCursos = () =>{
    let contenido = "";

    // Todo el codigo html se generara por cada elemento que tenga en mi array cursos.
    //  Finalizada la iteracion va y se inserta en el main
    cursosSalidas.forEach((elemento, id) => {
        contenido += `<div>
        <img src="../Imagenes/${elemento.imagen}" alt="${elemento.nombre}">
            <h4>${elemento.nombre}</h4>
            <p>${elemento.descripcion}</p>
            <p>${elemento.precio}</p>
            <br><button class="agregar-carrito">Agregar al carrito</button></br>
            <button id="botonDetalleCursoIniciante" onclick="mostrarModal1()">Ver Detalle</button>
        </div>`
    });

    document.getElementById("catalogoCursos").innerHTML = contenido;
};

let mostrarModal1 = () => {
    document.getElementById("modal1").style.display = "block";
}

let cerrarModal1 = () => {
    document.getElementById("modal1").style.display = "none";
}
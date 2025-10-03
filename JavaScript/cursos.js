/**
 * @method cargarCursos()
 * producto.forEach recorre la base de datos y carga los cursos disponibles a la pagina web dinamicamente con innerHTML
 */

/**
 * @method agregarAlCarrito()
 * @param {id} id del producto que interesa agregar al carrito
 *
 * Obtengo todo lo que esta en mi carrito y lo asigno a una variable para poder manipularlo.
 * Si esta variable (listaCarrito) esta vacia entonces creo un array vacio.
 * Sino listaCarrito no esta vacio (tiene productos ya seleccionados) cargo el producto al array
 *
 * Guardo el valor que me pasan al localStorage.
 */

/**
 * @method cargarCarrito()
 * ListaCarrito al asignarle el valor de localStorage es un string, entonces para recorrer listaCarrito con
 * forEach debo convertirlo en un array. Eso lo hago con JSONparse
 *
 * Luego de toda la iteracion  listaCarrito.forEach.. Inyecto los elementos iterados en html CarritoCursos
 * para mostrar los elementos seleccionados
 *
 */

const cursosSalidas = [
    {
        nombre: "Curso Iniciación Escalada en Roca",
        descripcion: "Aprenderás las técnicas básicas para iniciarte en la escalada con seguridad. Objetivos del curso: Que los alumnos obtengan todos los conocimientos teóricos y prácticos para poder ejecutar escaladas en montañas de roca vertical, mediante la progresión en libr y aseguramiento con empotradores.",
        detalleCurso: "Objetivos del curso: Que los alumnos obtengan todos los conocimientos teóricos y prácticos para poder ejecutar escaladas en montañas de roca vertical, mediante la progresión en libre y aseguramiento con empotradores",
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
        detalleCurso: "Curso intermedio de escalada en roca Nivel 2. Se enfoca en progresiones de varios largos, técnicas de escalada en punta, anclajes, rapel avanzado y colocación de material, para que puedas escalar como primero de cordada en vías equipadas y semiequipadas. Para poder realizarlo es necesario poder escalar vía de grado V+ y saber montar reuniones y descolgarse con seguridad. Si no es así, deberán realizar el curso de nivel 1",
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
        detalleCurso:"Curso Avanzado Escalada en Roca nivel 3 requiere superar una prueba de ingreso. Es necesario tener experiencia para avanzar en situaciones y terrenos complejos.",
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
        detalleCurso: "Se realizan salidas grupales a distintos lugares. Dependiendo el lugar y las horas de caminata se provee alimento y bebida. El transporte hacia el lugar es independiente de cada participante. Consultar por disponibilidad y proximas salidas",
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
        detalleCurso: "Se eligen diferentes rutas en cada salida. El transporte hasta el lugar es independiente de cada persona. Nosotros nos encargamos de todo, bici, repuestos, elementos de seguridad, alimentos, bebida,",
        categoria: "mountain bike",
        marca: "",
        talle: [],
        precio: 120000,
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
            <p>$${elemento.precio}</p>
            <button id="botonDetalleCurso" onclick="mostrarModal1()">Ver Detalle</button>
            <button type="button" onclick="agregarAlCarrito(${id})">Agregar al Carrito</button>
        </div>`
    });

    document.getElementById("catalogoCursos").innerHTML = contenido;
};

let agregarAlCarrito = (id) => {

    let listaCarrito = localStorage.getItem("carrito");

    if(listaCarrito == null){
        listaCarrito = [];
    } else {
        listaCarrito = JSON.parse(listaCarrito);
    }

    listaCarrito.push(id);

    console.log(listaCarrito);

    localStorage.setItem("carrito", JSON.stringify(listaCarrito));
}

let cargarCarrito = () => {
    let listaCarrito = localStorage.getItem("carrito");

    let contenido = "";

    if(listaCarrito == null){
        contenido = "<div>CARRITO VACIO</div>";
    } else{
        listaCarrito = JSON.parse(listaCarrito);


        listaCarrito.forEach((num) => {
            contenido += `<div>
                    <h3>${cursosSalidas[num].nombre}</h3>
                    <p>$${cursosSalidas[num].precio}</p>
            </div>`;
        });
    }

    

    document.getElementById("mostrarCarrito").innerHTML = contenido;

};



let mostrarModal1 = () => {
    document.getElementById("modal1").style.display = "block";
}

let cerrarModal1 = () => {
    document.getElementById("modal1").style.display = "none";
}
/**
 * @method cargarCursos()
 * producto.forEach recorre la base de datos y carga los cursos disponibles a la pagina web dinamicamente con innerHTML
 */

/**
 * @method agregarAlCarrito()
 * @param {id} id del producto que interesa agregar al carrito. Id es la posicino que ocupa el producto en el array
 *
 * Obtengo todo lo que esta en mi carrito y lo asigno a una variable para poder manipularlo.
 * Si esta variable (listaCarrito) esta vacia entonces creo un array vacio.
 * Sino listaCarrito no esta vacio (tiene productos ya seleccionados) cargo el producto al array
 *
 * Guardo el valor que me pasan al localStorage.
 */

/**
 * @method cargarCarrito()
 * "removeItem" elimina todo los elementos que se encuentran en el carrito
 *
 * "window.location.reload" recarga la pagina para que los productos no se sigan mostrando una vez eliminados del carrito
 */

/**
 * @method vaciarCarrito()
 * ListaCarrito al asignarle el valor de localStorage es un string, entonces para recorrer listaCarrito con
 * forEach debo convertirlo en un array. Eso lo hago con JSONparse
 *
 * Luego de toda la iteracion  listaCarrito.forEach.. Inyecto los elementos iterados en html CarritoCursos
 * para mostrar los elementos seleccionados
 *
 * Se le agrega un boton "vaciar carrito "en casa de querer borrar todos los elementos del carrito
 */

/**
 * @method eliminarProducto()
 * @param {id} id del producto que quiero eliminar. Id es la posicion que ocupa el producto en el array
 *
 * Con esta funcion elimino puedo eliminar de a un producto
 *
 * ".splice(param1 , param2)" es un metodo de arreglos para eliminar o agregar elementos a un arreglo.
 * "param1" indica el inicio desde de donde se removeran/agregara el elemento/elementos
 * "param2" indica la cantidad de elementos que quiero remover del array partiendo del "param1", que es el indice del array
 *
 * Condicional sirve para verificar si el carrito tiene o no elementos. Sino tiene elemento no tiene sentido guardarlo.
 * Si tiene elementos entonces lo guardo en localStorage y actualizo la pagina
 */

/**
 * @method buscarCurso()
 *
 * Funcion que permite buscar a partir de un input ingresado por el usuario.
 *
 * Obtengo el valor ingresado por el usuario con document.getElementById(htmlID).
 *
 * nuevaLista retorna los cursos y salidas seleccionados por el usuario mediante algun input
 *
 * Con el condicional, verifico si la palabra ingresada es verdadera.
 * Si la palabra es verdadera luego filtro por el nombre del curso correspondiente
 *
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
        <img src="../Imagenes/${elemento.imagen}" alt="${elemento.nombre}"/>
            <h4>${elemento.nombre}</h4>
            <p>${elemento.descripcion}</p>
            <p>${elemento.precio}</p>
            <button type="button" onclick="mostrarModal1(${id})">
            Ver Detalle
            </button>
            <button type="button" onclick="agregarAlCarrito(${id})">
            Agregar al Carrito
            </button>
        </div>`;
    });

    document.getElementById("catalogoCursos").innerHTML = contenido;
};

let agregarAlCarrito = (id) => {
    let listaCarrito = localStorage.getItem("carrito");
    listaCarrito = listaCarrito ? JSON.parse(listaCarrito) : [];

    if (listaCarrito.includes(Number(id))) {
        alert("Este curso ya está en el carrito");
        return;
    } else {
        listaCarrito.push(Number(id));
        localStorage.setItem("carrito", JSON.stringify(listaCarrito));
        alert("Se ha cargado el curso correctamente");
    }
};

    



let cargarCarrito = () => {
    let listaCarrito = localStorage.getItem("carrito");

    let contenido = "";

    if(listaCarrito == null){
        contenido = "<div>CARRITO VACIO</div>";
    } else{
        listaCarrito = JSON.parse(listaCarrito);

        listaCarrito.forEach((num, id) => {
            contenido += `<div>
                <h3>${cursosSalidas[num].nombre}</h3>
                <p>$${cursosSalidas[num].precio}</p>
                <button type = "button" onClick="eliminarProducto(${id})">Eliminar Producto</button>
            </div>`;
        });
        contenido += `<button type ="button" onClick="vaciarCarrito()">Vaciar Carrito</button>`
    }

    document.getElementById("mostrarCarrito").innerHTML = contenido;
};

let vaciarCarrito = () =>{
    localStorage.removeItem("carrito");
    window.location.reload();
};

let eliminarProducto = (id)=> {
    let listaCarrito = localStorage.getItem("carrito");

    listaCarrito = JSON.parse(listaCarrito);

    listaCarrito.splice(id,1);

    if(listaCarrito.length > 0){
        localStorage.setItem("carrito", JSON.stringify(listaCarrito));
    } else{
        localStorage.removeItem("carrito");
    }

    window.location.reload();
};

let mostrarModal1 = (id) => {
    document.getElementById("titulo_curso").innerText = cursosSalidas[id].nombre;
    document.getElementById("descripcion").innerText = cursosSalidas[id].descripcion;
    document.getElementById("modal1").style.display = "block";
};

let cerrarModal1 = () => {
    document.getElementById("modal1").style.display = "none";
};

buscarCurso = () => {
    let buscarPalabra = document.getElementById("search").value;
    let min = document.getElementById("price-min").value;
    let max = document.getElementById("price-max").value; //input tipo text, number, select
    let iniciante = document.getElementById("iniciante").checked; //input tipo checkBok
    let intermedio  = document.getElementById("intermedio").checked;
    let avanzado  = document.getElementById("avanzado").checked;

    let nuevaLista = cursosSalidas;

    if(buscarPalabra) {
        nuevaLista = nuevaLista.filter((prod) => prod.nombre == buscarPalabra)
    }



};

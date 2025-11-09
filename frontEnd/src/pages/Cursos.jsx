import "../styles/Cursos.css";
import { useState } from "react";
import TarjetasCursos from "../components/TarjetasCursos.jsx";
import { cursosData } from "../data/cursoData.js";

function Cursos() {
  // 📦 Estados de los filtros
  const [buscarPalabra, setBuscarPalabra] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [escalada, setEscalada] = useState(false);
  const [trekking, setTrekking] = useState(false);
  const [bike, setBike] = useState(false);

  // 📋 Estado para la lista mostrada
  const [listaFiltrada, setListaFiltrada] = useState(cursosData);

  // 🔍 Función principal de búsqueda
  function buscarCurso() {
    let nuevaLista = [...cursosData];

    console.log("--- INICIO DE BÚSQUEDA ---");
    console.log("Palabra clave:", buscarPalabra, "| Min:", min, "| Max:", max);
    console.log("Categorías activas: Escalada:", escalada, "Trekking:", trekking, "Bike:", bike);

    // Verificar que no se ingrese un número como texto de búsqueda
    if (buscarPalabra.trim() !== "" && !isNaN(buscarPalabra)) {
      alert("Debe ingresar texto, no números, en la búsqueda");
      setBuscarPalabra("");
      return;
    }

    // 1️⃣ Filtro por palabra clave
    if (buscarPalabra) {
      nuevaLista = nuevaLista.filter((curso) =>
        curso.nombre.toLowerCase().includes(buscarPalabra.toLowerCase())
      );
      console.log("1. Resultados después de filtrar por PALABRA CLAVE:", nuevaLista);
    }

    // 2️⃣ Filtro por precio
    if (min && !isNaN(min)) nuevaLista = nuevaLista.filter((c) => c.precio >= min);
    if (max && !isNaN(max)) nuevaLista = nuevaLista.filter((c) => c.precio <= max);
    console.log("2. Resultados después de filtrar por PRECIO:", nuevaLista);

    // 3️⃣ Filtro por categoría
    const categorias = [];
    if (escalada) categorias.push("escalada");
    if (trekking) categorias.push("trekking");
    if (bike) categorias.push("bike");

    if (categorias.length > 0) {
      nuevaLista = nuevaLista.filter((curso) => categorias.includes(curso.categoria));
      console.log("3. Resultados después de filtrar por CATEGORÍA:", nuevaLista);
    }

    // ✅ Actualizar estado final
    setListaFiltrada(nuevaLista);
    console.log("--- FIN DE BÚSQUEDA ---");
  }

  // 🎨 Render principal
  return (
    <div className="contenedor-filtros-cursos">
      <nav className="item2">
        <a href="#">Carrito Cursos/Salidas Seleccionados</a>
      </nav>

      <aside className="item3">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Búsqueda por texto */}
          <fieldset>
            <legend>Busqueda</legend>
            <label htmlFor="search">Buscar:</label>
            <input
              type="text"
              id="search"
              placeholder="Buscar..."
              value={buscarPalabra}
              onChange={(e) => setBuscarPalabra(e.target.value)}
            />
          </fieldset>

          {/* Filtro de precios */}
          <fieldset>
            <legend>Precios</legend>
            <p>
              <label htmlFor="price-min">Mínimo:</label>
              <input
                type="text"
                id="price-min"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="price-max">Máximo:</label>
              <input
                type="text"
                id="price-max"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              />
            </p>
          </fieldset>

          {/* Filtros de categoría */}
          <fieldset>
            <legend>Tipo de Curso</legend>
            <p>
              <input
                type="checkbox"
                checked={escalada}
                onChange={() => setEscalada(!escalada)}
              />
              <label>Escalada</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={trekking}
                onChange={() => setTrekking(!trekking)}
              />
              <label>Trekking</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={bike}
                onChange={() => setBike(!bike)}
              />
              <label>Bike</label>
            </p>
          </fieldset>

          {/* Botón de acción */}
          <button type="button" onClick={buscarCurso}>
            Buscar
          </button>
        </form>
      </aside>

      {/* Renderizado de tarjetas */}
      <main className="item4" id="catalogoCursos">
        <TarjetasCursos cursos={listaFiltrada} />
      </main>
    </div>
  );
}

export default Cursos;

import "../styles/TarjetasCursos.css";

const TarjetasCursos = ({ cursos }) => {
  return (
    <div className="TarjetasCursos-contenedor">
      {cursos.map((curso) => (
        <div className="tarjeta-curso" key={curso.id}>
          <h3>{curso.nombre}</h3>
          <img src={curso.imagen} alt={curso.nombre} />
          <p>{curso.descripcion}</p>
          <p>${curso.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default TarjetasCursos;

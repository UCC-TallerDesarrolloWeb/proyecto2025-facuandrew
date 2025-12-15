import "@styles/Home.css";

const Home = () => {
    return (
        <>
            <section className="heroHome">
                <div>
                    <h2>Take me to the Mountains</h2>
                </div>
            </section>

            <section className="tituloComentarios">
                <h2>Comentarios</h2>

                <div className="listaComentarios">
                    <div className="comentario">
                        <h3>María López</h3>
                        <p>
                            Excelente experiencia en la salida de trekking, súper recomendada!
                        </p>
                        <span className="fecha">
                            Publicado el 3 de octubre de 2025
                        </span>
                    </div>
                    <div className="comentario">
                        <h3>Juan Pérez</h3>
                        <p>Muy buena organización y guía. Volvería sin dudarlo.</p>
                        <span className="fecha">
                         Publicado el 5 de octubre de 2025
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

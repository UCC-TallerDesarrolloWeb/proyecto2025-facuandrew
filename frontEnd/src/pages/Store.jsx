import {useEffect, useState} from "react";

const Store = () => {
    const [cursos, setCursos] = useState([]);

    const BASE_URL = "http://localhost:4000/";

    const fetchCursos = async () => {
        try{
            const response = await fetch(`${BASE_URL}`);
            const data = await response.json();
            setCursos(data);
        }catch(error){
            console.error(`Error al realizar un get en el servidor: ${error}`);
        }
    }

    useEffect(() => {
        fetchCursos();
    }, []);

    return (
        cursos.map((curso, id) => (
            <div key={id}>
                <p>{curso.nombre}</p>
            </div>
        ))
    )

}

export default Store;
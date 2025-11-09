import mountainBikeImg from "../assets/imagenes/mountainBike.jpeg";
import cursoIntermedioImg from "../assets/imagenes/cursoIntermedio.jpg";
import escaladaImg from "../assets/imagenes/escalada.jpeg";
import cursoAvanzadaImg from "../assets/imagenes/cursoAvanzado.jpg";
import trekkingImg from "../assets/imagenes/trekking.jpeg";

export const cursosData = [
  {
    id: 1,
    nombre: "Curso Iniciación Escalada en Roca",
    categoria: "escalada",
    precio: 65000,
    imagen: cursoIntermedioImg,
    descripcion: "Aprenderás las técnicas básicas para iniciarte en la escalada.",
  },
  {
    id: 2,
    nombre: "Curso Intermedio Escalada en Roca",
    categoria: "escalada",
    precio: 100000,
    imagen: escaladaImg,
    descripcion: "Escala al siguiente nivel. Requiere conocimientos previos.",
  },
  {
    id: 3,
    nombre: "Curso Avanzado Escalada en Roca",
    categoria: "escalada",
    precio: 200000,
    imagen: cursoAvanzadaImg,
    descripcion: "Curso avanzado para escaladores con experiencia.",
  },
  {
    id: 4,
    nombre: "Trekking",
    categoria: "trekking",
    precio: 20000,
    imagen: trekkingImg,
    descripcion: "Salida grupal y distendida en la naturaleza.",
  },
  {
    id: 5,
    nombre: "Mountain Bike Road",
    categoria: "bike",
    precio: 120000,
    imagen: mountainBikeImg,
    descripcion: "Salida grupal en bici por la montaña.",
  },
];

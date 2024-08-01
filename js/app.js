class Peliculas {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
    }
}

const peliculas = [
    new Peliculas("Intensamente", "Animacion", 2015),
    new Peliculas("Elementos", "Animacion", 2023),
    new Peliculas("Saw", "Terror", 2004),
    new Peliculas("La noche del demonio", "Terror", 2010),
    new Peliculas("Kung fu Panda", "Comedia", 2008),
    new Peliculas("¿Y donde estan las rubias?", "Comedia", 2004),
    new Peliculas("Tomb Raider", "Accion", 2001),
    new Peliculas("Los Vengadores", "Accion", 2012),
    new Peliculas("Wonka", "Musicales", 2016),
    new Peliculas("La la land", "Musicales", 2016)
];

const generos = document.querySelectorAll(".btn-genero");
const movies = document.querySelector(".btn-all");
const lista = document.querySelector("#movie-list");
const favoritas = document.querySelector("#movie-fav");

let movieFavs = JSON.parse(localStorage.getItem("movieFavs")) || [];






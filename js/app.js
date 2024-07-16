let pregunta = prompt("Que genero de pelicula te gusta mas?: \n A) Animacion \n B) Terror \n C) Comedia \n D) Accion \n E) Musicales \n F) Peliculas disponibles").toUpperCase();

const peliculas = [
    {
        nombre:"Intensamente",
        genero:"Animacion",
        anio: 2015,
    },
    {
        nombre:"Saw",
        genero:"Terror",
        anio: 2004,
    },
    {
        nombre:"Kung Fu Panda",
        genero:"Comedia",
        anio: 2008,
    },
    {
        nombre:"Tomb Raider",
        genero:"Accion",
        anio: 2001,
    },    
    {
        nombre:"Wonka",
        genero:"Musicales",
        anio: 2023,
    },
]

if (pregunta === "A") {
    console.log(peliculas[0]);
} else if (pregunta === "B") {
    console.log(peliculas[1]);
} else if (pregunta === "C") {
    console.log(peliculas[2]);
} else if (pregunta === "D"){
    console.log(peliculas[3]);
} else if (pregunta === "E") {
    console.log(peliculas[4]);
} else if (pregunta === "F"){
    console.log(peliculas);
} else {
    alert("Ingresa una opción correcta, por favor.");
}





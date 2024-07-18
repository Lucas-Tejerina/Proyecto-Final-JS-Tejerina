const peliculas = [
    {
        titulo: "Intensamente",
        genero: "Animacion",
        anio: 2015,
    },
    {
        titulo: "Elementos",
        genero: "Animacion",
        anio: 2023
    },
    {
        titulo: "Saw",
        genero: "Terror",
        anio: 2004,
    },
    {
        titulo: "La noche del demonio",
        genero: "Terror",
        anio: 2010
    },
    {
        titulo: "Kung Fu Panda",
        genero: "Comedia",
        anio: 2008,
    },
    {
        titulo: "¿Y donde estan las rubias?",
        genero: "Comedia",
        anio: 2004
    },
    {
        titulo: "Tomb Raider",
        genero: "Accion",
        anio: 2001,
    },
    {
        titulo: "Los vengadores",
        genero: "Accion",
        anio: 2012
    },
    {
        titulo: "Wonka",
        genero: "Musicales",
        anio: 2023,
    },
    {
        titulo: "La la land",
        genero: "Musicales",
        anio: 2016
    }
];

function mostrarPeliculas(generoSeleccionado) {
    peliculas.filter((pelicula) => {
        if (pelicula.genero === generoSeleccionado) {
            console.log(`${pelicula.titulo} es una película del género ${pelicula.genero} estrenada en el año ${pelicula.anio}`);
        }
    });
}


let opcion = prompt("¿Qué género de película te gusta más?\nA) Animacion\nB) Terror\nC) Comedia\nD) Accion\nE) Musicales\nF) Películas disponibles").toUpperCase();


switch (opcion) {
    case "A":
        mostrarPeliculas("Animacion"); 
        break;
    case "B":
        mostrarPeliculas("Terror"); 
        break;
    case "C":
        mostrarPeliculas("Comedia"); 
        break;
    case "D":
        mostrarPeliculas("Accion"); 
        break;
    case "E":
        mostrarPeliculas("Musicales"); 
        break;
    case "F":
        console.log("Películas disponibles:");
        peliculas.forEach((pelicula) => {
            console.log(`${pelicula.titulo} - ${pelicula.genero} (${pelicula.anio})`);
        });
        break;
    default:
        console.log("Ingresa una opción válida");
        break;
}

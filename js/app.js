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

let genero = prompt("Que genero de pelicula te gusta mas?: \n A) Animacion \n B) Terror \n C) Comedia \n D) Accion \n E) Musicales \n F) Peliculas disponibles").toUpperCase();

switch (genero) {
    case "A":
        genero = "Animacion"
        break;
    case "B":
        genero = "Terror"
        break;
    case "C":
        genero = "Comedia"
        break;
    case "D":
        genero = "Accion"
        break;
    case "E":
        genero = "Musicales"
        break;
    case "F":
        genero = "Peliculas Disponibles"
        break;
    default:
        genero = ""
        break;
}




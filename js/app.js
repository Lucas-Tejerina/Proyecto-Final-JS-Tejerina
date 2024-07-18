const peliculas = [
    {
        titulo:"Intensamente",
        genero:"Animacion",
        anio: 2015,
    },
    {
        titulo:"Elementos",
        genero:"Animacion",
        anio: 2023
    },
    {
        titulo:"Saw",
        genero:"Terror",
        anio: 2004,
    },
    {
        titulo:"La noche del demonio",
        genero:"Terror",
        anio: 2010
    },
    {
        titulo:"Kung Fu Panda",
        genero:"Comedia",
        anio: 2008,
    },
    {
        titulo:"¿Y donde estan las rubias?",
        genero:"Comedia",
        anio: 2004
    },
    {
        titulo:"Tomb Raider",
        genero:"Accion",
        anio: 2001,
    },    
    {
        titulo:"Los vengadores",
        genero:"Accion",
        anio: 2012
    },
    {
        titulo:"Wonka",
        genero:"Musicales",
        anio: 2023,
    },
    {
        titulo:"La la land",
        genero:"Musicales",
        anio: 2016
    }
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

peliculas.filter ((elemento) => {
    if(elemento.genero === genero)
        console.log(elemento.titulo + " " + "es una pelicula del genero de" + " " + elemento.genero + " " + "estrenada en el año" + " " + elemento.anio );
})



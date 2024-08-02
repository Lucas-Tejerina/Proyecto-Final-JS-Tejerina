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

const moviesList = document.getElementById('movies-list');
const favoritesList = document.getElementById('favorites-list');
const genreButtons = document.querySelectorAll('.genre-btn');
const allMoviesBtn = document.getElementById('all-movies-btn');

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function mostrarPeliculas(generoSeleccionado) {
    moviesList.innerHTML = '';

    const peliculasFiltradas = peliculas.filter((pelicula) => {
        return pelicula.genero === generoSeleccionado;
    });

    peliculasFiltradas.forEach((pelicula) => {
        const li = document.createElement('li');
        li.textContent = `${pelicula.titulo} - ${pelicula.genero} (${pelicula.anio})`;
        const favBtn = document.createElement('button');
        favBtn.textContent = 'Agregar a Favoritos';
        favBtn.addEventListener('click', () => agregarAFavoritos(pelicula));
        li.appendChild(favBtn);
        moviesList.appendChild(li);
    });
}

function mostrarFavoritos() {
    favoritesList.innerHTML = '';

    favorites.forEach((pelicula) => {
        const li = document.createElement('li');
        li.textContent = `${pelicula.titulo} - ${pelicula.genero} (${pelicula.anio})`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.addEventListener('click', () => eliminarDeFavoritos(pelicula));
        li.appendChild(removeBtn);
        favoritesList.appendChild(li);
    });
}

function agregarAFavoritos(pelicula) {
    if (!favorites.some(fav => fav.titulo === pelicula.titulo)) {
        favorites.push(pelicula);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        mostrarFavoritos();
    }
}

function eliminarDeFavoritos(pelicula) {
    favorites = favorites.filter(fav => fav.titulo !== pelicula.titulo);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    mostrarFavoritos();
}

genreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const genero = button.getAttribute('data-genre');
        mostrarPeliculas(genero);
    });
});

allMoviesBtn.addEventListener('click', () => {
    moviesList.innerHTML = '';
    peliculas.forEach((pelicula) => {
        const li = document.createElement('li');
        li.textContent = `${pelicula.titulo} - ${pelicula.genero} (${pelicula.anio})`;
        const favBtn = document.createElement('button');
        favBtn.textContent = 'Agregar a Favoritos';
        favBtn.addEventListener('click', () => agregarAFavoritos(pelicula));
        li.appendChild(favBtn);
        moviesList.appendChild(li);
    });
});


mostrarFavoritos();



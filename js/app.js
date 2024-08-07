let tarjetas = [
    'img/erza.webp',
    'img/erza.webp',
    'img/gray.webp',
    'img/gray.webp',
    'img/happy.webp',
    'img/happy.webp',
    'img/lucy.webp',
    'img/lucy.webp',
    'img/natsu.webp',
    'img/natsu.webp',
    'img/wendy.webp',
    'img/wendy.webp'
];

/*    Variables    */

let cartasVolteadas = 0;


// tarjetas = tarjetas.sort(()=>{return Math.random () -0.5});
// console.log(tarjetas);




/* Funcionamiento del Boton Reiniciar*/

const botonReiniciar = document.querySelector('.section-btn button');

botonReiniciar.addEventListener('click', reiniciarCards);

function reiniciarCards() {
    tarjetas = tarjetas.sort(()=>{return Math.random () -0.5});
}



/* Voltear Cartas */

const cardVolteada = document.querySelectorAll('div');

cardVolteada.addEventListener('click', voltear);

function voltear() {
    cartasVolteadas++;
    console.log(voltear);
    
}



// const card = document.querySelectorAll('div');
// const botonReiniciar = document.querySelector('.section-btn button');

// function r

// card.forEach(cards => {
//     cards.addEventListener('click', destapar)
// })










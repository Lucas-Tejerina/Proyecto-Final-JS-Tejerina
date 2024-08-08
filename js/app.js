let tarjetas = [
    './../img/erza.webp',
    './../img/erza.webp',
    './../img/gray.webp',
    './../img/gray.webp',
    './../img/happy.webp',
    './../img/happy.webp',
    './../img/lucy.webp',
    './../img/lucy.webp',
    './../img/natsu.webp',
    './../img/natsu.webp',
    './../img/wendy.webp',
    './../img/wendy.webp'
];

/*    Variables    */

let tarjetaVolteada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let aciertos = 0;

tarjetas = tarjetas.sort(() => Math.random() - 0.5);

const cardVolteada = document.querySelectorAll('.card');
cardVolteadas.forEach(card => {
    card.addEventListener('click', function() {
        voltear(this);
    });
});

function voltear (id){
    
    tarjetaVolteada++;

    if(tarjetaVolteada == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = tarjetas[id];
        tarjeta1.innerHTML = `<img src="${primerResultado}" alt="Imagen 1">`;
        tarjeta1.disabled = true;
    }else if(tarjetaVolteada == 2) {
        tarjeta2 = document.getElementById(id);
        segundoResultado = tarjetas[id];
        tarjeta2.innerHTML = `<img src="${segundoResultado}" alt="Imagen 2">`;
        tarjeta2.disabled = true;
    }
}


function 

// tarjetas = tarjetas.sort(()=>{return Math.random () -0.5});
// console.log(tarjetas);




/* Funcionamiento del Boton Reiniciar*/

const botonReiniciar = document.querySelector('.section-btn button');

botonReiniciar.addEventListener('click', reiniciarCards);

function reiniciarCards() {
    tarjetas = tarjetas.sort(()=>{return Math.random () -0.5});
}



/* Voltear Cartas */

const cardVolteadas = document.querySelectorAll('.card');

cardVolteadas.forEach(card => {
    card.addEventListener('click', voltear);
});

function voltear(e) {
    cartasVolteadas++;
    console.log(e.target.id);

    if (cartasVolteadas == 1){
        card1 = document.getElementById(id);
        card1.innerHTML = tarjetas[id];

    }
}



// const card = document.querySelectorAll('div');
// const botonReiniciar = document.querySelector('.section-btn button');

// function r

// card.forEach(cards => {
//     cards.addEventListener('click', destapar)
// })










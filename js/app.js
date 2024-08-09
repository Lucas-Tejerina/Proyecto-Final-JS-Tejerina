let tarjetas = []

fetch("./../data/data.json")
.then((data)=>data.json())
.then(data=> tarjetas = data.sort(() => Math.random() - 0.5))
.catch(()=> console.log("error al conseguir los datos"))


let tarjetaVolteada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let aciertos = 0;
let tiempo = 30;
let temporizador = false;
let tiempoRestanteId = null;

let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('time');

document.getElementById('btn-reinicio').addEventListener('click', btnReinicio);

function btnReinicio() {
    tarjetas = tarjetas.sort(() => Math.random() - 0.5);

    const cardVolteadas = document.querySelectorAll('.card');
    cardVolteadas.forEach(card => {
        card.innerHTML = '';
        card.disabled = false;
    });

    tarjetaVolteada = 0;
    tarjeta1 = null;
    tarjeta2 = null;
    primerResultado = null;
    segundoResultado = null;

    clearInterval(tiempoRestanteId);
    tiempo = 30;
    mostrarTiempo.innerHTML = `Tiempo: ${tiempo} seg.`;
    temporizador = false;

    aciertos = 0;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}/6`;
}


const cardVolteadas = document.querySelectorAll('.card');

cardVolteadas.forEach(card => {
    card.addEventListener('click', function() {
        voltear(this);
    });
});

function iniciarTiempo(){
    tiempoRestanteId = setInterval(()=>{
    tiempo--;
    mostrarTiempo.innerHTML = `Tiempo: ${tiempo} seg.`;

    if(tiempo == 0){
        clearInterval(tiempoRestanteId);
        alert("Perdiste!");
    }

    },1000)
}

function voltear(carta) {

    if(temporizador == false){
        iniciarTiempo();
        temporizador = true;
    }

    const id = carta.id;

    if (tarjetaVolteada === 0) {
        tarjetaVolteada = 1;
        tarjeta1 = carta;
        primerResultado = tarjetas[id];
        tarjeta1.innerHTML = `<img src="${primerResultado}" alt="Imagen 1">`;
        tarjeta1.disabled = true;
    } else if (tarjetaVolteada === 1) {
        tarjetaVolteada = 2;
        tarjeta2 = carta;
        segundoResultado = tarjetas[id];
        tarjeta2.innerHTML = `<img src="${segundoResultado}" alt="Imagen 2">`;
        tarjeta2.disabled = true;

        setTimeout(comparacion, 800);
    }
}

function comparacion() {
    if (primerResultado === segundoResultado) {
        aciertos++;
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}/6`
        if(aciertos === 6){
            alert("Victoria")
        }
    } else {
        tarjeta1.innerHTML = '';
        tarjeta2.innerHTML = '';
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
    }

    tarjetaVolteada = 0;
}













let tarjetas = []

fetch("./../data/data.json")
.then((data)=>data.json())
.then(data=> tarjetas = data.sort(() => Math.random() - 0.5))
.catch(()=> console.log("error al conseguir los datos"))

/*Variables*/

let tarjetaVolteada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let aciertos = 0;
let tiempo = 30;
let temporizador = false;
let tiempoRestanteId = null;
const maxLista = 5;

let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('time');
const cardVolteadas = document.querySelectorAll('.card');

document.getElementById('reset').addEventListener('click', reset);

mostrarHistorial();

/* Boton de Reinicio */

function reset() {
    tarjetas = tarjetas.sort(() => Math.random() - 0.5);
    cardVolteadas.forEach(card => {
        card.innerHTML = '';
        card.disabled = false;
        card.style.pointerEvents = 'unset'
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

/*Voltear Cartas */

cardVolteadas.forEach(card => {
    card.addEventListener('click', function() {
        voltear(this);
    });
});

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
        tarjeta1.style.pointerEvents = 'none';
    } else if (tarjetaVolteada === 1) {
        tarjetaVolteada = 2;
        tarjeta2 = carta;
        segundoResultado = tarjetas[id];
        tarjeta2.innerHTML = `<img src="${segundoResultado}" alt="Imagen 2">`;
        tarjeta2.disabled = true;
        tarjeta2.style.pointerEvents = 'none';
        setTimeout(comparacion, 400);
    }
}

/* Inicio del tiempo */

function iniciarTiempo(){
    tiempoRestanteId = setInterval(()=>{
    tiempo--;
    mostrarTiempo.innerHTML = `Tiempo: ${tiempo} seg.`;
    if(tiempo == 0){
        clearInterval(tiempoRestanteId);
        Swal.fire({
            position: "center",
            icon: "error",
            title: "😢¡Has perdido!😢",
            showConfirmButton: false,
            timer: 1500
        });
    }
    },1000)
}

/* Comparacion de las cartas */

function comparacion() {
    if (primerResultado === segundoResultado) {
        aciertos++;
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}/6`;
        if (aciertos === 1) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "✨¡Felicitaciones, has ganado!✨",
                showConfirmButton: false,
                timer: 1500
            });
            clearInterval(tiempoRestanteId);
            const userName = localStorage.getItem('user');
            if (userName) {
                let historial = JSON.parse(localStorage.getItem('historial')) || [];
                historial = actualizarHistorial(historial, { name: userName, score: aciertos, time: 30 - tiempo });
                localStorage.setItem('historial', JSON.stringify(historial));
                mostrarHistorial()
            }
            reset()
        }
    } else {
        tarjeta1.innerHTML = '';
        tarjeta2.innerHTML = '';
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjeta1.style.pointerEvents = 'unset'
        tarjeta2.style.pointerEvents = 'unset'
    }
    tarjetaVolteada = 0;
}

/* Historial de jugadores*/

function mostrarHistorial() {
    const ulElement = document.querySelector('.section__scores ul');
    let historial = JSON.parse(localStorage.getItem('historial')) || [];
    ulElement.innerHTML = '';
    historial.slice(0, maxLista).forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name} tardó ${entry.time} seg`;
        ulElement.appendChild(li);
    });
}

function actualizarHistorial(historial, nuevoRegistro) {
    if (historial.length >= maxLista) {
        historial.sort((a, b) => a.time - b.time);
        if (nuevoRegistro.time < historial[historial.length - 1].time) {
            historial[historial.length - 1] = nuevoRegistro;
        }
    } else {
        historial.push(nuevoRegistro);
    }
    historial.sort((a, b) => a.time - b.time);
    return historial.slice(0, maxLista);
}
















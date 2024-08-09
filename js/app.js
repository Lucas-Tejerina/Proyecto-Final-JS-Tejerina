let tarjetas = []

fetch("./../data/data.json").then((data)=>
    data.json()
).then(data=> tarjetas = data.sort(() => Math.random() - 0.5)).catch(()=> console.log("error al conseguir los datos")
)


let tarjetaVolteada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let aciertos = 0;


function btnReinicio(){
    tarjetas = tarjetas.sort(() => Math.random() - 0.5)
}

document.getElementById('#btn-reinicio').addEventListener('click', btnReinicio)



// tarjetas = tarjetas.sort(() => Math.random() - 0.5);

const cardVolteadas = document.querySelectorAll('.card');

cardVolteadas.forEach(card => {
    card.addEventListener('click', function() {
        voltear(this);
    });
});

function voltear(carta) {
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













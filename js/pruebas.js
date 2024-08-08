let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let aciertos = 0;

let numeros = [
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

numeros = numeros.sort(() => Math.random() - 0.5);

function destapar(id) {
    tarjetasDestapadas++;

    if (tarjetasDestapadas === 1) {
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="${primerResultado}" alt="Imagen 1">`;
        tarjeta1.classList.add('destapada');
        tarjeta1.disabled = true; // Desactiva clic en tarjeta destapada
    } else if (tarjetasDestapadas === 2) {
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="${segundoResultado}" alt="Imagen 2">`;
        tarjeta2.classList.add('destapada');
        tarjeta2.disabled = true; // Desactiva clic en tarjeta destapada

        if (primerResultado === segundoResultado) {
            tarjetasDestapadas = 0;
            aciertos++;
            if (aciertos === 6) {  // 6 parejas en total
                alert("¡Has ganado!");
            }
        } else {
            setTimeout(() => {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.classList.remove('destapada');
                tarjeta2.classList.remove('destapada');
                tarjeta1.onclick = () => destapar(id);  // Reactiva clic en tarjeta
                tarjeta2.onclick = () => destapar(id);  // Reactiva clic en tarjeta
                tarjetasDestapadas = 0;
            }, 800);
        }
    }
}

function reiniciar() {
    // Reinicia el juego recargando la página
    location.reload();
}




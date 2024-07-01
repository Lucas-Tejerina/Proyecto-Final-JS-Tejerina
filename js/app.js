let pregunta = prompt("¿Cuál es tu color favorito?: \n A) El Rojo \n B) El Azul \n C) El Verde").toUpperCase();

if (pregunta === "A") {
    alert("Furioso como el fuego");
} else if (pregunta === "B") {
    alert("Tranquilo como el mar");
} else if (pregunta === "C") {
    alert("Revoltoso como la naturaleza");
} else {
    alert("Ingresa una opción correcta, por favor.");
}

function sumarNumeros() {
    let numero = parseInt(prompt("Por favor ingrese un número POSITIVO para hacer la suma:"));

    while (isNaN(numero) || numero <= 0) {
        numero = parseInt(prompt("Ingresa un número válido y positivo, por favor:"));
    }

    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    alert("La suma de los números del 1 al " + numero + " es: " + suma);
}

sumarNumeros();




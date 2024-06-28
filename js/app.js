let pregunta = prompt ("Cual es tu color favorito?: \n A) El Rojo \n B) El Azul \n C) El Verde") .toLocaleUpperCase();

if (pregunta === "A"){
    alert("Furioso como el fuego")
}else if (pregunta === "B"){
    alert("Tranquilo como el mar")
}else if (pregunta === "C") {
    alert("Revoltoso como la naturaleza")
}else {
    alert("Ingresa una opcion correcta, por favor.")
}


let numero = parseInt(prompt("Por favor ingrese un numero POSITIVO para hacer la suma:"));

if (isNaN(numero) || numero <= 0) {
    alert("Ingresa un numero positivo valido, por favor.");
} else {
    let suma = 0;
    let i = 1;

    while (i <= numero) {
        suma = suma + i;
        i++;
    }

    alert("La suma de los números del 1 al " + numero + " es: " + suma);
}



let pregunta = prompt ("Cual es tu color favorito?: \n A) El Rojo \n B) El Azul \n C) El Verde") .toLocaleUpperCase();

if (pregunta === "A"){
    alert("Ardiente como el fuego")
}else if (pregunta === "B"){
    alert("Tranquilo como el mar")
}else if (pregunta === "C") {
    alert("Revoltoso como la naturaleza")
}else {
    alert("Ingresa una opcion correcta, por favor.")
}



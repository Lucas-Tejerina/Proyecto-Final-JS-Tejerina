document.getElementById('login').addEventListener('click', redireccionar);

function redireccionar() {
    const userInput = document.getElementById('user').value.trim();

    if (userInput === "") {
        alert("Por favor ingresa un nombre válido");
        return;
    }

    for (let i = 0; i < userInput.length; i++) {
        const verificacion = userInput[i];
        if (!isNaN(verificacion) && verificacion !== ' ') {
            alert("El nombre solo debe contener letras");
            return;
        }
    }
    
    window.location.href = "/pages/juego.html";
}







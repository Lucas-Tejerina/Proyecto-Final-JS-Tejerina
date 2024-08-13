const btnLogin = document.getElementById('login');
if(btnLogin){
    btnLogin.addEventListener('click', redireccionar);
}

/*Redireccion al juego*/

function redireccionar() {
    const userInput = document.getElementById('user').value.trim();
    if (userInput === "") {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "😪 Ingresa un nombre valido, por favor 😪",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }
    for (let i = 0; i < userInput.length; i++) {
        const verificacion = userInput[i];
        if (!isNaN(verificacion) && verificacion !== ' ') {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "😪 Ingresa un nombre valido, por favor 😪",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
    }
    let names = JSON.parse(localStorage.getItem('names')) || [];
    localStorage.setItem('user', userInput);
    names.push(userInput);
    localStorage.setItem('names', JSON.stringify(names));
    window.location.href = "/pages/juego.html";
}







function askUsername() {
    let username = localStorage.getItem('username');
    if (!username) {
        do {
            username = prompt("Tu nombre de usuario (Minimo 3 caracteres, solo letras y números):");
        } while (!username || username.length < 3 || /[^a-zA-Z0-9]/.test(username));
        localStorage.setItem('username', username);
    }
    return username;
}

function updateUsername(newUsername) {
    localStorage.setItem('username', newUsername);
    document.getElementById("welcome-message").textContent = "Bienvenido " + newUsername;
}

function changeUsername() {
    let newUsername;
    do {
        newUsername = prompt('Tu nombre de usuario (Minimo 3 caracteres, solo letras y números):');
    } while (newUsername && (newUsername.length < 3 || /[^a-zA-Z0-9]/.test(newUsername)));
    
    if (newUsername) {
        updateUsername(newUsername);
    }
}
function contact() {
    window.open("https://www.instagram.com/thebytrak/", "_blank");
}

function requestFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

window.onload = function() {
    const username = askUsername();
    updateUsername(username);
    requestFullScreen(document.documentElement);
}

let jugador;
let pc;

function backhomestart() {
    window.location.href = 'index.html';
}
function backhome() {
    window.location.href = '../index.html';
}
function new_start() {
    alert('¡Comienza el juego!')
    window.location.href = 'Piedra_Papel_Tijera.html';
}
function irAPaginaNueva() {
    window.location.href = '../Piedra_Papel_Tijera.html';
}

function rock_selected() {
    jugador = 1
    alert("Elegiste piedra🪨");
    pc_select()
}

function paper_selected() {
    jugador = 2
    alert("Elegiste Papel🧻");
    pc_select()
}

function scissors_selected() {
    jugador = 3
    alert("Elegiste Tijera✂️");
    pc_select()
}

function pc_select() {
    pc = Math.floor(Math.random() * 3) + 1;
    if (pc == 1) {
        alert("CPU eligió piedra🪨");
    } else if (pc == 2) {
        alert("CPU eligió Papel🧻");
    } else if (pc == 3) {
        alert("CPU eligió Tijera✂️");
    }
    localStorage.setItem('pc', pc);
    startgame();
}

//Fight
function startgame() {
    localStorage.setItem('jugador', jugador);
    if (pc == 1 && jugador == 1) {
        window.location.href = "Results/piedravspiedra.html";
    } else if (pc == 2 && jugador == 2) {
        window.location.href ="Results/papelvspapel.html";
    } else if (pc == 3 && jugador == 3) {
        window.location.href = "Results/tijeravstijera.html";
    } else if (pc == 1 && jugador == 2 || pc == 3 && jugador == 1 || pc == 2 && jugador == 3) {
        window.location.href = "Results/winner.html";
    } else {
        window.location.href = "Results/loser.html";
    }
}

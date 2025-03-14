const piedra = document.getElementsByClassName('boton-jugada')[0];
const papel = document.getElementsByClassName('boton-jugada')[1];
const tijera = document.getElementsByClassName('boton-jugada')[2];

let contadorJugador = 0;
let contadorOrdenador = 0;

const resultadoJugador = document.getElementById('contador-usuario');
const resultadoOrdenador = document.getElementById('contador-ordenador');



piedra.addEventListener('click', () => {
    const jugador = 1;
    const ordenador = Math.floor(Math.random() * 3);
    if (ordenador === 2) {
        console.log('Ganaste');
        contadorJugador++;
        const resultados = document.getElementById('resultados');
        const mensaje = document.createElement('p');
        resultados.appendChild(mensaje).insertAdjacentHTML('¡Has ganado!');
    }
    else if (ordenador === 0) {
        console.log('Empate');
    }
    else {
        console.log('Perdiste');
        contadorOrdenador++;
    }
    console.log(resultadoJugador.innerText="Tus puntos: " + contadorJugador);
    console.log(resultadoOrdenador.innerText="Puntos de la máquina: " + contadorOrdenador);
});

papel.addEventListener('click', () => {
    const jugador = 1;
    const ordenador = Math.floor(Math.random() * 3);
    if (ordenador === 0) {
        console.log('Ganaste');
        contadorJugador++;
    }
    else if  (ordenador === 1) {
        console.log('Empate');
    }
    else {
        console.log('Perdiste');
        contadorOrdenador++;
    }
    console.log(resultadoJugador.innerText="Tus puntos: " + contadorJugador);
    console.log(resultadoOrdenador.innerText="Puntos de la máquina: " + contadorOrdenador);
});

tijera.addEventListener('click', () => {
    const jugador = 1;
    const ordenador = Math.floor(Math.random() * 3);
    if (ordenador === 1) {
        console.log('Ganaste');
        contadorJugador++;
    }
    else if  (ordenador === 2) {
        console.log('Empate');
    }
    else {
        console.log('Perdiste');
        contadorOrdenador++;
    }
    console.log(resultadoJugador.innerText="Tus puntos: " + contadorJugador);
    console.log(resultadoOrdenador.innerText="Puntos de la máquina: " + contadorOrdenador);
});

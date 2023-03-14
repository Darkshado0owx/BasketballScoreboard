let contador1 = 0
let contador2 = 0

const puntosSpanHome = document.getElementById("home-el")
const puntosSpanGuest= document.getElementById("guest-el")

function unoli1() {
    contador1 += 1
    puntosSpanHome.textContent = contador1
}

function dosli1() {
    contador1 += 2
    puntosSpanHome.textContent = contador1
}

function tresli1() {
    contador1 += 3
    puntosSpanHome.textContent = contador1
}

function unoli2() {
    contador2 += 1
    puntosSpanGuest.textContent = contador2
}

function dosli2() {
    contador2 += 2
    puntosSpanGuest.textContent = contador2
}

function tresli2() {
    contador2 += 3
    puntosSpanGuest.textContent = contador2
}

function reset() {
    puntosSpanHome.textContent = 0;
    puntosSpanGuest.textContent = 0;
}



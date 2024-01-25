let numeroSecreto = 0;
let contador = 0;
let numeroSorteado = [];
numeroSorteado.findIndex
let numeroMaximo = 10;

function verificarNumero(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto); muestra el numero en consola
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el numero lo conseguiste en ${contador} ${(contador == 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p',`El numero es menor`);
        }else{
            asignarTextoElemento('p',`El numero es mayor`);
        }
        limpiarInput();
    }
    contador++;
}

function limpiarInput(){
    document.getElementById('valorUsuario').value = "";
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numero = Math.floor(Math.random()*10)+1;

    if(numeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Has alcanzado el limite de intentos');
    }else{

        if(numeroSorteado.includes(numero)){
            return generarNumeroSecreto();
        }else{
            numeroSorteado.push(numero);
            return numero;
        }
    }
}

console.log(numeroSecreto);
console.log(numeroSorteado);

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Elige un numero del 1 al ${numeroMaximo}.`);
    contador = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    //limpiar el input
    limpiarInput();
    //restablecer el parrafo
    //reiniciar el contador
    //generar nuevamente el aleatorio
    condicionesIniciales();
    //deshabilitar el boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
condicionesIniciales();
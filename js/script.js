//Llamamos al elemento del DOM.
let cuentaAtras = document.getElementById("countdown");
const botonRestablecer = document.getElementById("restart");
let inputEntrada = document.getElementById("userInput");
let resultado = document.getElementById("result");
let intervalo

function comenzarjuego(){
    clearInterval(intervalo)
    let numerodeUsuario = Number(inputEntrada.value)

    let segundos = 5;
    
    intervalo = setInterval(() => {
       cuentaAtras.textContent=segundos;
       segundos--;
       if(segundos<0){
           clearInterval(intervalo)
           let numeroaleatorio = Math.floor(Math.random()*3)+1;
           console.log("Este es el numero secreto: ",numeroaleatorio)
           if (numerodeUsuario === numeroaleatorio){
               resultado.textContent = `¡¡Has salvado al mundo!! La combinacion era: ${numeroaleatorio}`
           } else{
               resultado.textContent = `¡¡Hemos muerto todos!! La clave de la bomba era ${numeroaleatorio} y tu seleccionaste el ${numerodeUsuario}`
           }
        }
}, 1000)
}
    

inputEntrada.addEventListener("change", comenzarjuego);
botonRestablecer.addEventListener("click", reiniciarjuego);

function reiniciarjuego() {
    clearInterval(intervalo);
    cuentaAtras.textContent = "";
    inputEntrada.value = "";
    resultado.textContent = "";
}























//crea una promesa con un numero aleatorio del 1 al 3.  OK
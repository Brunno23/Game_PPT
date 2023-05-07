//  CONSOLE.LOG() ABREVIADO 
let c = (a) => {console.log(a)}

//  OPCIONES DISPONIBLES PARA ELEGIR
const posibles = ["piedra", "papel", "tijera"];

//  ARRAYS QUE LLEVAN LA CUENTA DE VICTORIAS, DERROTAS Y EMPATES
let victorias = [];
let derrotas = [];
let empates = [];
let victoriasT = [];
let derrotasT = [];
let empatesT = [];

//  FUNCION QUE SE EJECUTA CADA VEZ QUE EL USUARIO ELIGE UNA OPCION
function eleccion(opcion) {
    let pc = eligePc()
    //  IMPRIME LA ELECCION DEL USUARIO
    let eleccionU = document.getElementById("eleccionU");
    eleccionU.innerText = "Tu elegiste " + opcion.toUpperCase()
    //  IMPRIME LA ELECCION DE LA PC
    let eleccionPC = document.getElementById("eleccionPC");
    eleccionPC.innerText = "La PC eleigió " + pc.toUpperCase()

    //  ELECCION DEL GANADOR
    if (opcion == "piedra" && pc == "tijera") {
        //  muestra quien es el ganador
        ganador("Tu ganas!"); 
        //  array para llevar cuenta de victorias, derrotas y empates
        victorias.push(1); 
        //  muestra una imagen de la eleccion del usuario y la PC
        imagen("imagenU", imgPiedra);
        imagen("imagenPC", imgTijera);
    }
    else if (opcion == "tijera" && pc == "papel") {
        ganador("Tu ganas!"); 
        victorias.push(1);
        imagen("imagenU", imgTijera);
        imagen("imagenPC", imgPapel);
    }
    else if (opcion == "papel" && pc == "piedra") {
        ganador("Tu ganas!"); 
        victorias.push(1);
        imagen("imagenU", imgPapel);
        imagen("imagenPC", imgPiedra);
    }
    else if (pc == "piedra" && opcion == "tijera") {
        ganador("PC gana");
        derrotas.push(1);
        imagen("imagenU", imgTijera);
        imagen("imagenPC", imgPiedra); 
    }
    else if (pc == "tijera" && opcion == "papel") {
    ganador("PC gana");
     derrotas.push(1)
     imagen("imagenU", imgPapel);
     imagen("imagenPC", imgTijera);
    }
    else if (pc == "papel" && opcion == "piedra") {
        ganador("PC gana"); 
        derrotas.push(1)
        imagen("imagenU", imgPiedra);
        imagen("imagenPC", imgPapel);
    
    }
    else {
        ganador("Empate"); 
        empates.push(1);
        if (pc == "papel" && opcion == "papel") {
            imagen("imagenU", imgPapel);
            imagen("imagenPC", imgPapel);
        }
        else if (pc == "tijera" && opcion == "tijera"){
            imagen("imagenU", imgTijera);
            imagen("imagenPC", imgTijera);
        }
        else {
            imagen("imagenU", imgPiedra);
            imagen("imagenPC", imgPiedra);
        }
    }

    //  ACUMULACION DE VICTORIAS, DERROTAS Y EMPATES
    victoriasT = victorias.reduce((a,b) => {return a+b},0);
    derrotasT = derrotas.reduce((a,b) => {return a+b},0);
    empatesT = empates.reduce((a,b) => {return a+b},0);

    //  CONTADOR 
    let historial = document.getElementById("historial");
    historial.innerHTML =  `<p>Victorias: ${victoriasT}</p> <p>Derrotas: ${derrotasT}</p> <p>Empates: ${empatesT}</p>`

    //  PARA QUE SE GUARDE EL HISTORIAL EN EL LOCAL STORAGE
    localStorage.setItem("Victorias", victoriasT);
    localStorage.setItem("Derrotas", derrotasT);
    localStorage.setItem("Empates", empatesT);
}

// FUNCION PARA QUE LA PC ELIJA ALEATORIAMENTE
function eligePc() {
    return posibles[Math.floor(Math.random()*3)]
}

// FUNCION QUE IMPRIME EL RESULTADO DEL DUELO
function ganador (imprimir) {
    let resultado = document.getElementById("resultado");
    resultado.innerText = imprimir
}

// FUNCION QUE LIMPIA EL HISTORIAL DEL DUELO
function limpiarHistorial() {
    victorias = [0]; derrotas = [0];  empates = [0];
    victoriasT = [0]; derrotasT = [0];  empatesT = [0];
    localStorage.setItem("Victorias", victoriasT);
    localStorage.setItem("Derrotas", derrotasT);
    localStorage.setItem("Empates", empatesT);
    document.getElementById("historial").innerHTML =  `<p>Victorias: ${victoriasT}</p> <p>Derrotas: ${derrotasT}</p> <p>Empates: ${empatesT}</p>`
}

//  FUNCION PARA QUE APAREZCA LA IMAGEN DEPENDIENDO DE CUAL ES LA OPCION ELEGIDA
let imgPiedra = `<img src="images/piedra.jpg" alt="Foto de piedra"></img>`;
let imgTijera = `<img src="images/tijera.jpg" alt="Foto de tijera"></img>`;
let imgPapel = `<img src="images/papel.jpg" alt="Foto de papel"></img>`;
function imagen(idParr,img) {document.getElementById(idParr).innerHTML = img}




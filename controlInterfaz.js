var modoDibujo = false;
var pantallaInferior = document.getElementById('pantallaInferior');
var pantallaSuperior = document.getElementById('pantallaSuperior');

/* eventos al hacer click en los botones */
function comprobarBotones(valorPulsado) {
  if (valorPulsado.className === 'boton_operacion') {
    escribirOperacion(valorPulsado.innerHTML);
  } else if (valorPulsado.className === 'boton_numero') {
    escribirOperando(valorPulsado.innerHTML);
  }
}
/* eventos de teclado */
function comprobarTecla(evento) {
  evento = evento.key;
  if (evento === 'Enter') {
    calcular();
  } else if (/^(\+|-|\*|\/)$/.test(evento)) {
    escribirOperacion(evento);
  } else if (/^(\d|\.)$/.test(evento)) {
    escribirOperando(evento);
  }
}
function escribirOperando(input) {
  if (comprobarPantalla(pantallaInferior.innerHTML)) {
    pantallaInferior.innerHTML = input;
  } else {
    pantallaInferior.innerHTML += input;
  }
}

function escribirOperacion(input) {
  var operando = pantallaInferior.innerHTML;
  if (input === '-' && pantallaInferior.innerHTML === '') {
    pantallaInferior.innerHTML = input;
  } else if (comprobarPantalla(pantallaSuperior.innerHTML)) {
    pantallaSuperior.innerHTML = operando + input;
    pantallaInferior.innerHTML = '';
  } else {
    pantallaSuperior.innerHTML += operando + input;
    pantallaInferior.innerHTML = '';
  }
}
/* se filta el resultado para saber de que forma escribir */
function comprobarPantalla(datos) {
  return datos === 'No valido' || datos === 'NaN' || datos === '' ||
    datos === 'Infinity' || datos === 'Funcion no valida';
}
/* se borran los valores de ambas pantallas */
function resetearPantallas() {
  pantallaSuperior.innerHTML = '';
  pantallaInferior.innerHTML = '';
}
/* se cambia el signo multiplicando por -1 el numero introducido */
function cambiarSigno() {
  numeroActual = formatearCadena(pantallaInferior.innerHTML);
  numeroActual = parseFloat(numeroActual) * -1;
  pantallaInferior.innerHTML = numeroActual;
}

function comprobarModoCalculo() {
  inputIntroducido = formatearCadena(pantallaSuperior.innerHTML);
  if (/^X=|^Y=/.test(inputIntroducido)) {
    calcularFuncion();
  } else if (document.getElementById('lienzo').style.visibility === 'visible') {
    pantallaInferior.innerHTML = 'Funcion no valida';
    pantallaSuperior.innerHTML = '';
  } 
}
function botonOperar() {
  var operacionIntroducida = pantallaSuperior.innerHTML + pantallaInferior.innerHTML;
  operacionIntroducida = formatearCadena(operacionIntroducida);
  var resultado = calcular(operacionIntroducida);
  resultado = resultado.toString().replace(/,/g, '.')
    pantallaInferior.innerHTML = resultado;
    pantallaSuperior.innerHTML = '';
}

function formatearCadena(cadena) {
  cadena = cadena.toUpperCase().toString();
  cadena = cadena.replace(/PI/g, Math.PI);
  cadena = cadena.replace(/E(?!N)/g, Math.E);
  return cadena.replace(/,/g, '.');
}
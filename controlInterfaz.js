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
    botonOperar();
  } else if (/^(\+|-|\*|\/)$/.test(evento)) {
    escribirOperacion(evento);
  } else if (/^(\d|\.|X|Y)$/.test(evento)) {
    escribirOperando(evento);
  }
}

/* escribe el operando recibido en la pantalla inferior */
function escribirOperando(input) {
  if (comprobarPantalla(pantallaInferior.innerHTML)) {
    pantallaInferior.innerHTML = input;
  } else {
    pantallaInferior.innerHTML += input;
  }
}

/* pasa el numero actual junto a la operacion recibida a la pantalla superior
si el input es '-' y no hay nada previo, no se trata como operacion */
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
  return datos === 'No valido' || datos == 'Nan' || datos === '' ||
    datos === 'Infinity' || datos === 'infinito' || datos === 'Funcion no valida';
}

/* se borran los valores de ambas pantallas en la calculadora cientifica*/
function resetearPantallaCientifica() {
  pantallaSuperior.innerHTML = '';
  pantallaInferior.innerHTML = '';
}

/* se borran los valores de ambas pantallas en la calculadora cientifica*/
function resetearPantallaFunciones() {
  pantallaSuperior.innerHTML = 'Y=';
  pantallaInferior.innerHTML = '';
}

/* se cambia el signo multiplicando por -1 el numero introducido */
function cambiarSigno() {
  numeroActual = formatearCadena(pantallaInferior.innerHTML);
  if (numeroActual === 'X') {
      pantallaInferior.innerHTML = '-X';
  } else if (numeroActual === '-X') {
      pantallaInferior.innerHTML = 'X';
  } else {
      pantallaInferior.innerHTML = parseFloat(numeroActual) * -1;
  }
}

/* une y opera la cadena con lo introducido y muestra el resultado en la pantalla inferior */
function botonOperar() {
  var operacionIntroducida = pantallaSuperior.innerHTML + pantallaInferior.innerHTML;
  operacionIntroducida = formatearCadena(operacionIntroducida);
  var resultado = calculadora(operacionIntroducida);
  resultado = resultado.toString().replace(/,/g, '.')
    pantallaInferior.innerHTML = resultado;
    pantallaSuperior.innerHTML = '';
}

/* formateo para poder operar la cadena */
function formatearCadena(cadena) {
  cadena = cadena.toUpperCase().toString();
  cadena = cadena.replace(/PI/g, Math.PI);
  cadena = cadena.replace(/E(?!N)/g, Math.E);
  return cadena.replace(/,/g, '.');
}
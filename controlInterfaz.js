var pantallaInferior = document.getElementById('pantallaInferior');
var pantallaSuperior = document.getElementById('pantallaSuperior');

/* recibe un input desde teclado o click en un boton y gestiona que hacer dependiendo de 
su valor */
function comprobarInput(input) {
  if (regExOperaciones.test(input)) {
    escribirOperacion(input);
  } else if (/^(\d|\.|PI|E|X)$/.test(input)) {
    escribirOperando(input);
  } else if (input == 'Enter') {
    botonOperar();
  }
}

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

/* filta el resultado para saber si sobrescribir lo anterior */
function comprobarPantalla(datos) {
  return datos === 'No valido' || datos == 'NaN' || datos === '' ||
    datos === 'Infinity' || datos === 'infinito' || datos === 'Funcion no valida';
}

/* resetea los valores de ambas pantallas en la calculadora cientifica*/
function resetearPantallaCientifica() {
  pantallaSuperior.innerHTML = '';
  pantallaInferior.innerHTML = '';
}

/* resetea los valores de ambas pantallas en la calculadora cientifica*/
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

var temaActual = 'Claro Azul';
function cambiarTema(tema) {
  console.log(tema);
  if (tema != temaActual) {
    if (tema == 'Claro Azul' ) {

    } else if (tema == 'Claro Rojo') {

    } else if (tema == 'Oscuro') {

    }
    temaActual = tema;
  }
}
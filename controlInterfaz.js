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

var temaActual;
function cambiarTema(tema) {
  if (tema !== temaActual) {
    temaActual = tema;
    var colorPrincipal, colorNumeros, colorOperaciones, colorNumeros;
    if (tema == 'Clasico' ) {
      colorPrincipal = '#4285f4';
      colorOperaciones = '#dfe1e5';
      colorNumeros = '#f1f3f4';
    } else if (tema == 'Azul' ) {
      colorPrincipal = '#4285f4';
      colorOperaciones = '#98c0ff';
      colorNumeros = '#cedeff';
    } else if (tema == 'Rojo') {
      colorPrincipal = '#f55d00';
      colorOperaciones = '#ff9752';
      colorNumeros = '#ffcaa6';
    } else if (tema == 'Verde') {
      colorPrincipal = '#00ee76';
      colorOperaciones = '#85ffbd';
      colorNumeros = '#caffe1';
    } else if (tema == 'Verde') {
      colorPrincipal = '#ee0086';
      colorOperaciones = '#ff7dc8';
      colorNumeros = '#ffceed';
    }
    colorPuntos = colorPrincipal;
    document.getElementById('boton_calcular').style.backgroundColor = colorPrincipal;
    document.getElementById('display').style.outlineColor = colorOperaciones;
    var divOperaciones = document.getElementsByClassName('boton_operacion');
    for (divOperacion of divOperaciones) {
      divOperacion.style.backgroundColor = colorOperaciones;
    }
    var divNumeros = document.getElementsByClassName('boton_numero');
    for (divNumero of divNumeros) {
      divNumero.style.backgroundColor = colorNumeros;
    }
  }
}
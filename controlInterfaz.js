var pantallaInferior = document.getElementById('pantallaInferior');
var pantallaSuperior = document.getElementById('pantallaSuperior');

/* recibe un input desde teclado o click en un boton y gestiona que hacer dependiendo de 
su valor */
function comprobarInput(input) {
  if (regExOperaciones.test(input)) {
    escribirOperacion(input);
  } else if (/^(\d|\,|PI|E|X)$/.test(input)) {
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
  resultado = resultado.toString().replace(/,/g, '.');
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
      colorPrincipal = '#005aff';
      colorOperaciones = '#94acff';
      colorNumeros = '#cedcff';
    } else if (tema == 'Rojo') {
      colorPrincipal = '#ff001c';
      colorOperaciones = '#ff7c87';
      colorNumeros = '#ffbec3';
    } else if (tema == 'Naranja') {
      colorPrincipal = '#ff9700';
      colorOperaciones = '#ffc69e';
      colorNumeros = '#ffe5dc';
    }  else if (tema == 'Cyan') {
      colorPrincipal = '#00F9FF';
      colorOperaciones = '#a8f7f9';
      colorNumeros = '#dfffff';
    } else if (tema == 'Verde') {
      colorPrincipal = '#00ff80';
      colorOperaciones = '#a3ffcf';
      colorNumeros = '#d8ffe6';
    } else if (tema == 'Rosa') {
      colorPrincipal = '#ff0090';
      colorOperaciones = '#ff7dc8';
      colorNumeros = '#ffceed';
    } 
    colorPuntos = colorPrincipal;
    document.getElementById('boton_calcular').style.backgroundColor = colorPrincipal;
    document.getElementById('display').style.outlineColor = colorOperaciones;
    for (divOperacion of document.getElementsByClassName('boton_operacion')) {
      divOperacion.style.backgroundColor = colorOperaciones;
    }
    for (divNumero of divNumeros = document.getElementsByClassName('boton_numero')) {
      divNumero.style.backgroundColor = colorNumeros;
    }
  }
}

function controlarZoom(valorZoom) {
  zoom = valorZoom;
  separacionRaya = 10 + (valorZoom / 2);
  tamanoRaya = 4 + (valorZoom / 4);
  calcularFuncion();
}
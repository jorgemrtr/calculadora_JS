/*
CONSTANTES
 PI - Num PI
 E - Num E
OPEACIONES SIMPLES
 - Resta
 + Suma
 * Multiplicacion
 / Division
OPEACIONES COMPLEJAS:
 Funciones
 ^ - Num elevado a otro
 ABS - Valor absoluto de un num
 SEN - Valor del seno de un ángulo (Radianes).
 COS - Valor del coseno de un ángulo (Radianes).
 TAN - Valor de la tangente de un ángulo (radianes)
 LOG10 - Logaritmo en Base 10 de un número.
 LOG2 - logaritmo en Base 2 de un número.
 LN - logaritmo Natural de un número.
 SQRT (Función) Raíz cuadrada de un número.
 RAIZ N (Función) Raíz n-esima de un número, Ejemplo Raíz cúbica, Raíz Cuarta...
*/

//expresiones para operandos y operaciones
var estructuraOperando = /^[-+]?[0-9]+\.?[0-9]+|^[-+]?[0-9]/;
var estructuraUnOperador = /\ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT{1}/;
var estructuraOperaciones = /^-|\+|\*|\/|\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ{1}/;

var inputIntroducido;
var resultado = null;
var unOperador;
var error = false;

function calcular() {
	//asignamos la cadena introducida a una variable
	inputIntroducido = document.getElementById('datosIntroducidos').value.toString();
	inputIntroducido = inputIntroducido.replace("PI", Math.PI);
	inputIntroducido = inputIntroducido.replace(/[^S]E[^N]/, Math.E);
	while (inputIntroducido.length > 0 && !error) {
		analizarInput(inputIntroducido);
	}
	document.getElementById('mostrarDatos').value = resultado;
	resetear();
}

function analizarInput(inputIntroducido) {
	unOperador = false;
	//primer operador
	var operando1;
	if (resultado === null) {
		operando1 = analizarOperando();
	} else {
		operando1 = resultado;
	}
	//operacion
	var operacion = analizarOperacion();
	//segundo operador
	var operando2;
	if (!unOperador) {
		operando2 = analizarOperando();
	} else {
		operando2 = null;
	}

	console.log("operando1: " + operando1);
	console.log("operacion: " + operacion);
	console.log("operando2: " + operando2);
	console.log("Error: " + error);
	console.log("Operaciones restantes: " + inputIntroducido);
        
	if (!error) {
		resultado = realizarOperacion(operando1, operando2, operacion);
	} else {
		resultado = 'Operacion no valida';
	}
}

function analizarOperando() {
	var operando = inputIntroducido.match(estructuraOperando);
	if (operando === null) {
		error = true;
	} else {
		inputIntroducido = inputIntroducido.substring(operando.toString().length, inputIntroducido.length);
		operando = parseFloat(operando);
	}
	return operando;
}

function analizarOperacion() {
	var operacion = inputIntroducido.match(estructuraOperaciones);
	if (operacion === null) {
		error = true;
	} else {
		operacion = operacion.toString();
		inputIntroducido = inputIntroducido.substring(operacion.length, inputIntroducido.length);
		if (operacion.match(estructuraUnOperador)) {
			unOperador = true;
			console.log(' - Un operador - ');
		}
	}
	return operacion;
}

function realizarOperacion(operando1, operando2, operacion) {
	var resultado;
	//Operaciones con 2 operadores
	if (operacion === '-') {
		resultado = operando1 - operando2;
	} else if (operacion === '+') {
		resultado = operando1 + operando2;
	} else if (operacion === '*') {
		resultado = operando1 * operando2;
	} else if (operacion === '/') {
		resultado = operando1 / operando2;
	} else if (operacion === '^') {
		resultado = operando1 ** operando2;
	} else if (operacion === 'RAIZ') {
		resultado = Math.pow(operando2, 1 / operando1);
		//Operaciones con 1 operador
	} else if (operacion === 'ABS') {
		resultado = Math.abs(operando1);
	} else if (operacion === 'SEN') {
		resultado = Math.sin(operando1);
	} else if (operacion === 'COS') {
		resultado = Math.cos(operando1);
	} else if (operacion === 'TAN') {
		resultado = Math.tan(operando1);
	} else if (operacion === 'LOG10') {
		resultado = Math.log10(operando1);
	} else if (operacion === 'LOG2') {
		resultado = Math.log2(operando1);
	} else if (operacion === 'LN') {
		resultado = Math.log(operando1);
	} else if (operacion === 'SQRT') {
		resultado = Math.sqrt(operando1);
	}
	return resultado;
}

function resetear() {
	inputIntroducdo = null;
	resultado = null;
	error = false;
}
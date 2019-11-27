//expresiones regulares para operandos y operaciones
var estructuraOperando = /^[-+]?[0-9]+\.?[0-9]+|^[-+]?[0-9]/;
var estructuraUnOperador = /\ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT{1}/;
var estructuraOperaciones = /^-|\+|\*|\/|\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ{1}/;
var inputIntroducido, resultado, unOperador, error;
var operando1, operando2, operacion;

function calcular() {
    //asignamos la cadena introducida a una variable.
    inputIntroducido = formatearCadena(document.getElementById('datosIntroducidos').innerHTML);
    //se analiza la estructura y se calcula el resultado si no hay errores.
    while (inputIntroducido.length > 0 && !error) {
    	analizarInput();
        if (!error) {
		resultado = operar(parseFloat(operando1), parseFloat(operando2), operacion);
	} else {
		resultado = 'Operacion no valida';
	}
    }
    document.getElementById('mostrarDatos').innerHTML = resultado;
    resultado = null;
    error = false;
}
function cambiarSigno() {
    //asignamos la cadena introducida a una variable.
    inputIntroducido = formatearCadena(document.getElementById('datosIntroducidos').innerHTML);
    var inputOriginal = inputIntroducido;
    //se analiza la estructura y se cambia el ultimo opeador si no hay errores.
    while (inputIntroducido.length > 0 && !error) {
    	analizarInput();
    }
    var ultimoOperando;
    if (operando2 !== null) {
        ultimoOperando = operando2;
    } else {
        ultimoOperando = operando1;
    }
    if (!error) {
        var longitudOperando = inputOriginal.length - ultimoOperando.toString().length;
        ultimoOperando *= -1;
        if (ultimoOperando > 0) {
            ultimoOperando = "+" + ultimoOperando;
        }
        var inputCambiado = inputOriginal.substr(0,longitudOperando) + ultimoOperando;
        document.getElementById('datosIntroducidos').innerHTML = inputCambiado;
    }
    resultado = null;
    error = false;
}
function analizarInput() {
    //se buscan operadores y operaciones, si la estructura esta mal dara error.
	unOperador = false;
	if (resultado === null) {
		operando1 = analizarOperando();
	} else {
		operando1 = resultado;
	}
	operacion = analizarOperacion();
	if (!unOperador) {
		operando2 = analizarOperando();
	} else {
		operando2 = null;
	}
}
function analizarOperando() {
	var operando = inputIntroducido.match(estructuraOperando);
	if (operando === null) {
		error = true;
	} else {
            inputIntroducido = inputIntroducido.substring(operando.toString().length, inputIntroducido.length);
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
		}
	}
	return operacion;
}
function operar(operando1, operando2, operacion) {
	if (operacion === '-') {
		return operando1 - operando2;
	} else if (operacion === '+') {
		return operando1 + operando2;
	} else if (operacion === '*') {
		return operando1 * operando2;
	} else if (operacion === '/') {
		return operando1 / operando2;
	} else if (operacion === '^') {
		return operando1 ** operando2;
	} else if (operacion === 'RAIZ') {
		return Math.pow(operando2, 1 / operando1);
	} else if (operacion === 'ABS') {
		return Math.abs(operando1);
	} else if (operacion === 'SEN') {
		return Math.sin(operando1);
	} else if (operacion === 'COS') {
		return Math.cos(operando1);
	} else if (operacion === 'TAN') {
		return Math.tan(operando1);
	} else if (operacion === 'LOG10') {
		return Math.log10(operando1);
	} else if (operacion === 'LOG2') {
		return Math.log2(operando1);
	} else if (operacion === 'LN') {
		return Math.log(operando1);
	} else if (operacion === 'SQRT') {
		return Math.sqrt(operando1);
	}
}
function formatearCadena(cadena) {
    cadena = cadena.toUpperCase().toString();
    cadena = cadena.replace("PI", Math.PI);
    cadena = cadena.replace(/E(?!N)/g, Math.E);
    return cadena;
}
function modoDibujo() {
    lienzo = document.getElementById('lienzo');
    console.log(lienzo);
}
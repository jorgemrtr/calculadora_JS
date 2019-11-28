var regExOperando = /^[-+]?[0-9]+\.?[0-9]+|^[-+]?[0-9]/;
var regExUnOperando = /\ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT{1}/;
var regExOperaciones = /^-|\+|\*|\/|\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ{1}/;
var inputIntroducido, unOperador, error, operando1, operando2, operacion;
var resultado = null;

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
        document.getElementById('datosIntroducidos').innerHTML = '';
	resultado = null;
	error = false;
}
function analizarInput() {
	//se buscan operadores y operaciones, si la estructura esta mal dara error.
	unOperador = false;
        if (resultado !== null) {
            operando1 = resultado;
        } else {
            operando1 = analizarOperando();
        }
	operacion = inputIntroducido.match(regExOperaciones);
	if (operacion === null) {
		error = true;
	} else {
		operacion = operacion.toString();
		inputIntroducido = inputIntroducido.substring(operacion.length, inputIntroducido.length);
		if (operacion.match(regExUnOperando)) {
			unOperador = true;
		}
                console.log('unOperador: ' + unOperador);
	}
	if (!unOperador) {
		operando2 = analizarOperando();
	} else {
		operando2 = null;
	}
        
	console.log('operando1: ' + operando1);
	console.log('operacion: ' + operacion);
	console.log('operando2: ' + operando2);
	console.log('ERROR: ' + error);
        
}
function analizarOperando() {
    console.log('buscar Operando: ' + inputIntroducido);
	var operando = inputIntroducido.match(regExOperando);
	if (operando === null) {
		error = true;
	} else {
		inputIntroducido = inputIntroducido.substring(operando.toString().length, inputIntroducido.length);
	}
	return operando;
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
	cadena = cadena.replace(/PI/g, Math.PI);
	cadena = cadena.replace(/E(?!N)/g, Math.E);
	return cadena.replace(/,/g, '.');
}
function cambiarSigno() {
	//se multiplica por -1 el numero que se esta introduciendo
	numeroActual = formatearCadena(document.getElementById('mostrarDatos').innerHTML);
        numeroActual = parseFloat(numeroActual) * -1;
        document.getElementById('mostrarDatos').innerHTML = numeroActual;
}
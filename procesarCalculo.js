var regExOperando = /^[-+]?[0-9]+\.?[0-9]+|^[-+]?[0-9]/;
var regExUnOperando = /\ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT{1}/;
var regExOperaciones = /^-|\+|\*|\/|\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ{1}/;
var inputIntroducido, unOperador, error, operando1, operando2, operacion;
var resultado = null;

function calcular() {
    //asignamos la cadena introducida a una variable.
    inputIntroducido = formatearCadena(document.getElementById('pantallaSuperior').innerHTML);
    //se analiza la estructura y se calcula el resultado si no hay errores.
    while (inputIntroducido.length > 0 && !error) {
        analizarInput();
        if (!error) {
            resultado = operar(parseFloat(operando1), parseFloat(operando2), operacion);
        } else {
            resultado = 'No valido';
        }
    }
    document.getElementById('pantallaInferior').innerHTML = resultado;
    document.getElementById('pantallaSuperior').innerHTML = '';
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
    console.log('inputRestante : ' + inputIntroducido);
}
function analizarOperando() {
    var operando = inputIntroducido.match(regExOperando);
    if (operando === null) {
        error = true;
    } else {
        inputIntroducido = inputIntroducido.substring(operando.toString().length, inputIntroducido.length);
    }
    return operando;
}
function operar(operando1, operando2, operacion) {
    var resultado;
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
        resultado = Math.pow(operando2, operando1);
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
    //si tiene decimales se muestran 11 para evitar problema de coma florante
    if (resultado % 1 != 0) {
        resultado = parseFloat(resultado.toPrecision(11));
    }
    return resultado;
}
function formatearCadena(cadena) {
    cadena = cadena.toUpperCase().toString();
    cadena = cadena.replace(/PI/g, Math.PI);
    cadena = cadena.replace(/E(?!N)/g, Math.E);
    return cadena.replace(/,/g, '.');
}

function calcularFuncion() {
    inputIntroducido = formatearCadena(document.getElementById('pantallaSuperior').innerHTML);
    if (inputIntroducido.match()) {

    }
}
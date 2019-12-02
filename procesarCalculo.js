var regExOperando = /^[-+]?[0-9]+\.?[0-9]+|^[-+]?[0-9]/;
var regExUnOperando = /^(ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT){1}/;
var regExOperaciones = /^-|\+|\*|\/|\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ{1}/;
var inputIntroducido, unOperador, error, operando1, operando2, operacion;
var resultado = null;

/* se encarga de gestionar el analisis y calculo a partir de la cadena recibida */
function calculadora(operacionIntroducida) {
    inputIntroducido = formatearCadena(operacionIntroducida);
    while (inputIntroducido.length > 0 && !error) {
        analizarInput();
        if (!error) {
            resultado = operar(parseFloat(operando1), parseFloat(operando2), operacion);
        } else {
            resultado = 'No valido';
        }
    }
    var devolverResultado = resultado;
    resultado = null;
    error = false;
    return devolverResultado;
}

//analiza la estructura siguiendo el orden: operando1 > operacion > operando2
function analizarInput() {
    unOperador = false;
    if (resultado !== null) {
        operando1 = resultado;
    } else {
        operando1 = analizarOperando(); //operando1
    }
    operacion = analizarOperacion(); //operacion
    if (!unOperador) {
        operando2 = analizarOperando(); //operando2
    } else {
        operando2 = null;
    }
    console.log('unOperador: ' + unOperador);
    console.log('operando1: ' + operando1);
    console.log('operacion: ' + operacion);
    console.log('operando2: ' + operando2);
    console.log('ERROR: ' + error);
    console.log('inputRestante : ' + inputIntroducido);
}


/* comprueba que la primera parte del input sea un operando, si es correcto lo guarda y elimina 
del input, si no da error*/
function analizarOperando() {
    var operando = inputIntroducido.match(regExOperando);
    if (operando === null) {
        error = true;
    } else {
        inputIntroducido = inputIntroducido.substring(operando.toString().length, inputIntroducido.length);
    }
    return operando;
}

/* comprueba que la primera parte del input sea una operacion, si es correcto lo guarda y elimina 
del input, si no da error. Tambien controla si la operacion es de uno o varios operandos */
function analizarOperacion() {
    var operacion = inputIntroducido.match(regExOperaciones);
    if (operacion === null) {
        error = true;
    } else {
        operacion = operacion.toString();
        inputIntroducido = inputIntroducido.substring(operacion.length, inputIntroducido.length);
        if (operacion.match(regExUnOperando)) {
            unOperador = true;
        }
    }
    return operacion;
}

/* opera los dos operandos en funcion de la operacion recibida */
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
    //si tiene decimales se muestran 11 para evitar problemas de coma florante
    if (resultado % 1 != 0) {
        resultado = parseFloat(resultado.toPrecision(11));
    }
    return resultado;
}

var valorX, valorY;
function calcularFuncion() {
    limpiar();
    error = false;
    valorX = 0;
    valorY = 0;
    inputIntroducido = formatearCadena(pantallaSuperior.innerHTML + pantallaInferior.innerHTML);
    //transformar los valores de X e Y
    if (/^X=/.test(inputIntroducido)) {
        inputIntroducido = inputIntroducido.substring(2, inputIntroducido.length);
        if (!/X/.test(inputIntroducido) && /Y/.test(inputIntroducido)) {
            recorrerFuncionX();
        } else {
            error = true;
        }
    } else if (/^Y=/.test(inputIntroducido)) {
        console.log('entra');
        inputIntroducido = inputIntroducido.substring(2, inputIntroducido.length);
        if (!/Y/.test(inputIntroducido) && /X/.test(inputIntroducido)) {
            recorrerFuncionY();
        } else {
            error = true;
        }
    } else {
        error = true;
    }
}

function recorrerFuncionX() {
    //cambiar a 20
    for (var i = (totalX/2) * -1; i < totalX/2; i++) {
        valorY = i;
        inputOriginal = inputIntroducido;
        inputIntroducido = inputIntroducido.replace(/Y/g, i);
        while (inputIntroducido.length > 0 && !error) {
            analizarInput();
            if (!error) {
                resultado = operar(parseFloat(operando1), parseFloat(operando2), operacion);
            } else {
                resultado = 'No valido';
            }
        }
        valorX = resultado;
        pintarValores(valorX, valorY);
        resultado = null;
        inputIntroducido = inputOriginal;
    }

}
function recorrerFuncionY() {
    for (var i = (totalY/2) * -1; i < totalY/2; i++) {
        valorX = i;
        inputOriginal = inputIntroducido;
        inputIntroducido = inputIntroducido.replace(/X/g, i);
        while (inputIntroducido.length > 0 && !error) {
            analizarInput();
            if (!error) {
                resultado = operar(parseFloat(operando1), parseFloat(operando2), operacion);
            } else {
                resultado = 'No valido';
            }
        }
        valorY = resultado;
        pintarValores(valorX, valorY);
        resultado = null;
        inputIntroducido = inputOriginal;
    }

}
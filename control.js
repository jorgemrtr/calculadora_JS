/*
 Constantes
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

function calculadora() {
    //asignamos la cadena recibida a una variable
    var inputIntroducido = document.getElementById('datosIntroducidos').value.toString();
    inputIntroducido = inputIntroducido.replace("PI", Math.PI);
    inputIntroducido = inputIntroducido.replace("E", Math.E);
    analizarInput(inputIntroducido);
}

function analizarInput(inputIntroducido) {
    console.log(inputIntroducido);
    console.log();
    var error = false;
    var unOperador = false;
    
    //primer operador
    var operando1 = inputIntroducido.match(estructuraOperando);
    if (operando1 === null) {
        error = true;
    } else {
        operando1 = operando1.toString();
        console.log(operando1);
        console.log();
        inputIntroducido = inputIntroducido.substring(operando1.length, inputIntroducido.length);
    }

    //operacion
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


    var operando2;
    if (!unOperador) {
        //segundo operador
        operando2 = inputIntroducido.match(estructuraOperando);
        if (operando2 === null) {
            error = true;
        } else {
            operando2 = operando2.toString();
            inputIntroducido = inputIntroducido.substring(operando2.length, inputIntroducido.length);
            if (operando2 === 'PI') {
                operando2 = Math.PI;
            } else if (operando2 === 'E') {
                operando2 = Math.E;
            }
        }
    }
    console.log("operando1: " + operando1);
    console.log("operacion: " + operacion);
    console.log("operando2: " + operando2);
    console.log("Error: " + error);
    console.log(inputIntroducido);
    if (!error) {
        realizarOperacion(operando1, operando2, operacion);
    } 
}

function realizarOperacion(operando1, operando2, operacion) {
    operando1 = parseFloat(operando1);
    operando2 = parseFloat(operando2);

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

    } else if (operacion === 'ABS') {
        //Este tipo solo opera a un operador
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

    } else if (operacion === 'RAIZ N') {
        resultado = Math.pow(operando2, 1 / operando1);

    }
    document.getElementById('mostrarDatos').value = resultado;
}


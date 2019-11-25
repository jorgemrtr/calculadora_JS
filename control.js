function calculadora(valorIntroducido) {
    //expresiones para operandos y operaciones
    var estructuraOperando = /^[-+]?[0-9]+\.?[0-9]+|^[-+]?[0-9]|^PI|^E/;
    var estructuraOperaciones = /^-|\+|\*|\/|\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ{1}/;

    //asignamos la cadena recibida a una variable
    var cadenaIntroducida = valorIntroducido.toString();
    var error = false;
    
    //primer operador
    var operando1 = cadenaIntroducida.match(estructuraOperando);
    if (operando1 === null) {
        error = true;
    } else {
      operando1 = operando1.toString();
      cadenaIntroducida = cadenaIntroducida.substring(operando1.length, cadenaIntroducida.length);
      if (operando1 === 'PI') {
        operando1 = Math.PI;
      } else if (operando1 === 'E') {
        operando1 = Math.E;
      }
    }
    console.log("operando1: " + operando1);
    
    //operacion
    var operacion = cadenaIntroducida.match(estructuraOperaciones);
    if (operacion === null) {
        error = true;
    } else {
        operacion = operacion.toString();
        cadenaIntroducida = cadenaIntroducida.substring(operacion.length, cadenaIntroducida.length);
    }
    console.log("operacion: " + operacion);
    
    //segundo operador
    var operando2 = cadenaIntroducida.match(estructuraOperando);
    if (operando2 === null) {
        error = true;
    } else {
      operando2 = operando2.toString();
      cadenaIntroducida = cadenaIntroducida.substring(operando2.length, cadenaIntroducida.length);
      if (operando2 === 'PI') {
        operando2 = Math.PI;
      } else if (operando2 === 'E') {
        operando2 = Math.E;
      }
    }
    console.log("operando2: " + operando2);
    console.log("Error: " + error);
    if (!error) {
      realizarOperacion(operando1, operando2, operacion);
    }
}
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
        resultado =  operando1 ** operando2;
        
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
        resultado = Math.pow(operando2, 1/operando1);
        
    }
    console.log(document.getElementById('mostrarDatos'));
    document.getElementById('mostrarDatos').value = resultado;
}
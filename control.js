/*OPEACIONES SIMPLES
	- Resta
	+ Suma
	* Multiplicacion
	/ Division
OPEACIONES COMPLEJAS:
Constantes
	PI - Num PI
	E - Num E
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

function calculadora(valorIntroducido) {
	//REGEX OPERANDOS
	var estructuraOperando = /^-?[0-9]+\.?[0-9]+|[0-9]|^PI|E/;
	//var estructuraOperando = /^-?[0-9]+(\.[0-9])|^PI|E/;
	//REGEX OPERACIONES
	var estructuraOperaciones = /^-|\+|\*|\/|\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ?/;
	//funcion EVAL*****************

	/*Recorremos la cadena introducida en orden Operando > Operacion > Operando, si el orden no es valido dara error*/

	//asignamos la cadena recibida a una variable
	var cadenaIntroducida = valorIntroducido;
	document.write("Cadena: " + cadenaIntroducida + "<br>");

	//primer operador
	var operando1 = cadenaIntroducida.match(estructuraOperando);
	if (operando1 == null) {
		document.write('error operando1<br>');
	} else {
		document.write("operando1: " + operando1 + "<br>");
		cadenaIntroducida = cadenaIntroducida.substring(operando1.toString().length, cadenaIntroducida.length);
	}

	//operacion
	var operacion = cadenaIntroducida.match(estructuraOperaciones);
	if (operacion == null) {
		document.write('error operacion<br>');
	} else {
		document.write("operacion: " + operacion + "<br>");
		cadenaIntroducida = cadenaIntroducida.substring(operacion.toString().length, cadenaIntroducida.length);
	}

	//segundo operador
	var operando2 = cadenaIntroducida.match(estructuraOperando);
	if (operando2 == null) {
		document.write('error operando2<br>');
	} else {
		document.write("operando2: " + operando2 + "<br>");
		cadenaIntroducida = cadenaIntroducida.substring(operando2.toString().length, cadenaIntroducida.length);
	}
}
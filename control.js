//function analizarInput(valorIntroducido) {
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

    //REGEX OPERANDOS
    var estructuraOperando = /-?[0-9]+\.?[0-9]+|^PI|E/;

    //REGEX OPERACIONES
    //simples
    //var estructuraOperacionSimple = /^-|\+|\*|\/?/;
    //complejas
    //var estructuraOperacionCompleja = /^\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ?/;
    //total
    //funcion EVAL*****************
    var estructuraOperaciones = /^-|\+|\*|\/|\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ?/;

    /*Recorremos la cadena introducida en orden Operando > Operacion > Operando, si el orden no es valido dara error*/
    var cadenaIntroducida = "PI-1116.53-89";
            document.write("Cadena: " + cadenaIntroducida);
            document.write("<br>");

            var operando = cadenaIntroducida.match(estructuraOperando).toString();
            document.write("operando: " + operando);
            document.write("<br>");
            cadenaIntroducida = cadenaIntroducida.substring(operando.length, cadenaIntroducida.length);

            var operacion = cadenaIntroducida.match(estructuraOperaciones).toString();
            document.write("operacion: " + operacion);
            document.write("<br>");




//}
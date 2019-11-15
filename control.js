//function analizarInput(valorIntroducido) {

    var cadenaIntroducida = "-1116.53-";
    /*OPEACIONES SIMPLES
       - Resta
       + Suma
       * Multiplicacion
       / Division
    */
    /*OPEACIONES COMPLEJAS:
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
    //PREGUNTAR SI HAY QUE HACER:INVERSIÓN DE SIGNO (POSITIVO/NEGATIVO) +-s

    //REGEX OPERANDOS
    var estructuraOperando = /-?[0-9]+\.?[0-9]+/;

    //REGEX OPERACIONES
    //simples
    var estructuraOperacionSimple = /^-|\+|\*|\/?/;
    //complejas
    var estructuraOperacionCompleja = /^PI|E|\^|ABS|SEN|COS|TAN|LOG10|LOG2|LN|SQRT|RAIZ?/;

    /*Recorremos la cadena introducida en orden Operando > Operacion > Operando, si el orden no es valido dara error*/

            document.write(cadenaIntroducida);
            document.write("<br>");

            var operando = cadenaIntroducida.match(estructuraOperando);
            document.write("operando = " + operando);
            document.write("<br>");
            cadenaIntroducida = cadenaIntroducida.substring(operando.length, cadenaIntroducida.length);

            var operacionBas = cadenaIntroducida.match(estructuraOperacionSimple);
            var operacionComp = cadenaIntroducida.match(estructuraOperacionCompleja);
            document.write("operacion = " + operacionBas);
            document.write("<br>");
            document.write("operacion = " + operacionComp);
            document.write("<br>");



//}
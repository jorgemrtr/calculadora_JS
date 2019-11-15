//function analizarInput(valorIntroducido) {

    var cadenaIntroducida = "-1116.53+2ABS*";
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
    var turnoOperando = true;
    var finalizarAnalisis = false;
    var posicionActual = 0;
    while (finalizarAnalisis = false) {
        if (turnoOperando) {
            document.write(cadenaIntroducida);
            var operando = cadenaIntroducida.match(estructuraOperando);
            posicionActual = operando.length;
            document.write(operando);
            document.write("<br>");
            turnoOperando = false;
        } else {
            var operacionBas = cadenaIntroducida.match(estructuraOperacionSimple);
            var operacionComp = cadenaIntroducida.match(estructuraOperacionCompleja);
            document.write(operacionBas);
            document.write("<br>");
            document.write(operacionComp);
            document.write("<br>");
        }
        //Hacemos un substring quitando la parte que ya hemos analizado
        cadenaIntroducida = cadenaIntroducida.substring(posicionActual, cadenaIntroducida.length);

    };


//}
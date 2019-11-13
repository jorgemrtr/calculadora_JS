//function analizarInput(valorIntroducido) {
    var cadenaIntroducida = "-1116.53+2";

    //Expresion regular con la estructura que seguiran los operandos
    estructuraOperando = /-?[0-9]+\.?[0-9]+/;
    var operando = cadenaIntroducida.match(estructuraOperando).toString();
    document.write(operando.length + "<br>");
    document.write(operando);
    //Despues comprobamos que la estructura nada mas terminar el operando es una operacion valida de lo contrario ERROR

    /*
    1.Siempre debe empezar por un número (puede ser positivo o negativo), no debe empezar por una operación.

    2.Si un número/dígito/operando  comienza por uno o más ceros con/sin comadecimal,estos no se deben tener en
    cuenta en la operación.

    3.Un  número/dígito/operando  puede  empezar  directamente  por  la  coma  decimal  eso significa que lleva delante
    un cero (el alumno deberá decidir si permite o no este valor y controlarla).

    4.Un  número/dígito/operando  puede  terminar  directamente  por  la  coma  decimal  eso significa que  lleva detrás
     un cero (el alumno deberá decidir si permite  o no esta valor y controlarlo).

    5.Todos los números/dígitos/operandos pueden ser positivos y negativos.
    */

//}
var colorEje = 'black';
var colorPuntos = '#4285f4';
var tamanoRaya = 5;
var separacionRaya = 10;
var canvas, lienzo, totalX, totalY;
pintarBase();

// se pinta el eje completo en el canvas siendo el punto 0,0 mitad de la anchura y altura
function pintarBase() {
    canvas = document.getElementById('lienzo'); 
    lienzo = canvas.getContext('2d');
    totalX = canvas.width;
    totalY = canvas.height;
    lienzo.beginPath();
    pintarEjes();
    pintarRayas();
    lienzo.stroke();
    lienzo.closePath();
}
function pintarEjes() {
    lienzo.strokeStyle = colorEje;
    //linea eje X
    lienzo.moveTo(0, (totalY / 2));
    lienzo.lineTo(totalX, (totalY / 2));
    //linea ejeY
    lienzo.moveTo((totalX / 2), 0);
    lienzo.lineTo((totalX / 2), totalY);
}
function pintarRayas() {
    lienzo.strokeStyle = colorEje;
    for (var i = (totalX / 2); i < totalX; i += separacionRaya) {
        lienzo.moveTo(i, (totalY / 2));
        lienzo.lineTo(i, ((totalY / 2) - tamanoRaya));
        var indiceNegativo = (totalX / 2) * 2 - i;
        lienzo.moveTo(indiceNegativo, (totalY / 2));
        lienzo.lineTo(indiceNegativo, ((totalY / 2) - tamanoRaya));
    }
    for (var i = (totalY / 2); i < totalY; i += separacionRaya) {
        lienzo.moveTo((totalX / 2), i);
        lienzo.lineTo(((totalX / 2) + tamanoRaya), i);
        var indiceNegativo = (totalY / 2) * 2 - i;
        lienzo.moveTo((totalX / 2), indiceNegativo);
        lienzo.lineTo(((totalX / 2) + tamanoRaya), indiceNegativo);
    }
}

//borra el cambas y vuelve a dibujar los ejes
function limpiar() {
    lienzo.clearRect(0, 0, totalX, totalY);
    pintarBase();
}

/*Se dibuja los dos valores que recibe cambiandolos para que se correspondan con
los ejes X e Y del canvas*/
var datoXAntiguo, datoYAntiguo, esPrimerDato;
function pintarValores(datoX, datoY) {
    if (esPrimerDato) {
        datoXAntiguo = datoX;
        datoYAntiguo = datoY;
        esPrimerDato = false;
    }
    console.log('Datos: ')
    console.log(datoX);
    console.log(datoY);
    datoX = datoX + (totalX/2);
    datoY = (datoY * -1) + (totalY/2);
    lienzo.beginPath();
    lienzo.strokeStyle = colorPuntos;
    lienzo.moveTo(datoXAntiguo, datoYAntiguo);
    lienzo.lineTo(datoX, datoY);
    datoXAntiguo = datoX;
    datoYAntiguo = datoY;
    lienzo.stroke();
    lienzo.closePath();
}
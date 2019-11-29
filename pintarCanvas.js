var canvas, lienzo, totalX, totalY;
var colorEje = 'black';
var colorPuntos = 'black';
var tamanoRaya = 3;
var separacionRaya = 10;

function pintar() {
    canvas = document.getElementById('lienzo');
    lienzo = canvas.getContext('2d');
    //codigo para que las lineas sean completamente opacas
    totalX = canvas.width;
    totalY = canvas.height;
    lienzo.beginPath();
    pintarEjes();
    pintarRayas();
    lienzo.stroke();
    lienzo.stroke();
    lienzo.closePath();
}

function limpiar() {
    lienzo.clearRect(0, 0, totalX, totalY);
    lienzo = null;
    canvas = null;
    totalX = null;
    totalY = null;
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

function pintarValores(datos) {
    
}
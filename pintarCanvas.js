var colorEje = 'black';
var colorPuntos = 'black';
var tamanoRaya = 6;
var separacionRaya = 20;
var canvas = document.getElementById('lienzo');
var lienzo, totalX, totalY;
var primerDato = true;

function pintarBase() {
    lienzo = canvas.getContext('2d');
    totalX = canvas.width;
    totalY = canvas.height;
    lienzo.beginPath();
    pintarEjes();
    pintarRayas();
    lienzo.stroke();
    lienzo.closePath();
}

function limpiar() {
    lienzo.clearRect(0, 0, totalX, totalY);
    lienzo = null;
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

function pintarValores(datoX, datoY) {
    lienzo.beginPath();
    lienzo.strokeStyle = colorPuntos;
    if (primerDato) {
        lienzo.moveTo(datoX, datoY);
        primerDato = false
    }
    lienzo.lineTo(datoX, datoY);
    lienzo.stroke();
    lienzo.closePath();
}
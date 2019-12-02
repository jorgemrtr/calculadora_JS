var colorEje = 'black';
var colorPuntos = '#4285f4';
var tamanoRaya = 4;
var separacionRaya = 20;
var canvas, lienzo, totalX, totalY;
var primerDato = true;
pintarBase();

function pintarBase() {
    canvas = document.getElementById('lienzo');
    lienzo = canvas.getContext('2d');
    totalX = canvas.width;
    totalY = canvas.height;
    console.log(totalX);
    console.log(totalY);
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
function limpiar() {
    lienzo.clearRect(0, 0, totalX, totalY);
    pintarBase();
}

var datoXAntiguo = null;
var datoYAntiguo = null;
function pintarValores(datoX, datoY) {
    //hacer la conversion de los datos, el punto 0,0 corresponde con la mitad de la anchura y altura
    datoX = datoX + (totalX/2);
    datoY = (datoY * -1) + (totalY/2);
    console.log('datos canvas');
    console.log(datoX);
    console.log(datoY);
    lienzo.beginPath();
    lienzo.strokeStyle = colorPuntos;
    if (datoXAntiguo !== null, datoYAntiguo !== null) {
        lienzo.moveTo(datoXAntiguo, datoYAntiguo);
    } else {
        lienzo.moveTo(datoX, datoY-1);
    }
    //linea eje X
    //lienzo.moveTo(datoX, datoY);
    lienzo.lineTo(datoX, datoY);
    //ienzo.fillRect(datoX, datoY, 1, 1);
    datoXAntiguo = datoX;
    datoYAntiguo = datoY;
    
    lienzo.stroke();
    lienzo.closePath();
}
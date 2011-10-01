var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');

//Dibujamos un circulo

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "blue";
ctx.arc(150, 200, 50, 0, Math.PI*2, false);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Escribimos

ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "25pt Arial";
ctx.fillText("Hola Canvas-Mundo", 300, 100);
ctx.closePath();

var assetManager = new AssetManager();
assetManager.queueDownload("./imagenes/vaca_normal.png","vacanormal");

/*assetManager.downloadAll(function() {
    var imagen = assetManager.getAsset("vacanormal");
    ctx.drawImage(imagen, 500,225);
});*/

assetManager.downloadAll(function() {
    var juego = new Juego(ctx);
    var circulo = new Circulo(juego, 0, 225, 50);
    juego.addEntidad(circulo);
    juego.iniciar();
});


//Shim que se encarga de solicitar el animationFrame del browser que estemos utilizando
//para optimizar la animacion del juego
window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
})();

function Juego(ctx) { //El controlador principal del juego
    this.entidades = [];
    this.ctx = ctx;
}

Juego.prototype.iniciar = function() { //Inicia el juego y el loop principal
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
};

Juego.prototype.addEntidad = function(entidad) {
    this.entidades.unshift(entidad);
};

Juego.prototype.dibujar = function() {
    this.ctx.clearRect(0, 0, this.ancho, this.alto);
    this.ctx.save();
    for (var i = 0; i < this.entidades.length; i++) {
        this.entidades[i].dibujar(this.ctx);
    }
    this.ctx.restore();
};

Juego.prototype.actualizar = function() {

    for (var i = this.entidades.length-1; i >= 0; --i) {
        
        if (this.entidades[i].remover) {
            this.entidades.splice(i, 1);
        }
        else {
            this.entidades[i].actualizar();
        }
    }
};

Juego.prototype.loop = function() { //loop del juego que llama a los actualizar y dibujar de las entidades
    this.actualizar();
    this.dibujar();
};

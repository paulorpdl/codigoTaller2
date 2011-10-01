function Raqueta(juego, x, y){
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.dirx = true;
	this.diry = true;
	this.remover = false;
}

Raqueta.prototype.actualizar = function(){
	if(this.diry)
		this.moveUp();
	else
		this.moveDown();
};

Raqueta.prototype.moveUp() = function(){
	if(this.

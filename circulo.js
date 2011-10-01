function Circulo(juego, x, y, r ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.r = r;
	this.dirx = true;
        this.diry = true;
	this.remover = false;
}

Circulo.prototype.actualizar = function() { 
    	if (this.dirx)
        	this.moveForward();
    	else 
        	this.moveBackward();

	if(this.diry)
		this.moveUp();
	else
		this.moveDown();
};

Circulo.prototype.moveForward = function(){ 
	if(this.x < this.juego.ctx.canvas.width - this.r)
		this.x += 3;
	else{
		this.dirx = false;
		this.r++;
	}
};

Circulo.prototype.moveBackward = function(){
	if(this.x > 0 + this.r)
		this.x -= 3;
	else{
		this.dirx = true;
		this.r++;
	}
};

Circulo.prototype.moveUp = function(){
	if(this.y > 0 + this.r)
		this.y -= 3;
	else{
		this.diry = false;
		this.r++;
	}
};

Circulo.prototype.moveDown = function(){
	if(this.y < this.juego.ctx.canvas.height - this.r)
		this.y += 3;
	else{
		this.diry = true;
		this.r++;
	}
};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};

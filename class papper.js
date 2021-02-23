class papper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=200;
		this.Height=213;

		
		this.papper=Bodies.rectangle(this.x, this.y, this.width, this.height, {isStatic:false})
		
		
		World.add(world, this.papperBody)
		

	}
	display()
	{
			var posBottom=this.papperBody.position;
			this.body.position.x = mouseX;
			this.body.position.y = mouseY;

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			rect(0,0,this.width, this.Height);
			pop()

			
	}

}
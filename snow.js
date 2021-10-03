class Snow {

constructor(x,y,radius){
this.x=x
this.y=y
this.radius=radius
this.body=Bodies.circle(this.x,this.y,this.radius)
World.add(world,this.body)
this.image=loadImage("snow5.webp")
}
display(){


image(this.image,this.body.position.x,this.body.position.y)

}


}
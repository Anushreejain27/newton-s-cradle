class ball{
constructor(x,y,r){
var options={
isStatic:false,
restitution : 1.2,
friction : 1.2,
 density : 0.8



}

this.body=Bodies.circle(x,y,r,options)
this.radius=r
World.add(world,this.body)






}

display(){
push()
ellipseMode(RADIUS)
fill("yellow")
stroke("white")
strokeWeight(5)
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
pop()











}





















}




















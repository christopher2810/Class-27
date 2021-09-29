class control
{
constructor(bodyA,bodyB)
{
    var options= 
    {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.05,
        length:10,
    }

    this.control=constraint.create(options)
    World.add(world,this.control)

}

display()
{
    line(this.control.bodyA.position.x,this.control.bodyA.position.y,this.control.bodyB.position.x,this.control.bodyB.position.y)
}
}
let keys = []

class Player{
    constructor(water, grass){
        //skapa animation in på banan
        this.size = 20
        this.x = canvas.width / 2 - this.size / 2
        this.y = canvas.height - 50
        this.xVel = 0
        this.yVel = 0
        this.friction = 0.94
    }

    update(){
        //spelar rörelse
        if(keys[65]){
            this.xVel = -3
        }
        if(keys[68]){
            this.xVel = 3
        }
        if(keys[87]){
            this.yVel = -3
        }
        if(keys[83]){
            this.yVel = 3
        }

        this.xVel *= this.friction
        this.yVel *= this.friction

        this.x += this.xVel
        this.y += this.yVel        
    }

    shoot(){
        
    }

    draw(){
        ctx.fillStyle = 'black'
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}


window.addEventListener('keydown', e =>{
    keys[e.keyCode] = true
})

window.addEventListener('keyup', e =>{
    keys[e.keyCode] = false
})
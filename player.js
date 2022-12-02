let keys = []

class Player{
    constructor(water, grass){
        //skapa animation in på banan
        this.size = canvas.height / cols
        this.x 
        this.y 
        this.xVel = 0
        this.yVel = 0
        this.friction = .9
        this.noWalk = undefined
        this.i = rows - 1
        this.j = cols - 1
        this.up
        this.down
        this.right
        this.left
    }

    update(){        
        if(keys[65] && this.i > 0){
            this.i--
        }
        if(keys[68] && this.i < cols - 1){
            this.i++
        }
        if(keys[87] && this.j > 0){
            this.j--
        }
        if(keys[83] && this.j < rows - 1){
            this.j++
        }

        this.x = this.i * this.size
        this.y = this.j * this.size
    }

    shoot(){
        
    }

    draw(){
        ctx.fillStyle = 'yellow'
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}


window.addEventListener('keydown', e =>{
    keys[e.keyCode] = true
})

window.addEventListener('keyup', e =>{
    keys[e.keyCode] = false
})
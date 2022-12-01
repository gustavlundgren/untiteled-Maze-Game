let keys = []

class Player{
    constructor(water, grass){
        //skapa animation in på banan
        this.size = canvas.height / cols
        this.x = canvas.width / 2 - this.size / 2
        this.y = canvas.height - 50
        this.xVel = 0
        this.yVel = 0
        this.friction = .9
        this.noWalk = undefined
        this.i 
        this.j
    }

    update(){
        // //spelar rörelse
        // if(keys[65]){
        //     this.xVel = -3
        // }
        // if(keys[68]){
        //     this.xVel = 3
        // }
        // if(keys[87]){
        //     this.yVel = -3
        // }
        // if(keys[83]){
        //     this.yVel = 3
        // }

        // this.xVel *= this.friction
        // this.yVel *= this.friction

        // if (Math.abs(0 - this.xVel) < 0.2){
        //     this.xVel = 0
        // }

        // if (Math.abs(0 - this.yVel) < 0.2){
        //     this.yVel = 0
        // }

        // // console.log(this.xVel)
        // // console.log(this.yVel)

        // this.x += this.xVel
        // this.y += this.yVel
        
        // if (this.x + this.size >= canvas.width){
        //     this.x = canvas.width - this.size
        // }

        // if (this.x <= 0){
        //     this.x = 0
        // }

        // if (this.y + this.size >= canvas.height){
        //     this.y = canvas.height - this.size
        // }

        // if (this.y <= 0){
        //     this.y = 0
        // } 
        
        if(keys[65]){
            this.x -= this.size
        }
        if(keys[68]){
            this.x += this.size
        }
        if(keys[87]){
            this.y -= this.size
        }
        if(keys[83]){
            this.y += this.size
        }
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
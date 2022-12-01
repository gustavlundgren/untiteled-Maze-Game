class Enemy{
    constructor(player){
        this.x = 380
        this.y = 115
        this.player = player
        this.size = 40
        this.xVel = 0
        this.yVel = 0
    }

    update(){
        if(collisionCheck(this.player, this)){
          // spelare och fiende har krockat
        }
        
        // movement
        if(this.x != this.player.x && this.x < this.player.x){
            this.xVel = 2
        }
        
        if(this.x != this.player.x && this.x > this.player.x){
            this.xVel = -2
        }

        if(this.y != this.player.y && this.y < this.player.y){
            this.yVel = 2
        }

        if(this.y != this.player.y && this.y > this.player.y){
            this.yVel = -2
        }

        this.x += this.xVel
        this.y += this.yVel
    }

    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}


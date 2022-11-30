class Enemy{
    constructor(player){
        this.x = 380
        this.y = 115
        this.player = player
        this.size = 40
    }

    update(){
        if(collisionCheck(this.player, this)){
          // spelare och fiende har krockat
        }
        
        // movement
        if(this.x != this.player.x && this.x < this.player.x){
            this.x++
        }

        if(this.x != this.player.x && this.x > this.player.x){
            this.x--
        }

        if(this.y != this.player.y && this.y < this.player.y){
            this.y++
        }

        if(this.y != this.player.y && this.y > this.player.y){
            this.y--
        }
    }

    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}


class Enemy{
    constructor(player){
        this.i = 0
        this.j = 0
        this.size = canvas.height / cols
        this.x
        this.y
        this.player = player
        this.up
        this.down
        this.right
        this.left
        this.nextMove = []
        this.count = 1
    }

    update(){
        if(collisionCheck(this.player, this)){
          // spelare och fiende har krockat
        }
        
        // movement

        if (this.player.up ||
            this.player.down ||
            this.player.right ||
            this.player.left) {

            this.count++
        }

        this.x = this.i * this.size
        this.y = this.j * this.size
    }

    draw(){
        ctx.fillStyle = 'purple'
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}
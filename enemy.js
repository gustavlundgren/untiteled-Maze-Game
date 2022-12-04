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
            console.log('hej');
        /*
        if (this.x != this.player.x && 
            this.x < this.player.x) {
            this.right = true
        }
        
        if (this.x != this.player.x &&
            this.x > this.player.x) {
            this.left = true
        }

        if (this.y != this.player.y && 
            this.y < this.player.y) {
            this.down = true
        }

        if (this.y != this.player.y && 
            this.y > this.player.y) {
           this.up = true
        }*/
                 
        }



        if (path.length > 0) {

           for (let o = 2; o < path.length + 1; o++) {
            this.i = path[path.length - o].i 
            this.j = path[path.length - o].j 
           }

        }
        
        this.x = this.i * this.size
        this.y = this.j * this.size
    }

    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}
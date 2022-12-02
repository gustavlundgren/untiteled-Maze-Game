let keys = []

class Player{
    constructor(water, grass){
        //skapa animation in på banan
        this.size = canvas.height / cols
        this.x 
        this.y 
        this.i = rows - 1
        this.j = cols - 1
        this.up
        this.down
        this.right
        this.left
    }

    update(){        
        if (keys[65] &&
            this.i > 0 &&
            playerTurn 
            ) {
            this.left = true
            playerTurn = false
            timer = 0
        }else{
            this.left = false
        }

        if (keys[68] &&
            this.i < cols - 1 &&
            playerTurn
            ) {
            this.right = true
            playerTurn = false
            timer = 0
        }else{
            this.right = false
        }


        if (keys[87] && 
            this.j > 0 && playerTurn) {
            playerTurn = false
            timer = 0
            this.up = true
        }else{
            this.up = false
        }

        if (keys[83] &&
            this.j < rows - 1 &&
            playerTurn
            ) {
            playerTurn = false
            timer = 0
            this.down = true
        }else{
            this.down = false
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
class Grass {
    constructor(i, j, size, player, enemy) {
        this.i = i
        this.j = j
        this.size = size
        this.x = i * size
        this.y = j * size
        this.g = 0
        this.h = 0
        this.f = 0
        this.neighbors = []
        this.parent = undefined
        this.wall = false
        this.col = 'green'
        this.start = false
        this.end = false
        this.player = player
        this.enemy = enemy
        this.playerPos
        this.enemyPos
    }

    wallCheck(){
        if(Math.random()*1 < .4){
            this.wall = true
            this.col = 'black'
        }
    }

    draw(col) {
        if(col){
            this.col = col
        }

        ctx.fillStyle = this.col

        ctx.fillRect(this.x, this.y, this.size, this.size)
        ctx.strokeRect(this.x, this.y, this.size, this.size)
    }

    addNeighbors(grid){
        this.grid = grid

        //raka
        if(this.i < cols - 1){
            this.neighbors.push(grid[this.i + 1][ this.j]) 
        }
        if(this.i > 0){
            this.neighbors.push(grid[this.i - 1][ this.j]) 
        }
        if(this.j < rows - 1){
            this.neighbors.push(grid[this.i][this.j + 1])
        }
        if(this.j > 0){
            this.neighbors.push(grid[this.i][this.j - 1])
        }

        // diagonala
        if(this.i > 0 && this.j > 0){
            this.neighbors.push(grid[this.i - 1][this.j - 1])
        }
        if(this.i < cols - 1 && this.j < rows - 1){
            this.neighbors.push(grid[this.i + 1][this.j + 1])
        }
        if(this.i > 0 && this.j < rows - 1){
            this.neighbors.push(grid[this.i - 1][this.j + 1])
        }
        if(this.i < cols - 1 && this.j > 0){
            this.neighbors.push(grid[this.i + 1][this.j - 1])
        }
    }

    startCheck(){
        canvas.addEventListener('click', e =>{

            let x = getCursorPosition(canvas, e)[0]
            let y = getCursorPosition(canvas, e)[1]

            if(x > this.x && x < this.x + this.size && y > this.y && y < this.y + this.size){
                this.start = true
            }
        })
    }

    endCheck(){
        canvas.addEventListener('click', e =>{

            let x = getCursorPosition(canvas, e)[0]
            let y = getCursorPosition(canvas, e)[1]

            if(x > this.x && x < this.x + this.size && y > this.y && y < this.y + this.size){
                this.end = true
            }
        })
    }

    playerCheck(){
        if(collisionCheck(this.player, this)){
            this.playerPos = true
            this.col = 'pink'
        }else{
            this.playerPos = false
            this.col = 'green'
        }
    }

    enemyCheck(){
        if(collisionCheck(this.enemy, this)){
            this.enemyPos = true
            this.col = 'blue'
        }else{
            this.enemyPos = false
            this.col = 'green'
        }
    }
}

class Water extends Grass{
    constructor(i, j, size){
        super(i, j, size)
    }

    update(){
        super.update()
    }

    draw(){
        super.draw('blue')
    }
}
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 800

class Game{
    constructor(){
        this.gridSize = 8
        this.grid = []
        this.gridCheck = 0
        this.gridY = 0
        this.gridX = 0
        this.pos = {x: 0, y:0}
        this.drawGrid = true

        this.player = new Player()
    }

    update(){
        if(this.drawGrid){

            if(this.gridCheck < this.gridSize){
                this.pos.x = this.gridX
                this.pos.y = this.gridY

                this.grid.push(this.pos)
                this.gridX += canvas.width / this.gridSize 
                this.gridCheck++
            }else{
                this.gridY += canvas.height / this.gridSize
                this.gridCheck = 0
                this.gridX = 0
            } 

            if(this.gridY == canvas.height - canvas.height / this.gridSize){
                if(this.gridX == canvas.width){
                    this.drawGrid = false
                }
            }

        }
        
    }

    draw(ctx){
        ctx.strokeRect(this.pos.x, this.pos.y, 100, 100)
        this.player.draw()
    }
}

class Player{
    constructor(){
        //skapa animation in på banan
        this.size = 20
        this.x = canvas.width / 2 - this.size / 2
        this.y = canvas.height - 50

    }

    update(){

    }

    draw(){
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}

class Grass{
    constructor(){

    }

    update(){

    }

    draw(){
        
    }
}

class water{
    constructor(){

    }

    update(){

    }

    draw(){
        
    }
}

const game = new Game()

function main(){
    

    game.update()
    game.draw(ctx)

    requestAnimationFrame(main)
}

main()
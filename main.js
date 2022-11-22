const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 800

let keys = []
let slowness = false

class Game{
    constructor(){
        this.gridSize = 8
        this.grid = []
        this.gridCheck = 0
        this.gridY = 0
        this.gridX = 0
        this.pos = {x: 0, y:0}
        this.drawGrid = true

        this.grass = []
        this.water = []

        this.player = new Player(this.water, this.grass)

        this.enemy = new Enemy()
    }

    update(){
        //skapar en grid
        if(this.drawGrid){
            if(this.gridCheck < this.gridSize){
                this.pos.x = this.gridX
                this.pos.y = this.gridY

                this.grid.push(this.pos)
                this.grass.push(new Grass(this.player, this.pos.x, this.pos.y, canvas.width / this.gridSize))
                this.water.push(new Water(this.player, this.pos.x, this.pos.y, canvas.width / this.gridSize))

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

        this.grass = this.grass.filter(e => !(e.x == 100 && e.y > 0 && e.y < 700) && !(e.x == 600 && e.y > 0 && e.y < 700))

        this.water = this.water.filter(e => (e.x == 100 && e.y > 0 && e.y < 700) || (e.x == 600 && e.y > 0 && e.y < 700))

        //updaterar alla klasser
        this.player.update()
        this.grass.forEach(object => object.update())
        this.water.forEach(object => object.update())

        this.slownessCheck = this.water.map(e => e.active).filter(e => !(e == true))

        if(this.slownessCheck.length < 12){
            slowness = true
        }else{
            slowness = false
        }

        //console.log(slowness);
    }

    draw(ctx){
        if(this.gridX > 700 && this.gridY == 700){
            this.grass.forEach(object => object.draw())
            this.water.forEach(object => object.draw())

            this.player.draw(ctx)

            this.enemy.draw(ctx)
        }  
    }
}

class Player{
    constructor(water, grass){
        //skapa animation in på banan
        this.water = water
        this.grass = grass

        this.size = 20
        this.x = canvas.width / 2 - this.size / 2
        this.y = canvas.height - 50
        this.xVel = 0
        this.yVel = 0
        this.friction = 0.96
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

        if(slowness){
            this.friction = .4
        }else{
            this.friction = .96
        }

        this.xVel *= this.friction
        this.yVel *= this.friction

        this.x += this.xVel
        this.y += this.yVel        
    }

    draw(ctx){
        ctx.fillStyle = 'black'
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}

class Enemy{
    constructor(){
        this.x = 400
        this.y = 100
    }

    update(){

    }

    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.x, this.y, 20, 0, 2*Math.PI)
        ctx.fillStyle = 'red'
        ctx.fill()
    }
}

class Grass{
    constructor(player, x, y, size){
        this.player = player

        this.size = size
        this.x = x
        this.y = y

        this.color = 'green'
        this.active = false
        this.markedForDelete = false
    }

    update(){

        if(this.x == 200){
            this.markedForDelete = true
        }

        if(this.player.x > this.x && this.player.x < this.x + this.size && this.player.y > this.y && this.player.y < this.y + this.size){
            this.active = true
        }else{
            this.active = false
        }
    }

    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}

class Water extends Grass{
    constructor(player, x, y, size){
        super(player, x, y, size)
        this.color = 'blue'
    }

    update(){
        super.update()
    }

    draw(ctx){
        super.draw(ctx)
    }
}

const game = new Game()

function main(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    game.update()
    game.draw(ctx)

    requestAnimationFrame(main)
}

main()

window.addEventListener('keydown', e =>{
    keys[e.keyCode] = true
})

window.addEventListener('keyup', e =>{
    keys[e.keyCode] = false
})
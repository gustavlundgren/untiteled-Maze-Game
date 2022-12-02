const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 800

let lastTime = 0

let cols = 15
let rows = 15

let playerTurn = true
let turnTime = 250
let timer = 0

let setup = true

class Game{ 
    constructor(){
        this.grass = []
        this.water = []

        this.player = new Player(this.water, this.grass)

        this.enemy = new Enemy(this.player)
        
        this.grid = new Grid(cols, rows, canvas.width, this.player, this.enemy)
    }

    setup(){
        this.grid.createGrid()
    }

    update(){
        this.player.update()
        this.enemy.update()
        this.grid.update()
    }

    draw(){
        this.grid.draw()
        this.enemy.draw()
        this.player.draw()
        
    } 
}

const game = new Game()

let fps = 1000

function main(timestamp){
    // ctx.clearRect(0, 0, canvas.width, canvas.height)

    let deltatime = timestamp - lastTime
    lastTime = timestamp

    timer += deltatime

    if (timer > turnTime){
        playerTurn = true
        timer = 0
    }

    if(setup){
        game.setup()
        setup = false
    }

    game.update()

    game.draw()

    
    
    setTimeout(() => {
      requestAnimationFrame(main)  
    }, 1000 / fps)
}
main(0)
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 800

let cols = 15
let rows = 15

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

function main(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
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
main()
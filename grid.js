class Grid {

    //Skapar alla olika variabler inuti klassen.
    constructor(cols, rows, canvasSize, player, enemy){
        this.column = cols
        this.row = rows
        this.size = canvasSize / this.column
        this.grid = new Array(this.row)
        this.end
        this.start
        this.player = player
        this.enemy = enemy
    }
    //Skapar en lista i en array som  
    draw(){
        for(let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j].draw()
            }
        }  
    }

    update(){
        for(let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j].enemyCheck()
                this.grid[i][j].playerCheck()
            }
        }
    }

    createGrid(){

        for(let i = 0; i < this.grid.length; i++){
            this.grid[i] = new Array(this.column);
        }

        for(let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j] = new Grass(i, j, this.size, this.player, this.enemy) /*Cell*/
            }

        }

        for(let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j].addNeighbors(this.grid)
                this.grid[i][j].wallCheck()
            }
        }
    }

    setStart(){
        for(let i = 0; i < this.row; i++){
            for(let j = 0; j < this.column; j++){

                this.grid[i][j].startCheck()
                if(this.grid[i][j].start){
                    this.start = this.grid[i][j]
                }
            }
        }
        
        if(this.start){
            this.start.draw('red')
            this.start.wall = false 
        }
    }

    setEnd(){
        for(let i = 0; i < this.row; i++){
            for(let j = 0; j < this.column; j++){
                this.grid[i][j].endCheck()
                if(this.grid[i][j].end){
                    this.end = this.grid[i][j]
                }
            }
        }
        
        if(this.end){
            this.end.draw('blue')
            this.end.wall = false
        }
    }
}
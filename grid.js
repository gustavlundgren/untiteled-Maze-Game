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
    // målar ut i draw för att skilja på skapandet och målningen eftersom denna körs en gång varje frame 
    draw(){
        /*for(let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j].draw()
            }
        }*/
        
        this.grid.forEach(e => e.forEach(elt => elt.draw()))
    }

    // skapar allt en gång för att det inte ska få nya värden varje frame
    createGrid(){

        for (let i = 0; i < this.grid.length; i++){
            this.grid[i] = new Array(this.column);
        }

        for (let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j] = new Grass(i, j, this.size, this.player, this.enemy) /*Cell*/
            }

        }

        for (let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j].addNeighbors(this.grid)
                this.grid[i][j].wallCheck()
            }
        }

        this.grid[3][5].wall = false
        this.grid[2][5].wall = false
    }

    update() {
        this.grid.forEach(e => e.forEach(elt => elt.enemyCheck()))
        this.grid.forEach(e => e.forEach(elt => elt.playerCheck()))
        this.grid.forEach(e => e.forEach(elt => this.noWalk(elt)))
        // this.grid.forEach(e => e.forEach(elt => elt.noWalk(this.enemy)))
    }

    setStart() {
        for (let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j].startCheck()
                if (this.grid[i][j].start){
                    this.start = this.grid[i][j]
                }
            }
        }
        
        if (this.start){
            this.start.draw('red')
            this.start.wall = false 
        }
    }

    setEnd() {
        for(let i = 0; i < this.row; i++){
            for(let j = 0; j < this.column; j++){
                this.grid[i][j].endCheck()
                if(this.grid[i][j].end){
                    this.end = this.grid[i][j]
                }
            }
        }
        
        if (this.end) {
            this.end.draw('blue')
            this.end.wall = false
        }
    }

    noWalk(e){
        if (e.wall){
            if (collisionCheck(this.player, e) && this.player.xVel > 0){
                this.player.x = e.x - this.player.size 
            }

            if (collisionCheck(this.player, e) && this.player.xVel < 0){
                this.player.x = e.x + e.size 
            }

            if (collisionCheck(this.player, e) && this.player.yVel > 0){
                this.player.y = e.y - this.player.size 
            }

            if (collisionCheck(this.player, e) && this.player.yVel < 0){
                this.player.y = e.y + e.size 
            }
        }
    }
}
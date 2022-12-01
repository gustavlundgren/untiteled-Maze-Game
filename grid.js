class Grid {
    //Skapar alla olika variabler inuti klassen.
    constructor(cols, rowss, canvasSize, player, enemy){
        this.cols = cols
        this.rows = rowss
        this.size = canvasSize / this.cols
        this.grid = new Array(this.rows)
        this.end
        this.start
        this.player = player
        this.enemy = enemy
    }
    // målar ut i draw för att skilja på skapandet och målningen eftersom denna körs en gång varje frame 
    draw(){        
        this.grid.forEach(e => e.forEach(elt => elt.draw()))
    }

    // skapar allt en gång för att det inte ska få nya värden varje frame
    createGrid(){

        for (let i = 0; i < this.grid.length; i++){
            this.grid[i] = new Array(this.cols);
        }

        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                this.grid[i][j] = new Grass(i, j, this.size, this.player, this.enemy) /*Cell*/
            }

        }

        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                this.grid[i][j].addNeighbors(this.grid)
                this.grid[i][j].wallCheck()
            }
        }

        this.grid[3][5].wall = false
        this.grid[2][5].wall = false

        this.grid[3][3].wall = true
        this.grid[3][5].wall = true
    }

    update() {
        this.grid.forEach(e => e.forEach(elt => elt.enemyCheck()))
        this.grid.forEach(e => e.forEach(elt => elt.playerCheck()))
        this.grid.forEach(e => e.forEach(elt => this.noWalk(elt)))
    }

    setStart() {
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
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
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
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

            if (e.i > 0){
                if (collisionCheck(this.player, e) && this.grid[e.i - 1][e.j].playerPos){
                    this.player.x = e.x - this.player.size 
                    console.log('left');
                }
            }

            if (e.i < this.cols - 1){
                if (collisionCheck(this.player, e) && this.grid[e.i + 1][e.j].playerPos){
                    this.player.x = e.x + e.size
                    console.log('right');
                }
            }

            if (e.j > 0){
                if (collisionCheck(this.player, e) && this.grid[e.i][e.j - 1].playerPos){
                    this.player.y = e.y - this.player.size
                    console.log('up');
                }
            }

            if (e.j < this.rows - 1){
                if (collisionCheck(this.player, e) && this.grid[e.i][e.j + 1].playerPos){
                    this.player.y = e.y + e.size
                    console.log('down')
                }
            } 
        }
    }
}
function locate(a, b) {
    this.neighbors = a.neighbors
    this.next = []
    this.bestH = 10000

    this.neighbors.forEach(e => {
        e.h = heuristic(e, b)
    })

    this.neighbors.forEach(e => {
        if (e.h < this.bestH &&
            !e.wall) {
            this.next.length = 0
            this.next.push(e)
            this.bestH = e.h
       }
    })

    return this.next
}

function heuristic(a, b){
    let d = dist(a.i, a.j, b.i, b.j)

    return d
}

function dist(x1, y1, x2, y2){
    let dx = x1 - x2
    let dy = y1 - y2

    let d = Math.sqrt((dx * dx) + (dy* dy))

    return d
}
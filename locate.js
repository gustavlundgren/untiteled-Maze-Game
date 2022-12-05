function locate(a, b, next = [], bestH = 10000) {
    this.neighbors = a.neighbors

    this.neighbors.forEach(e => {
        e.h = dist(a,b)
    })

    this.neigbors.forEach(e => {
       if (e.h < bestH) {
            next.push(e)
            bestH = e.h
       } 
    })

    return next
}
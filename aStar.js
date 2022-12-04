    let openSet = []
    let closedSet = []
    let path = []
    let current
    let bestF = 1000000
    let tempG
    let newPath
    let firstRun = true
    let temp
    let neighbors
    let neighbor

    function aStar(start, end){

    if(firstRun){
        openSet.push(start)
        console.log('A*')
        firstRun = false
    }

    //Vad som ska hända om det finns data i openSet, vilket det gör tills algoritmen är klar
    if(openSet.length > 0){

        let winner = 0

        //kollar vilken cell i openSet som har det bästa f värdet
        for(let i = 0; i < openSet.length; i++){
            if(openSet[i].f < openSet[winner].f){
                winner = i
            }
        }

        //sätter den nuvarande cellen för att valideras till den cellen som har bäst f värde
        current = openSet[winner]

        //om den nuvarande cellen är den cellen som algoritmen hade som mål att nå så är algoritmen klar och kommer logga "Done!!"
        if(current === end){

            //hitta vägen 
            temp = current

            path.push(temp)

            while(temp.parent){
                path.push(temp.parent)
                temp = temp.parent
            }

            //console.log('Done!!')
            //done = true
        }

        //kör min funktion för att ta bort den nuvarande cellen från openSet efter att den har blivit validerad
        removeFromArray(openSet, current)

        //lägger till den validerade cellen i closedSet efterssom den inte behövs mer
        closedSet.push(current)

    }else{
        //console.log('fail')
        //done = true
    }

    //variabel för att hålla nuvarande cells grannar
    neighbors = current.neighbors

    for(let i = 0; i < neighbors.length; i++){

        neighbor = neighbors[i]
        
        if(!closedSet.includes(neighbor) && !neighbor.wall){
            tempG = current.g + 1

            newPath = false

            if(openSet.includes(neighbor)){
                if(tempG < neighbor.g){
                    neighbor.g = tempG
                    newPath = true
                }
            }else{
                neighbor.g = tempG
                newPath = true
                openSet.push(neighbor)
            }

            if(newPath){
                neighbor.h = heuristic(neighbor, end)

                neighbor.f = neighbor.g + neighbor.h

                neighbor.parent = current
            }
        }
    }

    /*
    for(let i = 0; i < closedSet.length; i++){
        closedSet[i].draw('red')
    }

    for(let i = 0; i < openSet.length; i++){
        openSet[i].draw('green')
    } 

    for(let i = 0; i < path.length; i++){
        path[i].draw('blue')
    }
    */
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

function removeFromArray(arr, elt){
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] == elt){
            arr.splice(i, 1)
        }
    }
}
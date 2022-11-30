function collisionCheck(a, b){

    if (a.x < b.x + b.size &&
        a.x + a.size > b.x &&
        a.y < b.y + b.size &&
        a.size + a.y > b.y
    ){
        return 1
    }else{
        return 0
    }
}
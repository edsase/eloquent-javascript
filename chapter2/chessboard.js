chessBoard = function(width, height){
    var out = ""
    var odd_grid = "".padStart(width, " #");
    var even_grid = "".padStart(width, "# ");
    for (i=1; i<= height; i++){
        if (i % 2 == 0){
            console.log(even_grid);
        } else{
            console.log(odd_grid);
        }

    }
}

chessBoard(12, 8)
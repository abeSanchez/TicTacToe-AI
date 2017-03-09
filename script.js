var tiles = document.getElementsByClassName("tile");
var buttons = document.getElementsByClassName('buttons');
var winnerExists = false;
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function claim(tile) {
    if (isntClaimed(tile) && winnerExists == false) {
        tile.innerHTML = 'X';
        board[tile.id] = 1;
        checkForWinner();
        if (winnerExists == false) {
            aiTurn();
        }
    }
    checkForWinner();
}

function isntClaimed(tile) {
    if (!(tile.innerHTML == 'X' || tile.innerHTML == 'O')) {
        return true;
    } else {
        return false;
    }
}

function checkForWinner() {
    if (tiles[0].innerHTML == tiles[1].innerHTML && tiles[1].innerHTML == tiles[2].innerHTML && !(isntClaimed(tiles[2]))) {
        win(tiles[0], tiles[1], tiles[2]);
    } else if (tiles[3].innerHTML == tiles[4].innerHTML && tiles[4].innerHTML == tiles[5].innerHTML && !(isntClaimed(tiles[5]))) {
        win(tiles[3], tiles[4], tiles[5]);
    } else if (tiles[6].innerHTML == tiles[7].innerHTML && tiles[7].innerHTML == tiles[8].innerHTML && !(isntClaimed(tiles[8]))) {
        win(tiles[6], tiles[7], tiles[8]);
    } else if (tiles[0].innerHTML == tiles[3].innerHTML && tiles[3].innerHTML == tiles[6].innerHTML && !(isntClaimed(tiles[6]))) {
        win(tiles[0], tiles[3], tiles[6]);
    } else if (tiles[1].innerHTML == tiles[4].innerHTML && tiles[4].innerHTML == tiles[7].innerHTML && !(isntClaimed(tiles[7]))) {
        win(tiles[1], tiles[4], tiles[7]);
    } else if (tiles[2].innerHTML == tiles[5].innerHTML && tiles[5].innerHTML == tiles[8].innerHTML && !(isntClaimed(tiles[8]))) {
        win(tiles[2], tiles[5], tiles[8]);
    } else if (tiles[0].innerHTML == tiles[4].innerHTML && tiles[4].innerHTML == tiles[8].innerHTML && !(isntClaimed(tiles[8]))) {
        win(tiles[0], tiles[4], tiles[8]);
    } else if (tiles[6].innerHTML == tiles[4].innerHTML && tiles[4].innerHTML == tiles[2].innerHTML && !(isntClaimed(tiles[2]))) {
        win(tiles[6], tiles[4], tiles[2]);
    }

    var boardFull = true;
    for (var i = 0; i < board.length; i++) {
        if(board[i] == 0){
          boardFull = false;
        }
    }
    if (boardFull == true){
      winnerExists = true;
    }
}

function win(x, y, z) {
    var player = x.innerHTML;
    winnerExists = true;
    x.style.background = "#d6d6d6";
    y.style.background = "#d6d6d6";
    z.style.background = "#d6d6d6";
}

function reset() {
    for (var i = 0; i < tiles.length; i++) {
        board[i] = 0;
        tiles[i].innerHTML = "";
        tiles[i].style.background = "white"
    }
    winnerExists = false;
}

function aiTurn() {
    var tileToClaim;
    while (board[tileToClaim] != 0) {
        tileToClaim = Math.floor(Math.random() * 10);
        console.log(tileToClaim);
    }
    tiles[tileToClaim].innerHTML = 'O';
    board[tileToClaim] = 2;
}

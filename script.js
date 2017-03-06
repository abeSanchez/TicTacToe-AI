var tiles = document.getElementsByClassName("tile");
var buttons = document.getElementsByClassName('buttons');
var xturn = true;
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function claim(tile) {
    if (xturn == true && isntClaimed(tile)) {
        tile.innerHTML = 'X';
        xturn = false;
    } else if (xturn == false && isntClaimed(tile)) {
        tile.innerHTML = 'O';
        xturn = true;
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
}

function win(x, y, z) {
    var player = x.innerHTML;
    x.style.background = "#eee";
    y.style.background = "#eee";
    z.style.background = "#eee";
}

function reset() {
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].innerHTML = "";
        tiles[i].style.background = "white"
    }
    xturn = true;
}

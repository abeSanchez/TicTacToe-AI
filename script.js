// This is quite old. Here's how I would do this in java (given that each move is valid).
// class TicTacToe {

//     int ro[];
//     int co[];
//     int diag;
//     int diag2;
    
//     public TicTacToe(int n) {
//         ro = new int[n];
//         co = new int[n];
//         diag = diag2 = 0;
//     }

//     public int move(int row, int col, int player) {
//         if(player == 1) {
//             ro[row]++;
//             co[col]++;
//             if(row == col) diag++;
//             if(col + row == ro.length - 1) diag2++;
//         } else {
//             ro[row]--;
//             co[col]--;
//             if(row == col) diag--;
//             if(col + row == ro.length - 1) diag2--;
//         }
//         return isWinner(row, col) ? player : 0;
//     }
    
//     private boolean isWinner(int row, int col){
//         int n = ro.length;
//         if(Math.abs(ro[row]) == n) return true;
//         if(Math.abs(co[col]) == n) return true;
//         if(Math.abs(diag) == n || Math.abs(diag2) == n) return true;
//         return false;
//     }
    
// }



var tiles = document.getElementsByClassName("tile");
var buttons = document.getElementsByClassName('buttons');
var winnerExists = false;
var state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var winMatrix = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]];

function claim(tile) {
    if (isntClaimed(tile) && !winnerExists) {
        tile.innerHTML = 'X';
        state[tile.id] = 1;
        checkForWinner(state);
        if (!winnerExists) {
            aiTurn(state, 0, true);
        }
    }
    checkForWinner(state);
}

function checkWin(board, player){
    var value = player != true ? 1 : 2;

    for(var i = 0; i < 8; i++){
      var win = true;
      for(var j = 0; j < 3; j++){
        if(board[winMatrix[i][j]] != value){
          win = false;
        }
      }
      if(win){
        return true;
      }
    }
    return false;
}

function isntClaimed(tile) {
    if (!(tile.innerHTML == 'X' || tile.innerHTML == 'O')) {
        return true;
    } else {
        return false;
    }
}

function checkForWinner(board) {
    if (board[0] == board[1] && board[1] == board[2] && !(isntClaimed(tiles[2]))) {
        win(tiles[0], tiles[1], tiles[2]);
    } else if (board[3] == board[4] && board[4] == board[5] && !(isntClaimed(tiles[5]))) {
        win(tiles[3], tiles[4], tiles[5]);
    } else if (board[6] == board[7] && board[7] == board[8] && !(isntClaimed(tiles[8]))) {
        win(tiles[6], tiles[7], tiles[8]);
    } else if (board[0] == board[3] && board[3] == board[6] && !(isntClaimed(tiles[6]))) {
        win(tiles[0], tiles[3], tiles[6]);
    } else if (board[1] == board[4] && board[4] == board[7] && !(isntClaimed(tiles[7]))) {
        win(tiles[1], tiles[4], tiles[7]);
    } else if (board[2] == board[5] && board[5] == board[8] && !(isntClaimed(tiles[8]))) {
        win(tiles[2], tiles[5], tiles[8]);
    } else if (board[0] == board[4] && board[4] == board[8] && !(isntClaimed(tiles[8]))) {
        win(tiles[0], tiles[4], tiles[8]);
    } else if (board[6] == board[4] && board[4] == board[2] && !(isntClaimed(tiles[2]))) {
        win(tiles[6], tiles[4], tiles[2]);
    }

    if (boardFull(board)){
      winnerExists = true;
    }
}

function boardFull(board){
  for (var i = 0; i < board.length; i++) {
      if(board[i] == 0){
        return false;
      }
  }
  return true;
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
        state[i] = 0;
        tiles[i].innerHTML = "";
        tiles[i].style.background = "white"
    }
    winnerExists = false;
}

function aiTurn(board, depth, ai) {
    if(checkWin(board, !ai)){
      return -10 + depth;
    }

    if(boardFull(board)){
      return 0;
    }

    var value = ai == true ? 2 : 1;

    var max = -Infinity;
    var index = 0;

    for (var i = 0; i < board.length; i++){
      if(board[i] == 0){
        var newBoard = board.slice();
        newBoard[i] = value;

        var moveVal = -aiTurn(newBoard, depth + 1, !ai);

        if(moveVal > max){
          max = moveVal;
          index = i;
        }
      }
    }

    if(depth == 0){
      tiles[index].innerHTML = 'O';
      state[index] = 2;
    }

    return max;
}

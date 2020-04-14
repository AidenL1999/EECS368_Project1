//set the variables
var GameActived = false;

var PlayColor = [];

var Board = [];

PlayColor[1] = "*YELLOW*";
PlayColor[2] = "*RED*";

var currentPlayer = 0;

function resetGame() {
    //it would not reset the game until the game is done.
    if (GameActived == true) return false;

    GameActived = true;
    
    for (row=0; row<=5; row++) {
        Board[row] = [];
        for (col=0; col<=6; col++) {
            Board[row][col] = 0;
        }}
    drawBoard();
        currentPlayer = 1;
        SwitchPlayer();}

function drawBoard(){
    //draw the Board and update the value
    checkForWin();
    for (col = 0; col<=6; col++) {
        for (row=0; row<=5; row++) {
           
            document.getElementById('square_'+row+'_'+col).innerHTML ="<span class='piece player"+Board[row][col]+"'> </span>";}}
}

function checkForWin() {
    //check to see if the player win，from top to bottom, left to right, diagonal up and down
    for (i=1; i<=2; i++) {
        
        for (col = 0; col <=3; col++) {
            for (row = 0; row <=5; row++) {
                
                if (Board[row][col] == i) {
                    if ((Board[row][col+1] == i) && (Board[row][col+2] == i) && (Board[row][col+3] == i)) {
                        EndGame(i);
                        return true;
                    }}}}
    }
    
    
    for (i=1; i<=2; i++) {
        
        for (col = 0; col <=6; col++) {
            for (row = 0; row <=2; row++) {
                
                if (Board[row][col] == i) {
                    if ((Board[row+1][col] == i) && (Board[row+2][col] == i) && (Board[row+3][col] == i)) {
                        EndGame(i);
                        return true;
                    }}}}
    }
    
    
                    
    
    for (i=1; i<=2; i++) {
        for (col = 0; col <=3; col++) {
            for (row = 3; row <=5; row++) {
                 if (Board[row][col] == i) {
                    if ((Board[row-1][col+1] == i) && (Board[row-2][col+2] == i) && (Board[row-3][col+3] == i)) {
                        EndGame(i);
                        return true;
                    }}}}}
    
    for (i=1; i<=2; i++) {
        for (col = 0; col <=3; col++) {
            for (row = 0; row <=2; row++) {
                if (Board[row][col] == i) {
                    if ((Board[row+1][col+1] == i) && (Board[row+2][col+2] == i) && (Board[row+3][col+3] == i)) {
                        EndGame(i);
                        return true;
                    }}}}
    }
  }


function PlaceDisc(col) {
    //place to the lowest point
        for (row=5; row>=0; row--) {
            if (Board[row][col] == 0) {
                Board[row][col] = currentPlayer;
                drawBoard();
            if (currentPlayer == 1) {
                    currentPlayer = 2;}
            else {
                    currentPlayer = 1;
                }SwitchPlayer();
                return true;
            }}
}

function SwitchPlayer() {
    //show the player's turn
    if (GameActived) {
        document.getElementById('information').style.color='white';
        document.getElementById('information').innerHTML = "Player " + currentPlayer + " <span class='player"+currentPlayer+"'>[[" + PlayColor[currentPlayer] + "]]</span>" + "'s turn";
    }
}

function EndGame(winningPlayer) {
    //end the game after a player won
    
    document.getElementById('information').style.color='white';
    document.getElementById('information').innerHTML = "Winner is " + winningPlayer + "! Congratulation!";
    GameActived = false;
}

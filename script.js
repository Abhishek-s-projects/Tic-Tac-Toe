const boardSize = 9;
const msg = document.getElementById("msg");
const board = document.getElementsByClassName("box");
const resetBtn = document.getElementById("reset")
const flash = document.getElementById("flash")
resetBtn.addEventListener("click", initialise)


function createPlayer(namee, attempNo, placeValues, symbol, color){
    this.namee = namee;
    this.attempNo = attempNo;
    this.placeValues = placeValues;
    this.symbol = symbol;
    this.color = color;
}

const boxValue = [1, -4, 3, 2, 0, -2, -3, 4, -1];
let player1;
let player2;
let boardMap;
let totalTurns;
let playerTurn;

initialise(); 

function initialise() {
    player1 = new createPlayer("Player-1", 0, [], "X", "rgb(255, 0, 0)");
    player2 = new createPlayer("Player-2", 0, [], "O", "rgb(0, 128, 0)");
    boardMap = new Map();
    totalTurns = 0;
    playerTurn = player1;
    for (let i = 0; i < boardSize; i++) {
        board[i].addEventListener("click", move, {once: true});
        boardMap.set(board[i], boxValue[i]);
        board[i].textContent = null;
    }
    msg.style.color = playerTurn.color;
    msg.textContent = playerTurn.namee + " turn:";
    flash.style.display = "none"
}

function move() {
    update(this)
    if (totalTurns > 4 && isWinSituation(playerTurn)) {
        endGame(playerTurn.namee + " wins...")
        for (let i = 0; i < boardSize; i++) {board[i].removeEventListener("click", move)}
        return
    } else if (totalTurns === 9) {
        endGame("Game Draws...","#000000")
        return
    }
    toggleTurn()
}

function toggleTurn() {
    playerTurn = (totalTurns%2===1) ? player2 : player1;
    msg.style.color = playerTurn.color;
    msg.textContent = playerTurn.namee + " turn:";
}

function update(selector){
    selector.textContent = playerTurn.symbol;
    selector.style.color = playerTurn.color;
    playerTurn.placeValues[playerTurn.attempNo] = boardMap.get(selector);
    playerTurn.attempNo++;
    totalTurns++;
}

function isWinSituation(player){
    let i,j;
    let sum=0;
    let arr = [];
    
    switch (player.attempNo)
    {
        case 3:   
            for (i = 0; i < 3; i++) sum += player.placeValues[i];
            return sum === 0 ?  1 : 0;

        case 4:
            return findTriplet(player.placeValues);

        case 5:
            for (i = 0; i < 4; i++)
            {
                for (j = 1; j < 5; j++)
                {
                    arr[j-1] = player.placeValues[(i+j)%5];
                }
                if (findTriplet(arr)) return 1;
            }
        default:
            return 0;
    }
}


function findTriplet(arr)
{
    let sum,i;
    sum = i = 0;
    for (i = 0; i < 4; i++) sum += arr[i];
    for (i = 0; i < 4; i++) if (sum === arr[i]) return 1;
    return 0;     
}

function endGame(str ,color="default"){
    msg.style.color = color;
    msg.textContent = str;
    flash.style.display = "flex";
}
const boardSize = 9;
const msg = document.getElementById("msg");
const board = document.getElementsByClassName("box");

function createPlayer(namee, attempNo, placeValues, symbol, color){
    this.namee = namee;
    this.attempNo = attempNo;
    this.placeValues = placeValues;
    this.symbol = symbol;
    this.color = color;
}

const player1 = new createPlayer("Player-1", 0, [], "X", "rgb(255, 0, 0)");
const player2 = new createPlayer("Player-2", 0, [], "O", "rgb(0, 128, 0)");
const boardMap = new Map();
const boxValue = [1,-4,3, 2,0,-2 ,-3,4,-1];
let totalTurns = 0;
let playerTurn = player1;

for (let i = 0; i < boardSize; i++) {
    board[i].addEventListener("click", update, {once: true});
    boardMap.set(board[i], boxValue[i]);
}

function update() {
    this.textContent = playerTurn.symbol;
    this.style.color = playerTurn.color;
    playerTurn.placeValues[playerTurn.attempNo] = boardMap.get(this);
    playerTurn.attempNo++;
    if (totalTurns > 3 && isWinSituation(playerTurn)) {
        msg.textContent = playerTurn.namee + " wins...";
        // alert(msg.textContent);
        for (let i = 0; i < boardSize; i++) {board[i].removeEventListener("click", update);}   
        return;
    } 
    totalTurns++;
    if(totalTurns == 9){
        msg.style.color = "#000000";
        msg.textContent =  "game draws";
        // alert(msg.textContent);
        return;
    }
    playerTurn = (totalTurns%2==1) ? player2 : player1;
    msg.style.color = playerTurn.color;
    msg.textContent = playerTurn.namee + " turn:";
}


function isWinSituation(player){
    let i,j;
    let sum=0;
    let arr = [];
    
    switch (player.attempNo)
    {
        case 3:   
            for (i = 0; i < 3; i++) sum += player.placeValues[i];
            return sum == 0 ?  1 : 0;

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
    for (i = 0; i < 4; i++) if (sum == arr[i]) return 1;
    return 0;     
}
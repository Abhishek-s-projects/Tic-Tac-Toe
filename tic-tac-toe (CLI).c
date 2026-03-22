#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#define boardSize 9
typedef struct 
{
    char name[10];
    // char places[5];
    int attempNo;
    int placeValues[5];
    char symbol;
}player;

void printBoard(char *);
void initialise(player *p1, player *p2, char *);
int isWinSituation(player *);
int getplaceValue(char);
int findTriplet(int *);

int main(void){
    
    //declaration
    int i, j, isInValid;
    char board[boardSize];
    char c='a', temp;
    player *playerTurn;
    player player1;
    player player2;
    
    initialise(&player1, &player2, board);

    // game starts

    printf("Choose a position:");
    printBoard(board);
    printf("please type a-i");
    
    for (i = 0; i < boardSize; i++)
    {
        playerTurn = (i%2 == 1) ? &player2 : &player1;
        do
        {
            isInValid = 1;
            printf("\n%s turn :", playerTurn->name);
            scanf(" %c",&temp);
            while(getchar() != '\n');
            for (j = 0; j < boardSize; j++)        // loop for checking valid move
            {
                if (temp == board[j] && temp != 'X' && temp !='O')
                {   
                    //update
                    isInValid = 0;
                    board[j] = playerTurn->symbol;
                    // playerTurn->places[playerTurn->attempNo] = temp;
                    playerTurn->placeValues[playerTurn->attempNo] = getplaceValue(temp);
                    playerTurn->attempNo++;
                    break;
                }
            }
            isInValid ? printf("invalid move! try again\n") : printf("\n");
        }while (isInValid);
        #if defined(_WIN32) || defined(_WIN64)
            system("cls");
        #else
            system("clear");
        #endif
        printBoard(board);
        if (i > 3){
            if (isWinSituation(playerTurn)){
                printf("\n%s wins...\n\n", playerTurn->name);
                break;
            }
        }
    }
    if(i==9) printf("Game Draw...\n");
    printf("Exiting...\n\n");
    return 0;
}

//game ends 


//supporting functions

void initialise(player *p1, player *p2, char *b){
    int i;
    char c='a';
    strcpy(p1->name, "player-1");
    p1->symbol = 'X';
    p1->attempNo = 0;
    strcpy(p2->name, "player-2");
    p2->symbol = 'O';
    p2->attempNo = 0;
    for (i=0; i<boardSize; i++)
    {
        b[i] = c;
        c++;
    }
}

void printBoard(char *location){
    int i;
    printf("\n");
    for (i = 0; i < boardSize; i++)
    {
        printf(" %c ", location[i]);
        if ((i + 1) % 3 != 0)
            printf("|");
        if ((i + 1) % 3 == 0 && i != 8)
            printf("\n---+---+---\n");
    }
    printf("\n\n");
}

int isWinSituation(player *p){
    int i,j;
    int sum=0;
    int arr[5];
    
    switch (p->attempNo)
    {
        case 3:   
            for (i = 0; i < 3; i++) sum += p->placeValues[i];
            return sum == 0 ?  1 : 0;

        case 4:
            return findTriplet(p->placeValues);

        case 5:
            for (i = 0; i < 4; i++)
            {
                for (j = 1; j < 5; j++)
                {
                    arr[j-1] = p->placeValues[(i+j)%5];
                }
                if (findTriplet(arr)) return 1;
            }
        default:
            return 0;
    }
}

int getplaceValue(char a){
    int boardMap[boardSize] = {1,-4, 3, 
                               2, 0,-2,
                              -3, 4,-1};
    int placeValue = boardMap[a-'a'];
    return placeValue;
}

int findTriplet(int *arr)
{
    int sum,i;
    sum = i = 0;
    for (i = 0; i < 4; i++) sum += arr[i];
    for (i = 0; i < 4; i++) if (sum == arr[i]) return 1;
    return 0;     
}
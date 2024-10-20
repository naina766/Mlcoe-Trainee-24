// window.addEventListener('DOMContentLoaded', () =>{
//     const tiles = Array.from(document.querySelectorAll('.cell'));
//     const playerDisplay = document.querySelector('.display-player');
//     const resetButton = document.querySelector('#reset');
//     const announcer = document.querySelector('.announcer');

//     let board = ['', '', '', '', '', '', '', '', ''];
//     let currentPlayer = 'X';
//     let isGameActive = true;

//     const PLAYERX_WON = 'PLAYERX_WON';
//     const PLAYERO_WON = 'PLAYERO_WON';
//     const TIE = 'TIE';

//     const winningConditions = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6]
//     ];

//     function handleResultValidation() {
//         let roundWon = false;
//         for(let i = 0; i<=7; i++){
//             const winCondition = winningConditions[i];
//             const a = board[winCondition[0]];
//             const b = board[winCondition[1]];
//             const c = board[winCondition[2]];
//             if(a === '' || b === '' || c === ''){
//                 continue;
//             }
//             if(a === b && b === c){
//                 roundWon = true;
//                 break;
//             }
//         }
//         if(roundWon){
//             announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
//             isGameActive = false;
//             return; 
//         }
//         if(!board.includes(''))
//             announce(TIE);
//     };

//     const announce = (type) =>{
//         switch(type){
//             case PLAYERO_WON:
//                 announcer.innerHTML = 'Player <span class="playerO"> O </span> Won';
//                 break;
//             case PLAYERX_WON: 
//                 announcer.innerHTML = 'Player <span class="playerX"> X </span> Won';
//                 break;
//             case TIE:
//                 announcer.innerText = 'Tie';
//         }
//         announcer.classList.remove('hide');
//     };

//     const isValidAction = (tile) =>{
//         if(tile.innerText === 'X' || tile.innerText === 'O'){
//             return false;
//         }
//         return true;
//     }
//     const updateBoard = (index)  =>{
//         board[index] = currentPlayer;
//     }
//     const changePlayer = () =>{
//         playerDisplay.classList.remove(`player${currentPlayer}`);
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         playerDisplay.innerText = currentPlayer;
//         playerDisplay.classList.add(`player${currentPlayer}`);
//     }

   
//     tiles.forEach((tile, index) =>{
//         tile.addEventListener('click', () => {
//          if(isValidAction(tile) && isGameActive){
//                 tile.innerText = currentPlayer;
//                 tile.classList.add(`player${currentPlayer}`);
//                 updateBoard(index);
//                 handleResultValidation();
//                 changePlayer();
//             }
//         })
//     })

//     // const resetBoard =() =>{
//     //     board = ['','','','','','','','',''];
//     //     isGameActive = true;
//     //     announcer.classList.add('hide');

//     //     if(currentPlayer === 'O'){
//     //         changePlayer();
//     //     }

//     //     tiles.forEach(tile =>{
//     //         tile.innerText = '';
//     //         tile.classList.remove('playerX');
//     //         tile.classList.remove('playerO');
//     //     })
//     // }
//     const resetBoard = () => {
//         board = ['', '', '', '', '', '', '', '', ''];
//         isGameActive = true;
//         announcer.classList.add('hide');
        
//         // Reset player display properly
//         playerDisplay.classList.remove('playerX', 'playerO');  // Remove both classes
//         currentPlayer = 'X';  // Always reset to Player X
//         playerDisplay.innerText = currentPlayer;
//         playerDisplay.classList.add(`player${currentPlayer}`);
    
//         tiles.forEach(tile => {
//             tile.innerText = '';
//             tile.classList.remove('playerX');
//             tile.classList.remove('playerO');
//         });
//     };
    
//     resetButton.addEventListener('click', resetBoard);

// })

let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let turnO = true;
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () =>{
    for(let box of boxes){
       box.disabled = true; 
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

       });
})
newGame.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);

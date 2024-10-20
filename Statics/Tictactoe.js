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

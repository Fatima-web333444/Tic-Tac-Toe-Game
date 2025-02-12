let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let meg=document.querySelector("#msg");
let turnO=true;//playerO
const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO)
        {box.innerText="O";
        count=count+1;
        turnO=false;}
        else if(turnO==false)
        {
            box.innerText="X";
            count=count+1;
        turnO=true;
        }
        box.disabled=true;

       checkWinner();
    });
    
});
const disableBoxes=()=>{
    for(let val  of boxes)
    {
        val.disabled=true;
    }
}
const showWinner=(winner)=>{
     msg.innerText=`Congratulations,Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
     newgame();
};

const checkWinner=()=>{
  for(let pattren of winpatterns){
   // console.log(pattren[0],pattren[1],pattren[2]);
    //console.log(boxes[pattren[0]],boxes[pattren[1]],boxes[pattren[2]]);
    let pos1val=boxes[pattren[0]].innerText;
    let pos2val=boxes[pattren[1]].innerText;
    let pos3val=boxes[pattren[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!="")
    {
        if(pos1val===pos2val&&pos2val===pos3val)
        {
            showWinner(pos1val);
            withdraw();
    
        }
       }
    
}

}; 
const withdraw = () => {
    let draw = true;
    for (let pattern of winpatterns) {
        const [pos1, pos2, pos3] = pattern;
        const val1 = boxes[pos1].innerText;
        const val2 = boxes[pos2].innerText;
        const val3 = boxes[pos3].innerText;
        if (val1 === "" || val2 === "" || val3 === "") {
            draw = false; // If any of the positions in a win pattern is empty, it's not a draw
            break;
        }
    }
    
    if (draw && count === 9) {
        // If all boxes are filled and no winner, it's a draw
        msg.innerText = "Game is draw";
        msgContainer.classList.remove("hide");
        disableBoxes();
        newgamebtn.addEventListener( "click",resetGame);
    }
};


   
const resetGame=()=>{


    for(let val of boxes)
    {
        
       val.innerText="";
       val.disabled=false;
    }
    msgContainer.classList.add("hide");
    turnO=true;

};   
 
    newgamebtn.addEventListener( "click",resetGame);
    resetbtn.addEventListener("click",resetGame);
    
          
    

  




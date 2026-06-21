let userscore =0;
let compscore =0;

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const drawgame = ()=>{
     msg.innerText = "Game was Draw. Play again.";
     msg.style.backgroundColor ="#081b31"
}

const showWinner = (userWin,userchoice,compchoice)=>{
    if(userWin){
       userscore++;
       userScorePara.innerText = userscore;
        msg.innerText = `you Win!  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
       compscore++;
       compScorePara.innerText = compscore;
        msg.innerText = `you Lost! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const getCompChoice = ()=>{
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const playGame = (userchoice)=>{
    // generate Computer Choice
const compchoice = getCompChoice();


if(userchoice === compchoice){
    // Draw Game
drawgame()
}else{
    let userWin = true;
    if(userchoice === "rock"){
        // scissors,paper

       userWin = compchoice === "paper"?false : true
    }else if(userchoice === "paper"){
        // scissors,rock

        userWin = compchoice === "scissors"?false : true
    }else{
        // rock,paper
        userWin = compchoice === "rock"?false : true

    }
    showWinner(userWin,userchoice,compchoice)

}


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})

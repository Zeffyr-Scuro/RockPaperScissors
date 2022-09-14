const moves = ["rock", "paper", "scissors"]
const rockEl = document.getElementById("rock")
const paperEl = document.getElementById("paper")
const scissorsEl = document.getElementById("scissors")
const resultEl = document.getElementById("result-el")


rockEl.addEventListener("click", function() {
    results(rockEl.id)
    
})
paperEl.addEventListener("click", function() {
    results(paperEl.id)
    
})
scissorsEl.addEventListener("click", function() {
    results(scissorsEl.id)
    
})


const results = (player) => {
    const opponent = moves[Math.floor(Math.random() * 3)]
    if (player === opponent){
        resultEl.textContent = "DRAW!"
    }
    else if (player === "paper" && opponent === "rock"){
        resultEl.textContent = "WIN!!"
    }
    else if (player === "scissors" && opponent === "paper"){
        resultEl.textContent = "WIN!!"
    }
    else if (player === "rock" && opponent === "scissors"){
        resultEl.textContent = "WIN!!"
    }else{
        resultEl.textContent = "LOSSES!"
    }
}

//!JUEGO: PIEDRA, PAPEL o TIJERAS
const options = document.querySelectorAll(".options")
let playerScore = 0
let computerScore = 0

options.forEach((option) => {
    option.addEventListener("click", function () {
        const player = this.textContent

        const computerOptions = ["Rock", "Paper", "Scissors"]
        const computer = computerOptions[Math.floor(Math.random()*3)]

        compare(player, computer)
        scoreUpdate()
        if (checkWinner()) {
            playerScore = computerScore = 0;
            scoreUpdate()
        }
    })
})

function compare(player, computer) {
    const match = `${player} vs ${computer}`
    if (player === computer) {
        alert(`${match} = it's a Tie`)
        return
    }
    //!Rock
    if (player === "Rock") {
        if (computer === "Scissors") {
            alert(`${match} = You Win`)
            playerScore++;
        } else {
            alert(`${match} = Computer Wins`)
            computerScore++
        }
    }
    //!Paper
    else if (player === "Paper") {
        if (computer === "Rock") {
            alert(`${match} = You Win`)
            playerScore++
        } else {
            alert(`${match} = Computer Wins`)
            computerScore++
        }
    }
    //!Scissors
    else {
        if (computer === "Paper") {
            alert(`${match} = You Win`)
            playerScore++
        } else {
            alert(`${match} = Computer Wins`)
            computerScore++
        }
    }
}

function scoreUpdate() {
    document.getElementById("p-score").textContent = playerScore
    document.getElementById("c-score").textContent = computerScore
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner =
            playerScore === 5
                ? "You win! Congratulations! Thanks for playing!"
                : "Computer wins! Better luck next time! Thanks for playing!"
        alert(winner)
        return true
    }
    return false
}
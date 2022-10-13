
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
let computer;

function getComputerChoice(computer) {
    return computer = rockPaperScissors[Math.floor(Math.random() * (3 - 0) + 0)];
}

getComputerChoice(computer);

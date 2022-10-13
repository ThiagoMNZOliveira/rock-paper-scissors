
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
let playerChoice = Number(prompt("Make your choice, 0 for Rock, 1 for Paper and 2 for Scissors"));

const computerChoice = computer => {
    return computer = rockPaperScissors[Math.floor(Math.random() * (3 - 0) + 0)];
}

const player = player => {
    return player = rockPaperScissors[playerChoice];
}



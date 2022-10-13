
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
let playerChoice = prompt("Make your choice, 0 for Rock, 1 for Paper and 2 for Scissors");

const computerChoice = () => {
    return rockPaperScissors[Math.floor(Math.random() * (3 - 0) + 0)];
}

const player = () => {
    return rockPaperScissors[playerChoice];
}

const getWinner = (computer, player) => {
    if (player == computer) {
        return console.log('Draw');
    }
    if (player == 'Rock') {
        if (computer == 'Paper') return console.log(`You lost!! You chose ${player} and computer chose ${computer}`);
        if (computer == 'Scissors') return console.log(`You won!! You chose ${player} and computer chose ${computer}`);
    }
    if (player == 'Paper') {
        if (computer == 'Rock') return console.log(`You won!! You chose ${player} and computer chose ${computer}`);
        if (computer == 'Scissors') return console.log(`You lost!! You chose ${player} and computer chose ${computer}`);
    }
    if (player == 'Scissors') {
        if (computer == 'Rock') return console.log(`You lost!! You chose ${player} and computer chose ${computer}`);
        if (computer == 'Paper') return console.log(`You won!! You chose ${player} and computer chose ${computer}`);
    }
}
getWinner(computerChoice(), player());



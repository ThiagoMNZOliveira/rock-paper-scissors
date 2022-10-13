let score = [0, 0];

function game() {
    const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

    const computerChoice = () => {
        return rockPaperScissors[Math.floor(Math.random() * (3 - 0) + 0)];
    }

    const player = () => {
        let playerChoice = prompt("Make your choice, 0 for Rock, 1 for Paper and 2 for Scissors");
        return rockPaperScissors[playerChoice];
    }

    const getWinner = (computer, player) => {
        if (player == computer) {
            return console.log('Draw');
        }
        if (player == 'Rock') {
            if (computer == 'Paper') {
                score[1]++;
                return console.log(`You lose!! You chose ${player} and computer chose ${computer}`);
            }
            if (computer == 'Scissors') {
                score[0]++;
                return console.log(`You won!! You chose ${player} and computer chose ${computer}`);
            }
        }
        if (player == 'Paper') {
            if (computer == 'Rock') {
                score[0]++;
                return console.log(`You won!! You chose ${player} and computer chose ${computer}`);
            }
            if (computer == 'Scissors') {
                score[1]++;
                return console.log(`You lose!! You chose ${player} and computer chose ${computer}`);
            }
        }
        if (player == 'Scissors') {
            if (computer == 'Rock') {
                score[1]++;
                return console.log(`You lose!! You chose ${player} and computer chose ${computer}`);
            }
            if (computer == 'Paper') {
                score[0]++;
                return console.log(`You won!! You chose ${player} and computer chose ${computer}`);
            }
        }
    }
    getWinner(computerChoice(), player());

}

for (let i = 0; i < 5; i++) {
    game();
}

console.log(`Player || Computer
     ${score[0]} || ${score[1]}`);







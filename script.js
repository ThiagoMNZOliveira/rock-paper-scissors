let score = [0, 0];

const buttons = document.querySelector('.buttons');


buttons.addEventListener('click', e => {
    const button = e.target;
    let playerChoice;
    if(button.classList.contains('rock')) {
        playerChoice = 'Rock';
        game(playerChoice);
    }
    if(button.classList.contains('paper')) {
        playerChoice = 'Paper';
        game(playerChoice);
    }
    if(button.classList.contains('scissors')) {
        playerChoice = 'Scissors';
        game(playerChoice);
    }
})

function game(player) {
    const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    const display = document.querySelector('.display');

    const computerChoice = () => {
        return rockPaperScissors[Math.floor(Math.random() * (3 - 0) + 0)];
    }

    const getWinner = (computer, player) => {
        if (player == computer) {
            return display.innerText = `${player} x ${computer}`;
        }
        if (player == 'Rock') {
            if (computer == 'Paper') {
                score[1]++;
                return display.innerText = `You lose!! You chose ${player} and computer chose ${computer}`;
            }
            if (computer == 'Scissors') {
                score[0]++;
                return display.innerText = `You won!! You chose ${player} and computer chose ${computer}`;
            }
        }
        if (player == 'Paper') {
            if (computer == 'Rock') {
                score[0]++;
                return display.innerText = `You won!! You chose ${player} and computer chose ${computer}`;
            }
            if (computer == 'Scissors') {
                score[1]++;
                return display.innerText = `You lose!! You chose ${player} and computer chose ${computer}`;
            }
        }
        if (player == 'Scissors') {
            if (computer == 'Rock') {
                score[1]++;
                return display.innerText = `You lose!! You chose ${player} and computer chose ${computer}`;
            }
            if (computer == 'Paper') {
                score[0]++;
                return display.innerText = `You won!! You chose ${player} and computer chose ${computer}`;
            }
        }
    }
    getWinner(computerChoice(), player);
    if(score[0] >= 5 || score[1] >= 5) {
        display.innerText = `Player || Computer
        ${score[0]}  ${score[1]}`
    }
}








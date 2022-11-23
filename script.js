// Game variables
let playerScore = 0;
let computerScore = 0;
let round = 0;
let ties = 0;
const computerOptions = ['rock','paper','scissors'];
let previousInput = '';

// Selected element variables
const prompts = document.querySelectorAll('.highlight');
const input = document.querySelector('.input');
const info = document.querySelector('.info');

// Checks command entered against allowed commands
function checkCommand(cmd) {
    console.log(cmd);
    if (cmd === 'play rock' || cmd === 'play paper' || cmd == 'play scissors') {
        if (round < 5) {
            playRound(cmd.replace('play ',''));
        } else {
            info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>The game is over. Enter the command <span class="highlight">restart</span> to play again!`);
        }
        
    } else {
        if (cmd === 'get score') {
            info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>Your score is `+playerScore+` and the computer's score is `+computerScore+'.');
        } else {
            if (cmd === 'restart') {
                location.reload();
            } else {
                if (cmd === 'get round') {
                    info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>You've played `+round+' round(s). ');
                } else {
                    console.log('error');
                    returnError(cmd);
                }
            } 
        }
    }
}

// Runs the round, comparing the players move to the computer's
function playRound(action) {
    let computerMove = computerOptions[Math.floor(Math.random()*3)];
    if (action === computerMove) {
        info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>It's a tie!`);
        ties += 1;
    } else {
        if (action === "rock" && computerMove !== "paper") {
            info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>Your `+action+` defeats the computer's `+computerMove+'!');
            playerScore += 1;
            round += 1;
        } else {
            if (action === "paper" && computerMove !== "scissors") {
                info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>Your `+action+` defeats the computer's `+computerMove+'!');
                playerScore += 1;
                round += 1;
            } else {
                if (action === "scissors" && computerMove !== "rock") {
                    info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>Your `+action+` defeats the computer's `+computerMove+'!');
                    playerScore += 1;
                    round += 1;
                } else {
                    info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>Your `+action+` loses to the computer's `+computerMove+'!');
                    computerScore += 1;
                    round += 1;
                }
            }
        }
    }
    if (round == 5) {
        if (playerScore > computerScore) {
            info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>After five brutal rounds, you beat the computer by `+(playerScore-computerScore)+' point(s)!');
        } else {
            info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>After five brutal rounds, the computer beat you by `+(computerScore-playerScore)+' point(s)!');
        }
    } 
    if (ties == 5) {
        info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>Damn that's a lot of ties!`);
    }
}

// Returns an error message for invalid commands
function returnError(str) {
    info.insertAdjacentHTML('beforeend',`<br><span style='color: yellow;'>$ </span>Command not valid: `+str);
}

// Processes inputted user commands when the enter key is pressed
window.addEventListener('keydown',e => {
    if (e.keyCode === 13 && input.value !== '') {
        checkCommand(input.value.toLowerCase());
        previousInput = input.value;
        input.value = '';
        scrollToBottom();
    }
});

// Overwrites input section with previously entered command
window.addEventListener('keydown',e => {
    if (e.keyCode === 38 && previousInput !== '') {
        input.value = previousInput;
        document.querySelector('.input').focus();
    }
});

// Makes highlighted code in instructions clickable and automatically adds them to the input field
prompts.forEach(prompt => prompt.addEventListener('click',e => {
    input.value = e.target.innerText;
    document.querySelector('.input').focus();
}));

// Scroll to bottom of page
function scrollToBottom() {
    window.scrollTo(0,document.body.scrollHeight);
}
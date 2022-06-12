
let randomLimitNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lowHigh = document.getElementsByClassName('lowHigh')[0];
let finalResult = document.querySelector('.finalResult');

let guess = document.getElementById('guess');
let guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let restart;
//alert('width: ' + window.screen.availWidth + 'height: ' + window.screen.availHeight)
//1440 * 860
//for submit button
guessSubmit.addEventListener('click', checkGuess);

//function that run the display guess
function checkGuess() {
    // to run for every input value send, check and then return as previous guess
    const userGuess = Number(guess.value);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';        
    }           
    guesses.textContent += userGuess + ' ';
    
    // to check if input entered is correct or not and has reach 10 limit
    if (userGuess === randomLimitNumber) {
        finalResult.textContent = '🤝 congratulation 🥇 you are the best 🏆';
        finalResult.style.backgroundColor = 'green';
        lowHigh.textContent = '';
        gameOver();
    } else if (guessCount === 10) {
        finalResult.textContent = 'Game over 👊, you can do better next time 🏋 ';
        lowHigh.textContent = '';
        gameOver();
    } else {
        finalResult.textContent = '👏 Welldone, take your time, you will soon hit the target 🎯';
        finalResult.style.backgroundColor = 'red';
        if (userGuess < randomLimitNumber) {
          lowHigh.textContent = 'your guess is too low'
        } else if (userGuess > randomLimitNumber) {
          lowHigh.textContent = 'your guess is too high'
        }
    }

    guessCount++;
    guess.value = '';
    guess.focus();
}

function gameOver() {
  guess.disabled = true;
  guessSubmit.disabled = true;

  //this run the game again
  restart = document.createElement('button');
  restart.textContent = 'Start a new game 🥁';
  restart.style.borderRadius = '30px';
  restart.style.backgroundColor ='yellow';
  restart.style.position ='absolute';
  restart.style.left ='44.5%';
  restart.style.top ='25%';
  document.body.append(restart);
  restart.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetResult = document.querySelectorAll('.result p');
  for (const resetRes of resetResult) {
    resetRes.textContent = '';
  }


  restart.parentNode.removeChild(restart);

  guess.disabled = false;
  guessSubmit.disabled = false;
  guess.value = '';
  guess.focus();

  finalResult.style.backgroundColor = 'white';

  randomLimitNumber = Math.floor(Math.random() * 100) + 1;
}



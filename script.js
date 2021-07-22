// Pages
const gamePage = document.getElementById('game-page');
const scorePage = document.getElementById('score-page');
const splashPage = document.getElementById('splash-page');
const countdownPage = document.getElementById('countdown-page');

// Splash Page
const startForm = document.getElementById('start-form');
const radioContainers = document.querySelectorAll('.radio-container');
const radioInputs = document.querySelectorAll('input');
const bestScores = document.querySelectorAll('.best-score-value');

// Countdown Page
const countdown = document.querySelector('.countdown');

//Game Page
const itemContainer = document.querySelector('.item-container');
// Score Page
const finalTimeEl = document.querySelector('.final-time');
const baseTimeEl = document.querySelector('.base-time');
const penaltyTimeEl = document.querySelector('.penalty-time');
const playAgainBtn = document.querySelector('.play-again');

// Equations
let questionAmount = 0;
let equationsArray = [];

// Game Page
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];

// Starting the countdown
function countdownStart() {
    countdown.textContent = '3';
    setTimeout(() => {
        countdown.textContent = '2';
    }, 1000);
    setTimeout(() => {
        countdown.textContent = '1';
    }, 2000);
    setTimeout(() => {
        countdown.textContent = 'GO!';
    }, 3000);
}


// Navigate from Splash to Countdown Page
function showCountdown() {
    countdownPage.hidden = false;
    splashPage.hidden = true;
    countdownStart();
}
// Get the value from the selected radio button
function getRadioValue() {
    let radioValue = 0;
    radioInputs.forEach((radioInput) => {
        if (radioInput.checked){
           radioValue = radioInput.value;
        }
    });
    return radioValue;
}


startForm.addEventListener('click', () => {
    radioContainers.forEach((radioEl) => {
        // REMOVE DEFAULT SELECTED LABEL STYLING
        radioEl.classList.remove('selected-label');
        // Add it back if radio input is check
        if (radioEl.children[1].checked){
            radioEl.classList.add('selected-label');
        }
    });
});

// Form that decides amount of questions
function selectQuestionAmount(e) {
     e.preventDefault();
      questionAmount = getRadioValue();
      console.log(questionAmount);
      if (questionAmount ){
          showCountdown();
      }

}

// Event Listeners
startForm.addEventListener('submit', selectQuestionAmount);
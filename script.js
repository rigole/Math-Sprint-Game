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

// Get Random Number up to a max number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// Create Correct/Incorrect random equations
function createEquations() {
    // Randomly choose how many equations there should be
    const correctEquations = getRandomInt(questionAmount);
    console.log('correct equations:', correctEquations);
    // Set amount of wrong equations
    const wrongEquations = questionAmount - correctEquations;
    console.log('Wrong equations:', wrongEquations);
    // Loop through, multiply randomly numbers up to 9 and then push to array
    for (let i = 0; i < correctEquations; i++){
        firstNumber = getRandomInt(9);
        secondNumber = getRandomInt(9);
        const equationValue = firstNumber * secondNumber;
        const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
        equationObject = { value: equation, evaluated: 'true' };
        equationsArray.push(equationObject);
    }

    // Loop through, mess with the equation results, push to array
    for (let i = 0; i < wrongEquations; i++){
        firstNumber = getRandomInt(9);
        secondNumber = getRandomInt(9);
        const equationValue = firstNumber * secondNumber;
        wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
        wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
        wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
        const formatChoice = getRandomInt(3);
        const equation = wrongFormat[formatChoice];
        equationObject = { value: equation, evaluated: 'false'};
        equationsArray.push(equationObject);
    }
    console.log('equations array:', equationsArray);
}







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
    createEquations();
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
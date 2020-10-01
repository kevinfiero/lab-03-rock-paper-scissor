
const initialHiddenClassElements = document.getElementsByClassName('initial-hidden');
const resetButton = document.getElementById('reset-button');
const startButton = document.getElementById('start-button');
const userThrowImgDiv = document.getElementById('user-throw-img');
const opponentThrowImgDiv = document.getElementById('opponent-throw-img');
const userThrowSpan = document.getElementById('user-throw-span');
const opponentThrowSpan = document.getElementById('opponent-throw-span');
const userScoreSpan = document.getElementById('user-score');
const opponentScoreSpan = document.getElementById('opponent-score');
const tieScoreSpan = document.getElementById('tie-score');
const resetSpanCount = document.getElementById('reset-count');
let userWin = 0;
let opponentWin = 0;
let tie = 0;
let resets = 0;


export function startGame(){
    unhideElements();
    startButton.style.display = 'none';
}

export function resetGame(){
    
    hideElements();
    startButton.style.display = 'block';
    userScoreSpan.textContent = 0;
    opponentScoreSpan.textContent = 0;
    tieScoreSpan.textContent = 0;
    userWin = 0;
    opponentWin = 0;
    tie = 0;
    resets++;
    resetSpanCount.textContent = `This game has been reset ${resets} times.`;
}

export function throwAction(){

    let checkedRadioButton = document.querySelector(':checked');
    let userThrow = checkedRadioButton.value;
    let opponentThrow = generateOpponentThrow();

    userThrowSpan.textContent = userThrow;
    opponentThrowSpan.textContent = opponentThrow;
    userThrowImgDiv.src = grabSVGString(userThrow);
    opponentThrowImgDiv.src = grabSVGString(opponentThrow);

    userThrowSpan.style.visibility = 'visible';
    opponentThrowSpan.style.visibility = 'visible';
    userThrowImgDiv.style.visibility = 'visible';
    opponentThrowImgDiv.style.visibility = 'visible';

    let resultValue = checkResults(userThrow, opponentThrow);

    changeScore(resultValue);
}

function unhideElements(){
    let i;
    for (i = 0; i < initialHiddenClassElements.length; i++){
        initialHiddenClassElements[i].style.visibility = 'visible';
    } 
    resetButton.style.display = 'block';
}

function hideElements(){
    let i;
    for (i = 0; i < initialHiddenClassElements.length; i++){
        initialHiddenClassElements[i].style.visibility = 'hidden';
    } 
    resetButton.style.display = 'none';
    userThrowSpan.style.visibility = 'hidden';
    opponentThrowSpan.style.visibility = 'hidden';
    userThrowImgDiv.style.visibility = 'hidden';
    opponentThrowImgDiv.style.visibility = 'hidden';
}

function grabSVGString(thrown){

    if (thrown === 'Rock'){
        return 'assets/rock.svg';
    } else if (thrown === 'Paper'){
        return 'assets/paper.svg';
    } else if (thrown === 'Scissor'){
        return 'assets/scissor.svg';
    }
}

function generateOpponentThrow(){
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return 'Rock';
    } else if (num === 1){
        return 'Paper';
    } else {
        return 'Scissor';
    }
}

function checkResults(user, opponent){
    if (
        (user === 'Rock' && opponent === 'Paper') || 
        (user === 'Paper' && opponent === 'Scissor') || 
        (user === 'Scissor' && opponent === 'Rock')){
        return -1;
    } else if (
        (user === 'Paper' && opponent === 'Rock') || 
        (user === 'Scissor' && opponent === 'Paper') || 
        (user === 'Rock' && opponent === 'Scissor')){
        return 1;
    } else {
        return 0;
    }
}


function changeScore(resultValue){
    if (resultValue === -1){
        opponentWin++;
        opponentScoreSpan.textContent = opponentWin;
    } else if (resultValue === 1){
        userWin++;
        userScoreSpan.textContent = userWin;
    } else if (resultValue === 0){
        tie++;
        tieScoreSpan.textContent = tie;
    }
    return;
}
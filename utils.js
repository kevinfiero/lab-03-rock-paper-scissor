
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
const userH2 = document.getElementById('user');
const computerH2 = document.getElementById('computer');
const tieH2 = document.getElementById('tie');

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

export function generateOpponentThrow(){
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return 'Rock';
    } else if (num === 1){
        return 'Paper';
    } else {
        return 'Scissor';
    }
}

export function checkResults(user, computer){
    if (
        (user === 'Rock' && computer === 'Paper') || 
        (user === 'Paper' && computer === 'Scissor') || 
        (user === 'Scissor' && computer === 'Rock')){
        return 'lose';
    } else if (
        (user === 'Paper' && computer === 'Rock') || 
        (user === 'Scissor' && computer === 'Paper') || 
        (user === 'Rock' && computer === 'Scissor')){
        return 'win';
    } else {
        return 'draw';
    }
}


function changeScore(resultValue){
    if (resultValue === 'lose'){
        opponentWin++;
        userScoreSpan.style.fontWeight = 'normal';
        userScoreSpan.style.color = 'black';
        opponentScoreSpan.style.fontWeight = 'bolder';
        opponentScoreSpan.style.color = '#40916c';
        tieScoreSpan.style.fontWeight = 'normal';
        tieScoreSpan.style.color = 'black';
        userH2.style.fontWeight = 'normal';
        userH2.style.color = 'black';
        computerH2.style.fontWeight = 'bolder';
        computerH2.style.color = '#40916c';
        tieH2.style.fontWeight = 'normal';
        tieH2.style.color = 'black';
        opponentScoreSpan.textContent = opponentWin;

    } else if (resultValue === 'win'){
        userWin++;
        userScoreSpan.style.fontWeight = 'bolder';
        userScoreSpan.style.color = '#40916c';
        opponentScoreSpan.style.fontWeight = 'normal';
        opponentScoreSpan.style.color = 'black';
        tieScoreSpan.style.fontWeight = 'normal';
        tieScoreSpan.style.color = 'black';
        userH2.style.fontWeight = 'bolder';
        userH2.style.color = '#40916c';
        computerH2.style.fontWeight = 'normal';
        computerH2.style.color = 'black';
        tieH2.style.fontWeight = 'normal';
        tieH2.style.color = 'black';
        userScoreSpan.textContent = userWin;
    } else if (resultValue === 'draw'){
        tie++;
        userScoreSpan.style.fontWeight = 'normal';
        userScoreSpan.style.color = 'black';
        opponentScoreSpan.style.fontWeight = 'normal';
        opponentScoreSpan.style.color = 'black';
        tieScoreSpan.style.fontWeight = 'bolder';
        tieScoreSpan.style.color = '#40916c';
        userH2.style.fontWeight = 'normal';
        userH2.style.color = 'black';
        computerH2.style.fontWeight = 'normal';
        computerH2.style.color = 'black';
        tieH2.style.fontWeight = 'bolder';
        tieH2.style.color = '#40916c';
        tieScoreSpan.textContent = tie;
        
    }
    return;
}

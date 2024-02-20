
function play(){
    // clear all other screen except playground
    hideElementById('home-section');
    hideElementById('final-score')
    addElementById('play-ground');
   //set the default value of life and score
   setElementTextValueById('current-life', 5);
   setElementTextValueById('current-score', 0);   
    continueGame();
}

function continueGame(){
    // get a random key
 const randomAlphabet = getRandomAlphabet();
//   set the randomly generated key to the screen(to show)
 const currentText = document.getElementById('current-text')
 currentText.innerText = randomAlphabet;
 // set background color
setBackgroundColor(randomAlphabet)
}

// handle the key press by player

document.addEventListener('keyup', handlePlayerKeyPress);
// keypress function
function handlePlayerKeyPress(event){
// get the value what player pressed
const playerPressed = event.key ;
console.log(playerPressed)
// stop the game if player pressed the key 'Esc'
if(playerPressed === 'Escape'){
    gameOver();
}
// get the value what expected to be pressed
const expectedPressed = document.getElementById('current-text').innerText;
// check the press match is missing or not
if(playerPressed === expectedPressed){
    removeBackgroundColor(expectedPressed);
    continueGame();
//    update score
       const currentScore = getElementTextValueById('current-score')
       const updatedScore = currentScore + 1;
       setElementTextValueById('current-score', updatedScore);
    
    }
    else{
        // reduce life count
       const currentLife = getElementTextValueById('current-life');
       const remainingLife = currentLife - 1;
       setElementTextValueById('current-life', remainingLife);
    //    game over
    if(remainingLife === 0){
       gameOver();
    }
}
}

// Game Over function
function gameOver(){
    hideElementById('play-ground')
    addElementById('final-score')
    // get the final score and update it
   const lastScore = getElementTextValueById('current-score');
   setElementTextValueById('last-score', lastScore);
   console.log(lastScore);
//    clear the highlighted key color
const currentAlphabet = getTextElementById('current-text');
  removeBackgroundColor(currentAlphabet);
}
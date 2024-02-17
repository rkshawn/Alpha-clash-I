// function play(){
//     // hide the home screen
//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden')
//     // show the play ground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }
function continueGame(){
    // get a random key
 const randomAlphabet = getRandomAlphabet();
 console.log(randomAlphabet)
//   set the randomly generated key to teh screen(to show)
 const currentText = document.getElementById('current-text')
 currentText.innerText = randomAlphabet
}

function play(){
    hideElementById('home-section');
    addElementById('play-ground');
    continueGame();
}
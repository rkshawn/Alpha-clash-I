function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function addElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
  
function getRandomAlphabet(){
    // get all the alphabet
    const allAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // get a random number between 0 to 25
    const randomNum = Math.random()*25
    const index = Math.round(randomNum);
   const alphabet = allAlphabet[index];
   return alphabet;
}  
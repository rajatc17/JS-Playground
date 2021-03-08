const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput==='rock' || userInput==='paper' || userInput==='scissors'){
    return userInput;
  }

  console.log('ERROR INVALID CHOICE')
};

const getComputerChoice = () => {
  let move = Math.floor(Math.random()*3);
  switch(move)
  {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  }
}

const determineWinner = (userChoice,compChoice) =>{
  if(userChoice === compChoice)
    return 'GAME TIED'

  if(userChoice==='rock'){

    if(compChoice==='scissors')
      return `User win by smashing scissors with rock`

    return `Computer Wins by wrapping the paper!`
  }

  else if(userChoice==='paper'){
    if(compChoice==='scissors')
      return `Computer win by cutting paper with scissors `

    return `User Wins by wrapping the paper!`
  }

  if(compChoice==='rock')
    return `Compuer wins by smashing scissors with rock`

  return `User wins by cutting paper with scissors`

}

let uC = getUserChoice('sci');
let cC = getComputerChoice();
console.log(uC+' VS '+cC)
console.log(determineWinner(uC,cC));
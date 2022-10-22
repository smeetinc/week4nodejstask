let username = prompt("Enter your username");
function game(range){
  //let range = prompt("Enter your max range for the guessing game")
let myGuess = prompt("Enter your guessed number");
  function random(range) {
  return Math.floor(Math.random() * (range - 1 + 1) + 1);
}
  
  let computerGuess = random(range);
  if(myGuess == computerGuess){
    console.log(`${username} you won your guess, continue playing`);
  }
}

console.log(game(prompt("Enter your max range for the guessing game")));

let username = prompt("Enter your username");
function game(range){
  //let range = prompt("Enter your max range for the guessing game")
let myGuess = prompt("Enter your guessed number");
  function random(range) {
  return Math.floor(Math.random() * (range - 1 + 1) + 1);
}
  
  return random(range);
}

console.log(game(prompt("Enter your max range for the guessing game")));

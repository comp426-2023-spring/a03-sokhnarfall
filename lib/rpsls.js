export {rps, rpsls}

function rps(action) {
  const possible_actions = ["rock", "paper", "scissors"];
  const opponentMove = options[Math.floor(Math.random() * options.length)];
  let result;
  
// 2. If the command or function is called without an argument, it should return only the shot for one player, e.g. {"player":"rock"}.
  if (action == null) {
    return{"player": options[Math.floor(Math.random() * options.length)]};
 }
  // 7. If an out-of-range argument is supplied to your functions, the function should return an error on console.error() indicating that [ARGUMENT] is out of range.
  if(!possible_actions.includes(action)){
          console.log("Argument out of range.");
          console.error();
  if (action === opponentMove) {
   result = "tie"
}
  else if (
   ( action === "scissors" && opponentMove === "paper") || (action === "paper" && opponentMove === "rock") || (action === "rock" && opponentMove === "scissors")) {
  result = "win!";
} else {
  result = "lose";
}
  return `You chose ${action} and your opponent chose ${opponentMove}. Result: ${result}`; }





function rpsls(action) {
  const possible_actions = ["rock", "paper", "scissors", "lizard", "spock"];
  const opponentMove = options[Math.floor(Math.random() * options.length)];
  let result;

  if (action == null) {
    return{"player": options[Math.floor(Math.random() * options.length)]};
 }
  // 7. If an out-of-range argument is supplied to your functions, the function should return an error on console.error() indicating that [ARGUMENT] is out of range.
  else if (!possible_actions.includes(action)) {
        console.error('Argument out of range.')
        throw new RangeError();
}
  else if (action === opponentMove) {
    result = "tie";
}
  else if (
    (action === "spock" && (opponentMove === "rock" || opponentMove === "scissors")) ||
    (action === "rock" && (opponentMove === "scissors" || opponentMove === "lizard")) ||
    (action === "lizard" && (opponentMove === "paper" || opponentMove === "spock")) ||
    (action === "scissors" && (opponentMove === "paper" || opponentMove === "lizard")) ||
    (action === "paper" && (opponentMove === "rock" || opponentMove === "spock"))
) {
  result = "win!";
} else {
  result = "lose";
}
return `You chose ${action} and your opponent chose ${opponentMove}. Result: ${result}`;
}


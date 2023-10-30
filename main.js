const choices = [
	{name: "rock", emoji:"🪨", winsOver: "scissors", losesOver: "paper"},
	{name: "paper", emoji:"📃", winsOver: "rock", losesOver: "scissors"},
	{name: "scissors", emoji:"✂️", winsOver: "paper", losesOver: "rock"}
];

$("button.blue").click(function() {
  const playerChoice = choices.find(choice => choice.name == this.id);
	const randomNum = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomNum];

	$("button").removeClass("selected");
	$(this).addClass("selected");
	$("button.red").eq(randomNum).addClass("selected");

  const result = evaluate(playerChoice, computerChoice);
  printResults(playerChoice, computerChoice, result);
});

function evaluate(playerChoice, computerChoice) {
	if(playerChoice.winsOver == computerChoice.name) return "win";
	else if(playerChoice.losesOver == computerChoice.name) return "lose";
	else return "draw";
}

function printResults(playerChoice, computerChoice, result) {
	$(".label").eq(0).text(`You picked ${playerChoice.name} ${playerChoice.emoji}`);
	$(".label").eq(1).text(result == "draw" ? "It is a draw! 🟰" : `You ${result}! 🚩`);
	$(".label").eq(2).text(`Computer picked ${computerChoice.name} ${computerChoice.emoji}`);
}
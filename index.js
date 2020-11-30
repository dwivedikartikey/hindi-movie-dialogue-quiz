var readlineSync = require("readline-sync");

var score = 0;

console.log("Description: This is a Movie quiz Let's test your knowledge about famous movie dialogue ------\n");

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + ". \n\n Let's figure out how much you know about movie dialogue");

console.log("Let's start the quiz:\n ");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    console.log("Right Answer.");
    score += 1;
    console.log("Current Score: ", score);
    console.log("-------------------------");
  } else {
    console.log("Wrong Answer.");
    score -= 1;
    console.log("Current Score: ", score);
    console.log("-------------------------");
  }
}

var dialogue = [
	{
		question: `
	"Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai"? This dialogue is of which movie?
	a: Coolie
	b: Deewar
	c: Sholay
  d: Aunty No. 1\n`,
		answer: "b"
	},
	{
		question: `
	"Kitney aadmi the"? This dialogue is of which movie? 
	a: Biwi No. 1
	b: The Dirty Picture
  c: Sholay
  d: Shubh Mangal Saavdhan\n`,
		answer: "c"
	},
	{
		question: `
	"Pushpa, I hate tears...""? This dialogue is of which movie? 
	a: Thappad
	b: Mr. India
	c: Bahubali 2
	d: Amar Prem\n`,
		answer: "d"
	},
	{
		question: `
	"Thapad se darr nahi lagta, pyaar se lagta hai"? This dialogue is of which movie? 
	a: Dabangg
	b: Dabangg 2
	c: Dabangg 3
  d: Race 3\n`,
		answer: "a"
	},
  {
		question: `
	"Hum jahan khade ho jaate hain, line wahi se shuru hoti hain"? This dialogue is of which movie? 
	a: Munni Baddnam
	b: Peelia
	c: Kaalia
  d: Tanhaji\n`,
		answer: "c"
	},
  {
		question: `
	"Taareekh pe taareekh, taareekh pe taareekh, taarekh pe taareekh"? This dialogue is of which movie? 
	a: Damini
	b: Daman
	c: Don
  d: Shahenshah\n`,
		answer: "a"
	},
  {
		question: `
	"Main aaj bhi pheke hue paise nahin uthata"?This dialogue is of which movie? 
	a: Baaghi
	b: Love Aaj Kal
	c: Deewar
  d: Pakeezah\n`,
		answer: "c"
	},
];

for (var i=0; i<dialogue.length; i++) {
  var currentDialogue = dialogue[i];
  play(currentDialogue.question, currentDialogue.answer)
}
console.log("----------------------");
console.log("YAY! Your Final score: ",score);

console.log("-------------------------");

if (score > 4) {
  console.log("Good score! Play again.");
} else {
  console.log("Not good score. Better luck next time.");
}
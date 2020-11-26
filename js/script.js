/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
	 {
	 	quote: "some cats scratch, some cats don't",
	 	source: "unknown"
	 },
	  {
	 	quote: "if you build it, they will come",
	 	source: "voice from the sky",
	 	citation: "Field of Dreams",
	 	year: 1989
	 },
	  {
	 	quote: "...reached down between my legs, eased the seat back",
	 	source: "Panama, Van Halen",
	 	citation: "Van Halen 1984",
	 	year: 1984
	 },
	  {
	 	quote: "Life moves by pretty fast.  If you don't stop and look around once in a while, you could miss it.",
	 	source: "Ferris Bueller",
	 	citation: "Ferris Bueller's Day Off",
	 	year: 1986
	 },
	  {
	 	quote: "The mountains are calling and I must go.",
	 	source: "John Muir"
	 }

];

/***
 * `getRandomQuote` function

 I used this help for random #... and it's like treehouse practice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
***/

function getRandomQuote () {
	let randomNum = Math.floor(Math.random() * Math.floor(quotes.length));
	console.log(randomNum);
	console.log(quotes[randomNum]);

}

	getRandomQuote();



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);
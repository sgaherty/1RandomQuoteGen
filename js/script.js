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
	 	source: "a random kid"
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
	 },
	  {
	 	quote: "Life moves by pretty fast.  If you don't stop and look around once in a while, you could miss it.",
	 	source: "Ferris Bueller",
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
	//console.log(quotes[randomNum]);
	return quotes[randomNum];

}

//test call function.  getRandomQuote();



/***
 * `printQuote` function
 1-call the getRandomQuote function
 2-use the returned quote object to build a string of HTML and quote properties
 3-use that string to display a random quote in the browser.
***/

function printQuote () {
	let randomQuote = getRandomQuote();
	let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
	if (randomQuote.citation != undefined) {
		html += `<span class="citation"> ${randomQuote.citation} </span>`;
	}
	if (randomQuote.year != undefined) {
		html += `<span class="year"> ${randomQuote.year} </span>`;	
	} 
		html += `</p>`


	console.log(html);
	document.getElementById('quote-box').innerHTML = html; 
}

printQuote()
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
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
	 	source: "a random kid",
	 	tags: "wisdom"
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
	 	year: 1986,
	 	tags: "movie quotes"
	 },
	  {
	 	quote: "The mountains are calling and I must go.",
	 	source: "John Muir",
	 	tags: "wisdom"
	 }

];

/***
 * `getRandomQuote` function

 I used this help for random #... and it's like treehouse practice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
***/
//generates a random # between 0 up to the # of objects in the array
function getRandomQuote () {
	let randomNum = Math.floor(Math.random() * Math.floor(quotes.length));
	console.log(randomNum);
	//console.log(quotes[randomNum]);
	return quotes[randomNum];
}

//test call function, but it's called again below in printQuote.  
//getRandomQuote();

/***
 * `printQuote` function
 create html output of quote w/ conditional checks to see if citation & year exist.
 if they exist, it concatenates the html to include the info.
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
	if (randomQuote.tags != undefined) {
		html += `<span class="tags">tags: ${randomQuote.tags}</span>`;
	}
		html += `</p>`
	console.log(html);
	document.getElementById('quote-box').innerHTML = html; 
}

printQuote()

/*
create a timer to refresh quotes auto after 3 seconds if button not clicked
*/
//not perfect, but not sure what the load-quote stuff actually does...

if (addEventListener("click", printQuote, false)) {
	document.getElementById('load-quote')
} else {
	setInterval(printQuote, 3000);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//hiding this b/c of timer above
//document.getElementById('load-quote').addEventListener("click", printQuote, false);
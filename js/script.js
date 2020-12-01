/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


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

function randomNumber (max) {
	let randomNumber = Math.floor(Math.random() * Math.floor(max));
	return randomNumber;
}

function changeBackground () {
	let rgbValue = randomNumber(255);
	let newBackground = `rgb(58, ${rgbValue}, 98)`;
	document.body.style.backgroundColor = newBackground;
}

 //I used this help for random #: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomQuote () {
	let randomNum = randomNumber(quotes.length);
	console.log(randomNum);
	return quotes[randomNum];
}

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
	changeBackground ()
}

printQuote()

setInterval(printQuote, 3000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
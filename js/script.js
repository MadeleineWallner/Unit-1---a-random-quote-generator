/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: "I won't be a rock star. I will be a legend", 
    source: "Freddie Mercury"},
  {
    quote: "We are here to laugh at the odds and live our lives so well that death will tremble to take us",
    source: "Charles Bukowski"
  },
  {
    quote: "We're all stories in the end, just make it a good one.",
    source: "The 11th Doctor",
    citation: "Doctor Who: The angels take Manhattan",
    year: "2012"
  },
  {
    quote: "Show a little faith, there's magic in the night",
    source: "Bruce Springsteen",
    citation: "Thunder road",
    year: "1975"
  },
  {
    quote: "What is life without a little risk?",
    source: "Sirius Black",
    citation: "Harry Potter and The order of the Phoenix",
    year: "2007"
  },
]
console.log(quotes);



/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  Math.floor(Math.random() * quotes.length);
  return getRandomQuote;

}

function printQuote () {
  let i = getRandomQuote;
  let j = document.getElementById('load-quote').addEventListener("click", printQuote, false);

}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
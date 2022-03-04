/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//array with objects
var quotes = [
  {
    quote: "I won't be a rock star. I will be a legend.", 
    source: "Freddie Mercury, ",
    category: "Music"
  },
  {
    quote: "We are here to laugh at the odds and live our lives so well that death will tremble to take us.",
    source: "Charles Bukowski"
  },
  {
    quote: "We're all stories in the end, just make it a good one.",
    source: "The 11th Doctor",
    citation: "Doctor Who: The angels take Manhattan",
    year: "2012"
  },
  {
    quote: "Show a little faith, there's magic in the night.",
    source: "Bruce Springsteen",
    citation: "Thunder road",
    year: "1975, ",
    category: "Music"
  },
  {
    quote: "What is life without a little risk?",
    source: "Sirius Black",
    citation: "Harry Potter and The order of the Phoenix",
    year: "2007, ",
    category: "Movies"
  },
  {
    quote: "You can neither win nor lose if you don't run the race.",
    source: "David Bowie"
  },
  {
    quote: "If you're not doing what you love, you're just wasting your time.",
    source: "Billy Joel",
    year: "2015"
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    source: "Oscar Wilde",
    citation: "The soul of a man under socialism",
    year: "1891",
  }

];

/*function to create a random number between 0 and the length of the array 
and return a random object from the quotes array*/

function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

//variable to store different background colors
var colors = ["#727171", "#754141", "#1D5B1D", "#8a738c", "#57A4A4", "#8E85DC", "#949379"];

//function to generate a random background color
function getRandomColor() {
  var randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];
}


/*
Function to display the quotes. 
variable to store the getRandomQuote function.
variable to store the html string with the "quote" and "source" properties.
*/

function printQuote(){
  var quote = getRandomQuote();
  var html = " ";
  html += '<p class="quote">' + quote.quote + '</p>'
  html += '<p class="source">' + quote.source

// add "citation", "year" and "category" if they exist in the random quote
  
   if (quote.hasOwnProperty("citation")) {
    html += '<span class="citation">' + quote.citation + '</span>'
   }

  if (quote.hasOwnProperty("year")) {
    html += '<span class = "year">' + quote.year + '</span>' 
  }

  if (quote.hasOwnProperty("category")) {
    html += '<span class = "category">' + quote.category + '</span>'
  }
  '</p>'

  //Added the getRandomColor function to get the background color to change with the quotes.
  document.body.style.backgroundColor = getRandomColor();

  //Set innerHTML to the html string above
  document.getElementById("quote-box").innerHTML = html;  
}


//setInterval to change quote every 5 seconds
setInterval(printQuote,5000);




// click event listener for the print quote button


document.getElementById('load-quote').addEventListener("click", printQuote, false);

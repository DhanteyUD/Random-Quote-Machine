// Random quote machine

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
];

let currentQuote = '';
let currentAuthor = '';

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json',
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: (jsonQuotes) => {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    },
  });
}

function getRandomQuote() {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

  $('#tumblr-quote').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(currentAuthor) +
      '&content=' +
      encodeURIComponent(currentQuote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );

  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });

  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color],
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color],
    },
    1000
  );
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote);
});

https://www.facebook.com/

// const newQuoteButton = document.querySelector('#new-quote');
// newQuoteButton.addEventListener('click', getQuote);

// var colors = [
//   '#16a085',
//   '#27ae60',
//   '#2c3e50',
//   '#f39c12',
//   '#e74c3c',
//   '#9b59b6',
//   '#FB6964',
//   '#342224',
//   '#472E32',
//   '#BDBB99',
//   '#77B1A9',
//   '#73A857',
// ];

// let currentQuote = '';
// let currentAuthor = '';

// const endpoint =
//   'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

// // Defining async function
// async function getQuote() {
//   let index = Math.floor(Math.random() * endpoint.length);

//   // Same method
//   // document.getElementById("text").innerHTML = endpoint[index].quote;
//   // document.getElementById("author").innerHTML = endpoint[index].author;

//   const myQuote = endpoint[index].quote;
//   const myAuth = endpoint[index].author;

//   const myText = document.getElementById('text');
//   const myAuthor = document.getElementById('author');

//   myText.innerHTML = myQuote;
//   myAuthor.innerHTML = myAuth;

//   try {
//     // Storing response
//     const response = await fetch(endpoint);
//     if (!response.ok) {
//       throw error(response.statusText);
//     }

//     // Storing data in form of JSON
//     const data = await response.json();
//     displayQuote(data.quotes[index].quote);
//     displayAuthor(data.quotes[index].author);
//   } catch {
//     alert('Failed to fetch quote, please try again!');
//   }

//   // Changing style of quote machine
//   var color = Math.floor(Math.random() * colors.length);

//   $('html body').animate(
//     {
//       backgroundColor: colors[color],
//       color: colors[color],
//     },
//     1000
//   );

//   $('#new-quote').animate(
//     {
//       backgroundColor: colors[color],
//     },
//     1000
//   );
// }

// function displayQuote(quote) {
//   const quoteText = document.querySelector('#text');
//   quoteText.textContent = quote;
// }

// function displayAuthor(author) {
//   const quoteAuthor = document.querySelector('#author');
//   quoteAuthor.textContent = author;
// }

// // $('#tweet-quote').attr(
// //   'href',
// //   'https://twitter.com/intent/tweet?text=' +
// //     encodeURIComponent('"' + displayQuote() + '" ' + displayAuthor())
// // );

// // $('#facebook-quote').attr(
// //   'href',
// //   'https://www.facebook.com/sharer/sharer.php?=' +
// //     encodeURIComponent('"' + displayQuote() + '" ' + displayAuthor())
// // );

// // $('#tumblr-quote').attr(
// //   'href',
// //   'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
// //     encodeURIComponent(displayAuthor()) +
// //     '&content=' +
// //     encodeURIComponent(displayQuote()) +
// //     '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
// // );

// // Calling that async function
// getQuote(endpoint);

// var colors = [
//   '#16a085',
//   '#27ae60',
//   '#2c3e50',
//   '#f39c12',
//   '#e74c3c',
//   '#9b59b6',
//   '#FB6964',
//   '#342224',
//   '#472E32',
//   '#BDBB99',
//   '#77B1A9',
//   '#73A857',
// ];
// var currentQuote = '',
//   currentAuthor = '';

// function getQuotes() {
//   return $.ajax({
//     headers: {
//       Accept: 'application/json',
//     },
//     url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
//     success: function (jsonQuotes) {
//       if (typeof jsonQuotes === 'string') {
//         quotesData = JSON.parse(jsonQuotes);
//         console.log('quotesData');
//         console.log(quotesData);
//       }
//     },
//   });
// }

// function getRandomQuote() {
//   return quotesData.quotes[
//     Math.floor(Math.random() * quotesData.quotes.length)
//   ];
// }

// function getQuote() {
//   let randomQuote = getRandomQuote();

//   currentQuote = randomQuote.quote;
//   currentAuthor = randomQuote.author;

//   $('#tweet-quote').attr(
//     'href',
//     'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
//       encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
//   );

//   $('#tumblr-quote').attr(
//     'href',
//     'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
//       encodeURIComponent(currentAuthor) +
//       '&content=' +
//       encodeURIComponent(currentQuote) +
//       '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
//   );

//   $('.quote-text').animate({ opacity: 0 }, 500, function () {
//     $(this).animate({ opacity: 1 }, 500);
//     $('#text').text(randomQuote.quote);
//   });

//   $('.quote-author').animate({ opacity: 0 }, 500, function () {
//     $(this).animate({ opacity: 1 }, 500);
//     $('#author').html(randomQuote.author);
//   });

//   var color = Math.floor(Math.random() * colors.length);
//   $('html body').animate(
//     {
//       backgroundColor: colors[color],
//       color: colors[color],
//     },
//     1000
//   );
//   $('.button').animate(
//     {
//       backgroundColor: colors[color],
//     },
//     1000
//   );
// }

// $(document).ready(function () {
//   getQuotes().then(() => {
//     getQuote();
//   });

//   $('#new-quote').on('click', getQuote);
// });

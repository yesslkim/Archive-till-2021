// GLOBAL VARIABLE

const quoteContainer = document.querySelector('.js-container');
const quoteText = document.querySelector('.js-quote');
const authorText = document.querySelector('.js-author');
const twitterBtn = document.querySelector('.js-twitter');
const newQuoteBtn = document.querySelector('.js-new-quote');

// get quote from API

let i = 0; //to stop infinite loop

async function getQuote() {
  const proxyUrl = 'http://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    //If author is blank, add unknown
    if (data.quoteAuthor === '') {
      authorText.textContent = 'Unknown';
    } else {
      authorText.textContent = data.quoteAuthor;
    }

    //resize font-size for long quote
    if (data.quoteText.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = data.quoteText;
  } catch (err) {
    i++;
    if (i < 10) {
      getQuote();
    } else {
      quoteText.textContent = '죄송합니다. 일시적 오류가 발생하였습니다. 새로고침을 눌러주세요! :)';
      quoteText.classList.add('long-quote');
      authorText.textContent = '';
    }
    console.log('err', err);
  }
}

// on Load
getQuote();

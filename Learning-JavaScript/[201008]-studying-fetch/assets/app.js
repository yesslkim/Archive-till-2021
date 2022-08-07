// GLOBAL VARIABLE

const quoteContainer = document.querySelector('.js-container');
const quoteText = document.querySelector('.js-quote');
const authorText = document.querySelector('.js-author');
const twitterBtn = document.querySelector('.js-twitter');
const newQuoteBtn = document.querySelector('.js-new-quote');
const loader = document.querySelector('.js-loader');

function showLoadingSpin() {
  quoteContainer.classList.add('js-hidden');
  loader.classList.remove('js-hidden');
}

function removeLoadingSpin() {
  if (quoteContainer.classList.contains('js-hidden')) {
    quoteContainer.classList.remove('js-hidden');
    loader.classList.add('js-hidden');
  }
}

// get quote from API

let i = 0; //to stop infinite loop

async function getQuote() {
  showLoadingSpin();
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
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
    removeLoadingSpin();
  } catch (err) {
    i++;
    if (i < 10) {
      getQuote();
    } else {
      removeLoadingSpin();
      quoteText.textContent = '죄송합니다. 일시적 오류가 발생하였습니다. 새로고침을 눌러주세요! :)';
      quoteText.classList.add('long-quote');
      authorText.textContent = '';
    }
    console.log('err', err);
  }
}

//twitter quote

function tweetQuote() {
  const quote = quoteText.textContent;
  const author = authorText.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

//event listners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on Load
getQuote();

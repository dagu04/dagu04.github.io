const endpoint = 'https://api.breakingbadquotes.xyz/v1/quotes'

const NewQuote = document.querySelector('#js-new-quote');
NewQuote.addEventListener('click', getTrivia);

const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

let answerTxt = document.querySelector('#js-answer-text');
let answer = '';

let author = ''

async function getTrivia() {
    // alert('TEST');
    try {
        const Response = await fetch(endpoint);
        if (!Response.ok) {
            throw Error(Response.statusText)
        }
        const json = await Response.json();
        //console.log(json)     
        displayTrivia(json[0].quote);
        author = json[0].author;
        answerTxt.textContent = '';
    }
    catch(err) {
        console.log(err)
        alert('Failed to fetch new quote')
    }
}

function displayTrivia(quote) {
    const triviaText = document.querySelector('#js-quote-text')
    triviaText.textContent = quote;
}

function displayAnswer() {
    answerTxt.textContent = author;
}

getTrivia();
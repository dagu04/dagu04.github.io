const endpoint = 'https://api.breakingbadquotes.xyz/v1/quotes'

const NewQuote = document.querySelector('#js-new-quote');
NewQuote.addEventListener('click', getTrivia);

const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

let answerTxt = document.querySelector('#js-answer-text');
let answer = '';

async function getTrivia() {
    // alert('TEST');
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json([]);
        //console.log(json)
        displayTrivia(json['0:quote']);
        author = json['author'];
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
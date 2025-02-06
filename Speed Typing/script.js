const quotes = ['the quick brown fox jump over the lazy man',
    'It must be produced and discharged and used up in order to exist at all. - William Faulkner likening gratitude to electricity'
];

// store list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
//page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');


document.getElementById('start').addEventListener('click', () => {
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // put the quote in an array of words
    words = quote.split(' ');
    // reset the word index for tracking
    wordIndex = 0;

    // UI Updates
    // create an array of span elements so we can set a class
    const spanWords = words.map(function(word) {return `<span>${word} </span>`});
    // convert into string and set as innerHTML on quote display
    quoteElement.innerHTML = spanWords.join('');
    // highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
    // clear any prior message
    messageElement.innerText = '';

    // setup the textbox
    // clear the textbox
    typedValueElement.value = '';
    //set focus
    typedValueElement.focus();
    // set the event handler

    // Start the timer
    startTime = new Date().getTime();
})

typedValueElement.addEventListener('input', () => {
    // get the current word
    const currentWord = words[wordIndex];
    // get the current values
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        // end of sentence
        // display success
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATS! You Finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerHTML = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord){
        // end of word
        // clear the typedValueElement for the new word
        typedValueElement.value = '';
        //move to the next word
        wordIndex++;
        // reset the class name for all element in quote
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        // highlight the new word
        quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
        // currently correct
        // highlight the next word
        typedValueElement.className = '';
    } else {
        // error state
        typedValueElement.className = 'error';
    }
})

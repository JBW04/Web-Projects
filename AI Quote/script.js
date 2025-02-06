const getQuoteBtn = document.getElementById('getQuoteBtn');
const quoteText = document.getElementById('quoteText');

getQuoteBtn.addEventListener("click", () => {
    getQuoteBtn.classList.add('loading');
    getQuoteBtn.textContent = "Loading...";
    getQuote();
});

getQuoteBtn.classList.remove("loading");
getQuoteBtn.textContent = "Get Quote";

function getQuote() {
    fetch("https://api.kanye.rest/")
        .then((response) => response.json())
        .then((data) => {
        
            console.log(data);
            quoteText.innerHTML = `"${data.quote}"`; 
            
            getQuoteBtn.classList.remove("loading");
            getQuoteBtn.textContent = "Get Quote";
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
            quoteText.innerHTML = "Failed to fetch a quote. Please Try Again Later.";
            getQuoteBtn.classList.remove("loading");
            getQuoteBtn.textContent = "Get Quote";
        });
}

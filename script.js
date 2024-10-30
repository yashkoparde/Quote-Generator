const quoteContainer = document.getElementById("quote");
const generateButton = document.getElementById("generate");

// Sample quote data
const quotes = [
    "The only way to do great work is to love what you do.", 
    "Your time is limited, so don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "Padhle bsd"
];

generateButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteContainer.textContent = quotes[randomIndex];
});
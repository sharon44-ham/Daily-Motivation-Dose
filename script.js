let quotes = document.querySelector(".quote");
let author = document.querySelector(".author"); 
let newq = document.querySelector(".button button");
let baseUrl = "https://quoteslate.vercel.app/api/quotes/random";

// Fetch and display quote
let getQuotes = async () => {
  try {
    let quote = await fetch(baseUrl);
    let response = await quote.json();
    quotes.innerHTML = `${response.quote}`;
    author.innerHTML = `~ ${response.author}`;
  } catch (err) {
    quotes.innerHTML = "Couldn't load quote. Please try again.";
    author.innerHTML = "";
    console.error("Quote fetch failed:", err);
  }
};

// Fetch once when page loads
window.addEventListener("DOMContentLoaded", () => {
  getQuotes();
});

// Fetch on button click
newq.addEventListener("click", getQuotes);

// Handle greeting
const user = localStorage.getItem("motivationUser");
if (user) {
  const greeting = document.querySelector(".header p");
  if (greeting) {
    greeting.textContent = `Hey ${user}, your daily dose of motivation 💡`;
  }
}

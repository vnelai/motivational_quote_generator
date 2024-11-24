//Array collections of motivational quotes
const motivationalQuotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The journey of a thousand miles begins with one step.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "It's not about what you know, it's about knowing where to find the information.",
    "Life is a journey, it's not just about the end goal. Find happiness in the ride.",
    "I release everything that doesn't serve my purpose.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Success is not measured by what you accomplish, but by the obstacles you overcome.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "You can do anything you set your mind to.",
    "Your success is determined by how you handle the challenges you face.",
    "The harder the struggle, the more glorious the triumph.",
    "Success is the result of preparation, hard work, and learning from failure.",
    "It always seems impossible until it's done.",
    "The moment you want to quit is the moment you need to keep pushing.",
    "Don't give up. Great things take time.",
];


//Random motivational quote function - Handler function
function getRandomMotivationalQuote () {
    const randomNumber = Math.floor(Math.random() * motivationalQuotes.length); //Random index
    return motivationalQuotes[randomNumber]; //Random quote
}

//Caching Elements from DOM
const motivationalQuote = document.getElementById("motivational-quote");
const motivationalQuoteButton = document.getElementById("motivational-quote-button");

//Add event listener on motivational button
motivationalQuoteButton.addEventListener("click", () => {
    motivationalQuote.innerText = getRandomMotivationalQuote(); //update quote text with get random function
});


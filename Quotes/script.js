const quotes = [
    {
        text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        author: "— Edmund Burke"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "— Robert Frost"
    },
    {
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "— Ralph Waldo Emerson"
    },
    {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "— Ralph Waldo Emerson"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "— Nelson Mandela"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "— Dalai Lama"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "— John Lennon"
    },
    {
        text: "Get busy living or get busy dying.",
        author: "— Stephen King"
    },
    {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "— Brian Tracy"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "— Theodore Roosevelt"
    },
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "— Franklin D. Roosevelt"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "— Theodore Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "— Winston Churchill"
    },
    {
        text: "It is our choices that show what we truly are, far more than our abilities.",
        author: "— J.K. Rowling"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "— Wayne Gretzky"
    }
];


function getRandomQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIndex]

    document.getElementById("quote-text").textContent = quote.text
    document.getElementById("quote-author").textContent = quote.author


  }
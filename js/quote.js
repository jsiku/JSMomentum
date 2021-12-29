const quotes = [
    {
        quote: "Self-praise is for losers. Be a winner. Stand for something. Always have class, and be humble.",
        author: "John Madden"
    },
    {
        quote: "Some cause happiness wherever they go; others whenever they go.",
        author: "Oscar Wilde"
    },
    {
        quote: "Christmas is the spirit of giving without a thought of getting. It is happiness because we see joy in people. It is forgetting self and finding time for others. It is discarding the meaningless and stressing the true values.",
        author: "Thomas S. Monson"
    },
    {
        quote: "Don't let the past steal your present. This is the message of Christmas: We are never alone.",
        author: "Taylor Caldwell"
    },
    {
        quote: "Christmas, my child, is love in action. Every time we love, every time we give, it's Christmas.",
        author: "Dale Evans"
    },
    {
        quote: "I once bought my kids a set of batteries for Christmas with a note on it saying, toys not included.",
        author: "Bernard Manning"
    },
    {
        quote: "Adopting the right attitude can convert a negative stress into a positive one.",
        author: "Hans Selye"
    },
    {
        quote: "Excellence is not a skill, it's an attitude.",
        author: "Ralph Marston"
    },
    {
        quote: "A positive attitude can really make dreams come true - it did for me.",
        author: "David Bailey"
    },
    {
        quote: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
        author: "Sholom Aleichem"
    },
    {
        quote: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
        author: "Eminem"
    },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


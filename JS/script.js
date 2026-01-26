const quotes = ["Believe in yourself even when no one else does.",
"Small steps every day lead to big changes.",
"Your effort today shapes your success tomorrow.",
"Dreams don’t work unless you do.",
"Consistency beats talent when talent doesn’t work hard.",
"Every failure is a lesson in disguise.",
"You are stronger than your excuses.",
"Start where you are and use what you have.",
"Progress matters more than perfection.",
"Hard work turns vision into reality.",
"Don’t wait for motivation, create discipline.",
"Your limits are often just fears in disguise.",
"Success is built one focused day at a time.",
"Keep going, even when it feels slow.",
"Believe, act, and the results will follow.",
"You grow when you step outside your comfort zone.",
"The struggle today builds the strength of tomorrow.",
"Stay patient and trust the process.",
"Your future self will thank you for not giving up.",
"One day or day one — you decide."
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");
button.addEventListener("click",() => {
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
})
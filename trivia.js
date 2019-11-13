
let correct = 0;
let incorrect = 0;
let missed = 0;

let questions = [
    {
        q1: "the fingerprints of which animal most resemble humans?",
        choices: ["cat", "koala", "gorilla", "parrot"],
        answer: [1]

    },
    {
        q2: "what is a group of giraffes known as?",
        choices: ["tower", "pride", "herd", "flock"],
        answer: [0]

    },
    {
        q3: "name the largest mammal of the world",
        choices: ["elephant", "great dane", "blue whale", "rhinoceros"],
        answer: [2]

    },
    {
        q4: "name the slowest animal on earth",
        choices: ["snail", "cheetah", "gopher", "sloth"],
        answer: [3]

    },
    {
        q5: "which animal's eye is bigger than its brain?",
        choices: ["squirrel", "salmon", "ostrich", "raccoon"],
        answer: [3]

    },
    {
        q6: "which animal keeps growing until death?",
        choices: ["squid", "lobster", "frog", "shark"],
        answer: [1]

    },
    {
        q7: "what do we call a female donkey?",
        choices: ["jenny", "maggie", "kelly", "susan"],
        answer: [0]

    },
    {
        q8: "how many hearts does an octopus have?",
        choices: ["3", "7", "1", "4"],
        answer: [0]

    },
    {
        q9: "which food is the same size as a newborn kangaroo?",
        choices: ["brussel sprout", "banana", "lima bean", "pineapple"],
        answer: [2]

    },
    {
        q10: "which animal has the longest lifespan?",
        choices: ["elephant", "blue whale", "gianto tortoise", "locust"],
        answer: [2]

    },
    {
        q11: "how many times can a hummingbird flat its wings per second?",
        choices: ["20", "40", "80", "160"],
        answer: [2]

    },
]



$(document).ready(function () {










};



// let guessValue = Math.floor(Math.random() * 120) + 19;

// let currentValue = 0;

// let win = 0;
// let loss = 0; 

// let gem1 = Math.floor(Math.random() * 12) + 1;
// console.log(gem1);

// let gem2 = Math.floor(Math.random() * 12) + 1;
// console.log(gem2);

// let gem3 = Math.floor(Math.random() * 12) + 1;
// console.log(gem3);

// let gem4 = Math.floor(Math.random() * 12) + 1;
// console.log(gem4);

// $(document).ready(function(){
//     document.getElementById("valueToGuess").innerHTML = guessValue;
// });    

// const gem1Add = () => {
//     document.getElementById("currentValue").innerHTML = currentValue += gem1;
// };
// const gem2Add = () => {
//     document.getElementById("currentValue").innerHTML = currentValue += gem2;
// };
// const gem3Add = () => {
//     document.getElementById("currentValue").innerHTML = currentValue += gem3;
// };
// const gem4Add = () => {
//     document.getElementById("currentValue").innerHTML = currentValue += gem4;
// };


// window.setInterval(function(){
//   if(currentValue === guessValue){
//       win += 1;
//       $('#wins').text(win);
//       console.log(win);
//       guessValue = Math.floor(Math.random() * 120) + 19;
//       currentValue = 0;
//       document.getElementById("valueToGuess").innerHTML = guessValue;
//       document.getElementById("currentValue").innerHTML = currentValue;
//   } else if(currentValue > guessValue){
//       loss += 1;
//       $('#losses').text(loss);
//       console.log(loss);
//       guessValue = Math.floor(Math.random() * 120) + 19;
//       currentValue = 0;
//       document.getElementById("valueToGuess").innerHTML = guessValue;
//       document.getElementById("currentValue").innerHTML = currentValue;
//   }
// }, 10);




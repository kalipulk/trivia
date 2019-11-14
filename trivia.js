
let correct = 0;
let incorrect = 0;
let missed = 0;

//Timer
let count = 10;
let counter = setInterval(timer, 1000);

//Tracked Question
let trackedQuestion = 0;

//Questions
let questionNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let questions = [
    "the fingerprints of which animal most resemble humans?",
    "what is a group of giraffes known as?",
    "name the largest mammal of the world",
    "name the slowest animal on earth",
    "which animal's eye is bigger than its brain?",
    "which animal keeps growing until death?",
    "what do we call a female donkey?",
    "how many hearts does an octopus have?",
    "which food is the same size as a newborn kangaroo?",
    "which animal has the longest lifespan?",
    "how many times can a hummingbird flat its wings per second?",
];

let q1Choice = ["cat", "koala", "gorilla", "parrot"];
let q2Choice = ["tower", "pride", "herd", "flock"];
let q3Choice = ["elephant", "great dane", "blue whale", "rhinoceros"];
let q4Choice = ["snail", "cheetah", "gopher", "sloth"];
let q5Choice = ["squirrel", "salmon", "ostrich", "raccoon"];
let q6Choice = ["squid", "lobster", "frog", "shark"];
let q7Choice = ["jenny", "maggie", "kelly", "susan"];
let q8Choice = ["3", "7", "1", "4"];
let q9Choice = ["brussel sprout", "banana", "lima bean", "pineapple"];
let q10Choice = ["elephant", "blue whale", "gianto tortoise", "locust"];
let q11Choice = ["20", "40", "80", "160"];

let answer = ["koala", "tower", "blue whale", "sloth", "ostrich", "lobster", "jenny", "3", "lima bean", "gianto tortoise", "80"];


$(document).ready(function () {


    //multiple choice questions
    document.getElementById("questionNumber").innerHTML = questionNumbers[0];
    document.getElementById("question").innerHTML = questions[0];
    document.getElementById("choice1").innerHTML = q1Choice[0];
    document.getElementById("choice2").innerHTML = q1Choice[1];
    document.getElementById("choice3").innerHTML = q1Choice[2];
    document.getElementById("choice4").innerHTML = q1Choice[3];

    timer();
});

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        missed += 1;
        $("#missed").text(missed);
        trackedQuestion += 1;
        console.log(trackedQuestion);
        nextButton();
    }
    document.getElementById("timer").innerHTML = count;
}

const nextButton = () => {
    trackedQuestion += 1;
    if (trackedQuestion == 1) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[1];
        document.getElementById("question").innerHTML = questions[1];
        document.getElementById("choice1").innerHTML = q2Choice[0];
        document.getElementById("choice2").innerHTML = q2Choice[1];
        document.getElementById("choice3").innerHTML = q2Choice[2];
        document.getElementById("choice4").innerHTML = q2Choice[3];
    } else if (trackedQuestion == 2) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[2];
        document.getElementById("question").innerHTML = questions[2];
        document.getElementById("choice1").innerHTML = q3Choice[0];
        document.getElementById("choice2").innerHTML = q3Choice[1];
        document.getElementById("choice3").innerHTML = q3Choice[2];
        document.getElementById("choice4").innerHTML = q3Choice[3];
    } else if (trackedQuestion == 3) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[3];
        document.getElementById("question").innerHTML = questions[3];
        document.getElementById("choice1").innerHTML = q4Choice[0];
        document.getElementById("choice2").innerHTML = q4Choice[1];
        document.getElementById("choice3").innerHTML = q4Choice[2];
        document.getElementById("choice4").innerHTML = q4Choice[3];
    } else if (trackedQuestion == 4) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[4];
        document.getElementById("question").innerHTML = questions[4];
        document.getElementById("choice1").innerHTML = q5Choice[0];
        document.getElementById("choice2").innerHTML = q5Choice[1];
        document.getElementById("choice3").innerHTML = q5Choice[2];
        document.getElementById("choice4").innerHTML = q5Choice[3];
    } else  if (trackedQuestion == 5) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[5];
        document.getElementById("question").innerHTML = questions[5];
        document.getElementById("choice1").innerHTML = q6Choice[0];
        document.getElementById("choice2").innerHTML = q6Choice[1];
        document.getElementById("choice3").innerHTML = q6Choice[2];
        document.getElementById("choice4").innerHTML = q6Choice[3];
    } else if (trackedQuestion == 6) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[6];
        document.getElementById("question").innerHTML = questions[6];
        document.getElementById("choice1").innerHTML = q7Choice[0];
        document.getElementById("choice2").innerHTML = q7Choice[1];
        document.getElementById("choice3").innerHTML = q7Choice[2];
        document.getElementById("choice4").innerHTML = q7Choice[3];
    } else if (trackedQuestion == 7) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[7];
        document.getElementById("question").innerHTML = questions[7];
        document.getElementById("choice1").innerHTML = q8Choice[0];
        document.getElementById("choice2").innerHTML = q8Choice[1];
        document.getElementById("choice3").innerHTML = q8Choice[2];
        document.getElementById("choice4").innerHTML = q8Choice[3];
    } else if (trackedQuestion == 8) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[8];
        document.getElementById("question").innerHTML = questions[8];
        document.getElementById("choice1").innerHTML = q9Choice[0];
        document.getElementById("choice2").innerHTML = q9Choice[1];
        document.getElementById("choice3").innerHTML = q9Choice[2];
        document.getElementById("choice4").innerHTML = q9Choice[3];
    } else if (trackedQuestion == 9) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[9];
        document.getElementById("question").innerHTML = questions[9];
        document.getElementById("choice1").innerHTML = q10Choice[0];
        document.getElementById("choice2").innerHTML = q10Choice[1];
        document.getElementById("choice3").innerHTML = q10Choice[2];
        document.getElementById("choice4").innerHTML = q10Choice[3];
    } else if (trackedQuestion == 10) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[10];
        document.getElementById("question").innerHTML = questions[10];
        document.getElementById("choice1").innerHTML = q11Choice[0];
        document.getElementById("choice2").innerHTML = q11Choice[1];
        document.getElementById("choice3").innerHTML = q11Choice[2];
        document.getElementById("choice4").innerHTML = q11Choice[3];
    } else {
        $("#nextQuestion").text("Restart");
        nextQuestion = 0;
        return;
    }
}

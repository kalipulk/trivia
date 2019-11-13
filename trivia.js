
let correct = 0;
let incorrect = 0;
let missed = 0;

//Timer
//let count = 30;
//let counter = setInterval(timer, 1000);

//Notifications
let notifications = ["Correct", "Incorrect", "Out of Time", "Game Over"];

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

let answer = ["koala", "tower", "blue whale", "sloth", "ostrich", "lobster", "jenny", "3", "lima bean", "gianto tortoise", "80" ];

let question1Pick = questions[Math.floor(Math.random() * 11)];


$(document).ready(function () {
 //Shuffle Sort for Multiple Choice Questions
 function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  //multiple choice questions
  document.getElementById("question1").innerHTML = question1Pick;
  if(question1Pick === questions[0]){
    shuffle(q1Choice);
    document.getElementById("answer1").innerHTML = q1Choice[0];
    document.getElementById("answer2").innerHTML = q1Choice[1];
    document.getElementById("answer3").innerHTML = q1Choice[2];
    document.getElementById("answer4").innerHTML = q1Choice[3];
  } else if (question1Pick === questions[1]) {
    shuffle(q2Choice);
    document.getElementById("answer1").innerHTML = q2Choice[0];
    document.getElementById("answer2").innerHTML = q2Choice[1];
    document.getElementById("answer3").innerHTML = q2Choice[2];
    document.getElementById("answer4").innerHTML = q2Choice[3];
  }
  else if (question1Pick === questions[2]) {
    shuffle(q3Choice);
    document.getElementById("answer1").innerHTML = q3Choice[0];
    document.getElementById("answer2").innerHTML = q3Choice[1];
    document.getElementById("answer3").innerHTML = q3Choice[2];
    document.getElementById("answer4").innerHTML = q3Choice[3];
  }
  else if (question1Pick === questions[3]) {
    shuffle(q4Choice);
    document.getElementById("answer1").innerHTML = q4Choice[0];
    document.getElementById("answer2").innerHTML = q4Choice[1];
    document.getElementById("answer3").innerHTML = q4Choice[2];
    document.getElementById("answer4").innerHTML = q4Choice[3];
  }
  else if (question1Pick === questions[4]) {
    shuffle(q5Choice);
    document.getElementById("answer1").innerHTML = q4Choice[0];
    document.getElementById("answer2").innerHTML = q4Choice[1];
    document.getElementById("answer3").innerHTML = q4Choice[2];
    document.getElementById("answer4").innerHTML = q4Choice[3];
  }
  else if (question1Pick === questions[5]) {
    shuffle(q6Choice);
    document.getElementById("answer1").innerHTML = q5Choice[0];
    document.getElementById("answer2").innerHTML = q5Choice[1];
    document.getElementById("answer3").innerHTML = q5Choice[2];
    document.getElementById("answer4").innerHTML = q5Choice[3];
  }
  else if (question1Pick === questions[6]) {
    shuffle(q7Choice);
    document.getElementById("answer1").innerHTML = q6Choice[0];
    document.getElementById("answer2").innerHTML = q6Choice[1];
    document.getElementById("answer3").innerHTML = q6Choice[2];
    document.getElementById("answer4").innerHTML = q6Choice[3];
  }
  else if (question1Pick === questions[7]) {
    shuffle(q8Choice);
    document.getElementById("answer1").innerHTML = q8Choice[0];
    document.getElementById("answer2").innerHTML = q8Choice[1];
    document.getElementById("answer3").innerHTML = q8Choice[2];
    document.getElementById("answer4").innerHTML = q8Choice[3];
  }
  else if (question1Pick === questions[8]) {
    shuffle(q9Choice);
    document.getElementById("answer1").innerHTML = q9Choice[0];
    document.getElementById("answer2").innerHTML = q9Choice[1];
    document.getElementById("answer3").innerHTML = q9Choice[2];
    document.getElementById("answer4").innerHTML = q9Choice[3];
  }
  else if (question1Pick === questions[9]) {
    shuffle(q10Choice);
    document.getElementById("answer1").innerHTML = q10Choice[0];
    document.getElementById("answer2").innerHTML = q10hoice[1];
    document.getElementById("answer3").innerHTML = q10Choice[2];
    document.getElementById("answer4").innerHTML = q10Choice[3];
  }
  else if (question1Pick === questions[10]) {
    shuffle(q11Choice);
    document.getElementById("answer1").innerHTML = q11Choice[0];
    document.getElementById("answer2").innerHTML = q11Choice[1];
    document.getElementById("answer3").innerHTML = q11Choice[2];
    document.getElementById("answer4").innerHTML = q11Choice[3];
  }

  timer();
    
});

//timer function
function timer()
{
    count = count-1;
    
    if (count <= 0){
        clearInterval(counter);



console.log(questions[0]);




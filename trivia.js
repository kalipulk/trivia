
var correct = 0;
var incorrect = 0;
var missed = 0;

//Timer
let count = 60;
let counter = setInterval(timer, 1000);

//Tracked Question
let trackedQuestion = 0;

var indexItem = 0;
var choiceItem = 0;
var answerItem = 0;

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


//var index = questions.indexOf(questions[1]);
//var questionIndexAdd = questions[indexItem];


let q1Choice = ["cat", "koala", "gorilla", "parrot"];
let q2Choice = ["tower", "pride", "herd", "flock"];
let q3Choice = ["elephant", "great dane", "blue whale", "rhinoceros"];
let q4Choice = ["snail", "cheetah", "gopher", "sloth"];
let q5Choice = ["squirrel", "salmon", "ostrich", "raccoon"];
let q6Choice = ["squid", "lobster", "frog", "shark"];
let q7Choice = ["jenny", "maggie", "kelly", "susan"];
let q8Choice = ["3", "7", "1", "4"];
let q9Choice = ["brussel sprout", "banana", "lima bean", "pineapple"];
let q10Choice = ["elephant", "blue whale", "giant tortoise", "locust"];
let q11Choice = ["20", "40", "80", "160"];

let answer = ["koala", "tower", "blue whale", "sloth", "ostrich", "lobster", "jenny", "3", "lima bean", "giant tortoise", "80"];


$(document).ready(function () {

    //console.log(questionIndexAdd);
    console.log(questions[indexItem]);
    //multiple choice questions
    document.getElementById("questionNumber").innerHTML = questionNumbers[0];
    document.getElementById("question").innerHTML = questions[0];
    document.getElementById("choice1").innerHTML = q1Choice[0];
    document.getElementById("choice2").innerHTML = q1Choice[1];
    document.getElementById("choice3").innerHTML = q1Choice[2];
    document.getElementById("choice4").innerHTML = q1Choice[3];

    timer();
});

function indexAdd() {
    indexItem += 1;
    answerItem += 1;
}

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        missed += 1;
        $("#missed").text(missed);
        //trackedQuestion += 1;
        console.log(trackedQuestion);
        nextButton();
    }
    document.getElementById("timer").innerHTML = count;
}

function resetTimer() {
    clearInterval(counter);
    setTimeout(function () {
        count = count + (61 - count);
        counter = setInterval(timer, 1000);
    }, 0);
}


function nextButton() {
    trackedQuestion += 1;
    if (trackedQuestion == 1) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[1];
        document.getElementById("question").innerHTML = questions[1];
        document.getElementById("choice1").innerHTML = q2Choice[0];
        document.getElementById("choice2").innerHTML = q2Choice[1];
        document.getElementById("choice3").innerHTML = q2Choice[2];
        document.getElementById("choice4").innerHTML = q2Choice[3];
        indexAdd();
        resetTimer();
    } else if (trackedQuestion == 2) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[2];
        document.getElementById("question").innerHTML = questions[2];
        document.getElementById("choice1").innerHTML = q3Choice[0];
        document.getElementById("choice2").innerHTML = q3Choice[1];
        document.getElementById("choice3").innerHTML = q3Choice[2];
        document.getElementById("choice4").innerHTML = q3Choice[3];
        indexAdd();
        resetTimer();
    } else if (trackedQuestion == 3) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[3];
        document.getElementById("question").innerHTML = questions[3];
        document.getElementById("choice1").innerHTML = q4Choice[0];
        document.getElementById("choice2").innerHTML = q4Choice[1];
        document.getElementById("choice3").innerHTML = q4Choice[2];
        document.getElementById("choice4").innerHTML = q4Choice[3];
        indexAdd();
        resetTimer();
    } else if (trackedQuestion == 4) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[4];
        document.getElementById("question").innerHTML = questions[4];
        document.getElementById("choice1").innerHTML = q5Choice[0];
        document.getElementById("choice2").innerHTML = q5Choice[1];
        document.getElementById("choice3").innerHTML = q5Choice[2];
        document.getElementById("choice4").innerHTML = q5Choice[3];
        indexAdd();
        resetTimer();
    } else if (trackedQuestion == 5) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[5];
        document.getElementById("question").innerHTML = questions[5];
        document.getElementById("choice1").innerHTML = q6Choice[0];
        document.getElementById("choice2").innerHTML = q6Choice[1];
        document.getElementById("choice3").innerHTML = q6Choice[2];
        document.getElementById("choice4").innerHTML = q6Choice[3];
        indexAdd();
        resetTimer();
    } else if (trackedQuestion == 6) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[6];
        document.getElementById("question").innerHTML = questions[6];
        document.getElementById("choice1").innerHTML = q7Choice[0];
        document.getElementById("choice2").innerHTML = q7Choice[1];
        document.getElementById("choice3").innerHTML = q7Choice[2];
        document.getElementById("choice4").innerHTML = q7Choice[3];
        indexAdd();
        resetTimer();
    } else if (trackedQuestion == 7) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[7];
        document.getElementById("question").innerHTML = questions[7];
        document.getElementById("choice1").innerHTML = q8Choice[0];
        document.getElementById("choice2").innerHTML = q8Choice[1];
        document.getElementById("choice3").innerHTML = q8Choice[2];
        document.getElementById("choice4").innerHTML = q8Choice[3];
        indexAdd();
        resetTimer();
    } else if (trackedQuestion == 8) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[8];
        document.getElementById("question").innerHTML = questions[8];
        document.getElementById("choice1").innerHTML = q9Choice[0];
        document.getElementById("choice2").innerHTML = q9Choice[1];
        document.getElementById("choice3").innerHTML = q9Choice[2];
        document.getElementById("choice4").innerHTML = q9Choice[3];
        indexAdd();
        resetTimer();
    } else if (trackedQuestion == 9) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[9];
        document.getElementById("question").innerHTML = questions[9];
        document.getElementById("choice1").innerHTML = q10Choice[0];
        document.getElementById("choice2").innerHTML = q10Choice[1];
        document.getElementById("choice3").innerHTML = q10Choice[2];
        document.getElementById("choice4").innerHTML = q10Choice[3];
        indexAdd();
        resetTimer();
    } else if (trackedQuestion == 10) {
        document.getElementById("questionNumber").innerHTML = questionNumbers[10];
        document.getElementById("question").innerHTML = questions[10];
        document.getElementById("choice1").innerHTML = q11Choice[0];
        document.getElementById("choice2").innerHTML = q11Choice[1];
        document.getElementById("choice3").innerHTML = q11Choice[2];
        document.getElementById("choice4").innerHTML = q11Choice[3];
        indexAdd();
        resetTimer();
    } else {
        //clearInterval(counter);
        answerItem = 0;
        indexItem = 0;
        nextQuestion = 0;
        trackedQuestion = 0;
        correct = 0;
        incorrect = 0;
        missed = 0;
        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#missed").text(missed);
        document.getElementById("questionNumber").innerHTML = questionNumbers[0];
        document.getElementById("question").innerHTML = questions[0];
        document.getElementById("choice1").innerHTML = q1Choice[0];
        document.getElementById("choice2").innerHTML = q1Choice[1];
        document.getElementById("choice3").innerHTML = q1Choice[2];
        document.getElementById("choice4").innerHTML = q1Choice[3];
        resetTimer();

    }
}



function answerCheckButton1 (){
    if (questions[indexItem] === questions[0]) {
        if (q1Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[1]) {
        if (q2Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[2]) {
        if (q3Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[3]) {
        if (q4Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[4]) {
        if (q5Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[5]) {
        if (q6Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[6]) {
        if (q7Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[7]) {
        if (q8Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[8]) {
        if (q9Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[9]) {
        if (q10Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else if (questions[indexItem] === questions[10]) {
        if (q11Choice[0] === answer[answerItem]) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    } else {
        alert("error")
    }
};

const answerCheckButton2 = () => {
    if (questions[indexItem] === questions[0]) {
            if (q1Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[1]) {
            if (q2Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[2]) {
            if (q3Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[3]) {
            if (q4Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[4]) {
            if (q5Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[5]) {
            if (q6Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[6]) {
            if (q7Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[7]) {
            if (q8Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[8]) {
            if (q9Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[9]) {
            if (q10Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[10]) {
            if (q11Choice[1] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else {
        alert("error")
    }
};
const answerCheckButton3 = () => {
    if (questions[indexItem] === questions[0]) {
            if (q1Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[1]) {
            if (q2Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[2]) {
            if (q3Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[3]) {
            if (q4Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[4]) {
            if (q5Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[5]) {
            if (q6Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[6]) {
            if (q7Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[7]) {
            if (q8Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[8]) {
            if (q9Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[9]) {
            if (q10Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[10]) {
            if (q11Choice[2] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else {
        alert("error");
    }
};

const answerCheckButton4 = () => {
    if (questions[indexItem] === questions[0]) {
            if (q1Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[1]) {
            if (q2Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[2]) {
            if (q3Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[3]) {
            if (q4Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[4]) {
            if (q5Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[5]) {
            if (q6Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[6]) {
            if (q7Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[7]) {
            if (q8Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[8]) {
            if (q9Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[9]) {
            if (q10Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else if (questions[indexItem] === questions[10]) {
            if (q11Choice[3] === answer[answerItem]) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
    } else {
        alert("error")
    }
};

function correctOutput() {
    correct += 1;
    $("#correct").text(correct);
}

function incorrectOutput() {
    incorrect += 1;
    $("#incorrect").text(incorrect);
}

// main answer callback function
function correctAnswer() {
    correctOutput();
    nextButton();
}

function incorrectAnswer() {
    incorrectOutput();
    nextButton();
}
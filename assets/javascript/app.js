// =============== TRIVIA ARRAY HOLDING QUESTIONS, OPTIONS, AND ANSWERS INDEX ===============
var triviaQuestions = [
    {
        question: "At what age does Harry first attend Hogwarts?",
        options: ["8", "9", "11", "13"],
        answer: "11"
    },
    {
        question: "What class is taught by a different professor every year?",
        options: ["Charms", "Potions", "Herbology", "Defense Against the Dark Arts"],
        answer: "Defense Against the Dark Arts"
    },
    {
        question: "Which ingredient for Polyjuice Potion needs to be picked at the full moon to be effective?",
        options: ["Knotgrass", "Lacewing Flies", "Fluxweed", "Horn of Bicorn"],
        answer: "Fluxweed"
    },
    {
        question: "Who dies at the end of the Tri-Wizard Tournament?",
        options: ["Viktor Krum", "Fleur DeLacour", "Cedric Diggory", "Dobby"],
        answer: "Cedric Diggory"
    },
    {
        question: "Who kills Professor Dumbledore?",
        options: ["Draco Malfoy", "Severus Snape", "Voldemort", "Harry Potter"],
        answer: "Severus Snape"
    },
    {
        question: "What does the Marauder's Map show?",
        options: ["Hidden treasure", "The location of everyone at Hogwarts", "The Room of Requirement", "The Weasley's secret stash"],
        answer: "The location of everyone at Hogwarts"
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        options: ["Bludger", "Chaser", "Seeker", "Keeper"],
        answer: "Seeker"
    },
    {
        question: "What house at Hogwarts does Draco Malfoy belong to?",
        options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
        answer: "Slytherin"
    },
    {
        question: "According to Mr. Ollivander, James Potter's wand was exceptionally good for what?",
        options: ["Transfiguration", "Charms", "Wand Work", "Nothing"],
        answer: "Transfiguration"
    },
    {
        question: "What is the name of Harry's owl?",
        options: ["Hedwig", "Scabbers", "Buckbeak", "Hermoine"],
        answer: "Hedwig"
    },
];

// =============== VARIABLES FOR THE GAME ===============
var userGuess;
var correctGuess;
var triviaIndex;
var currentQuestion;
var newQuestion;
var answerOptionButton;
var intervalId;
var timer = 40;
var correct = 0;
var incorrect = 0;
var questionCount = 0;
var gameEnd = false;
var triviaCopy = [...triviaQuestions];

// =============== READY FUNCTION ON PAGE LOAD ===============
$(document).ready(function () {

    function restart() {
        $("#seconds-timer").hide();
        $("#container-trivia").hide();
        $("#container-answers").hide();
        $("#start").show();
        $("#container-instructions").show();
        correct = 0;
        incorrect = 0;
        timer = 40;
        questionCount = 0;
    }

    restart();

    function startGame() {
        $("#start").hide();
        $("#container-instructions").hide();
        $("#container-answers").hide();
        $("#seconds-timer").show();
        $("#container-trivia").show();


        timerRun();
        generateQuestions();
    };

    // CLICK EVENT FOR THE START BUTTON
    $("#start-button").click(startGame)

    // FUNCTION FOR THE TIMER COUNT DOWN
    function timerRun() {
        intervalId = setInterval(function () {
            $("#timer").text(timer);
            timer--;
            if (timer === -1) {
                clearInterval(intervalId);
                gameComplete();
            }
        }, 1000);
    };

    // FUNCTION TO TRANSITION TO THE NEXT QUESTION AFTER 2 SECONDS
    function transition() {
        setTimeout(nextQuestion, 2000);
    };


    // FUNCTION TO GENERATE THE QUESTIONS AND ANSWER OPTIONS
    function generateQuestions() {
        $(".trivia").empty();
        questionCount++;

        if (questionCount < 11) {
            // Generates the questions and inserts them into the HTML
            triviaIndex = Math.floor(Math.random() * triviaQuestions.length);
            currentQuestion = triviaQuestions[triviaIndex];
            $("#random-questions").text(currentQuestion.question);

            // Generates the answer options and inserts them into the HTML
            for (var i = 0; i < currentQuestion.options.length; i++) {
                answerOptionButton = $("<input/>").attr({ type: "button", class: "answerOptionsButton", id: currentQuestion.options[i].toString(), value: currentQuestion.options[i].toString() });

                $("#trivia-answers").append(answerOptionButton).show();
            }

            // Gets the correct answer for each question
            correctGuess = currentQuestion.answer;

            triviaQuestions.splice(triviaIndex, 1);
            console.log(triviaQuestions);

            // Click event for the answer options
            $(".answerOptionsButton").on("click", function () {
                userGuess = $(this)[0].id;

                // If the user guesses correctly then...
                if (userGuess === correctGuess) {
                    correct++;
                    $(this).css({
                        color: "#000",
                        background: "#eeba30",
                        border: "none"
                    });
                    $("#random-questions").empty();
                    $("#random-questions").text("Correct!!");
                    clearInterval(intervalId);
                    transition();
                }
                // If the user guesses incorrectly then... 
                else if (userGuess !== correctGuess) {
                    incorrect++;
                    $(this).css({
                        color: "#fff",
                        background: "#2a623d",
                        border: "none"
                    });
                    $("#random-questions").empty();
                    $("#random-questions").text("Wrong!  The correct answer is .. " + correctGuess + "!");
                    clearInterval(intervalId);
                    transition();
                }
            });
        }
        // If all questions are answered or time runs out then gameComplete runs
        else {
            gameEnd = true;
            clearInterval(intervalId);
            timer = 0;
            gameComplete();
        }
    };

    // FUNCTION TO CYCLE THROUGH THE QUESTIONS
    function nextQuestion() {
        clearInterval(intervalId);
        timerRun();
        generateQuestions();
    };

    // FUNCTION FOR THE END OF GAME SCREEN
    function gameComplete() {
        clearInterval(intervalId);
        $("#seconds-timer").hide();
        $("#container-trivia").hide();
        $("#container-answers").show();
        $("#correct-answers").text(correct);
        $("#wrong-answers").text(incorrect);

        triviaQuestions = triviaCopy;
        console.log(triviaQuestions);

        // Gives a different display based on the number of correct answers the user got
        if (correct === 10) {
            $(".finished-text").text("AMAZING!! You got 100%!")
        } else if (correct <= 9 && correct >= 6) {
            $(".finished-text").text("Good Job!! You know you're stuff!");
        } else if (correct === 5) {
            $(".finished-text").text("Average! You should probably watch the movies again!");
        } else if (correct <= 4) {
            $(".finished-text").text("That's bad! You're definitely a muggle!");
        }
    };

    // FUNCTION TO RESTART THE GAME ON BUTTON CLICK
    $("#restart-game").click("click", function () {
        restart();
        // timerRun();
        // generateQuestions();
    })
});
// Set up the click functions
// Set up the variables
// Set up the arrays for the questions, options, and answers
// Create a function to start the game
// Create a function to go to the next question
// Create a function to check the answers 
// Create a function to end the game
// Create a function to reset the stats and questions for the game
// Create a timer for the game

// .ready function for when the page loads
$(document).ready(function() {

    // Variables for the game
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timer = 45;
    var triviaQuestion = [];

    // Function to start the game
    function gameStart() {

        // Arrays for Question, options, and the answer
        triviaQuestion = [{
            question: "At what age does Harry first attend Hogwarts?",
            options: ["8", "9", "11", "13"],
            answer: "11"
        },
                    {
            question: "What is the name of Harry's owl?",
            options: ["Hedwig", "Scabbers", "Buckbeak", "Hermione"],
            answer: "Hedwig"
        },          
                    {
            question: "What class is taught by a different professor every year?",
            options: ["Charms", "Potions", "Herbology", "Defense Against the Dark Arts"],
            answer: "Defense Against the Dark Arts"
        },
                    {
            question: "What house at Hogwarts does Draco belong to?",
            options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
            answer: "Slytherin"
        },
                    {
            question: "What position does Harry play on his Quidditch team?",
            options: ["Bludger", "Chaser", "Seeker", "Keeper"],
            answer: "Seeker"
        },          
                    {
            question: "Who is Fluffy?",
            options: ["Hagrid's Dragon", "Ron's Rat", "Hermione's Cat", "A Three-Headed Dog"],
            answer: "A Three-Headed Dog"
        },          
                    {
            question: "Who kills Professor Dumbledore?",
            options: ["Draco Malfoy", "Severus Snape", "Voldemort", "Harry Potter"],
            answer: "Severus Snape"
        },
                    {
            question: "What does the Marauder's Map show?",
            options: ["Hidden Treasure", "The Location of Everyone at Hogwarts", "The Room of Requirement", "The Weasley's Secret Stash"],
            answer: "The Location of Everyone at Hogwarts"
        },          
                    {
            question: "What is Harry's Patronus?",
            options: ["An Owl", "A Bunny", "A Unicorn", "A Stag"],
            answer: "A Stag"
        },      
                    {
            question: "Who dies at the end of the Tri-Wizard Tournament?",
            options: ["Viktor Krum", "Fleur DeLacour", "Cedric Diggory", "Dobby"],
            answer: "Cedric Diggory"
        },          
                    {
            question: "How many Horcruxes must Harry destroy to kill Voldemort?",
            options: ["20", "4", "7", "9"],
            answer: "7"
        }, 
                    {
            question: "What is Dumbledore buried with?",
            options: ["The Resurrection Stone", "The Elder Wand", "Harry's Firebolt", "The Sword of Gryffindor"],
            answer: "The Elder Wand"
        }];

        $("#answers").hide();
    };

    var secondsTimer = 45;
    var intervalId;

    $("#seconds-timer").text(secondsTimer);

    gameStart();

    intervalId = setInterval(timerStart, 1000);

    // Function for the timer countdown
    function timerStart() {
        if (secondsTimer === 0) {
            gameOver();
            return console.log("Time's Up");
        } 
        secondsTimer--;
        $("seconds-timer").text(secondsTimer);
    };

    // Function for the end of the game
    function gameOver() {

        clearInterval(intervalId);
        for ()
        
    }
})
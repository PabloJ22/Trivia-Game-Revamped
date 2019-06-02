$("#start").on('click', function () {
    game.start();
});

$(document).on('click', '#end', function () {
    game.done();
});

// $("#start").on('click', function () {
//     game.start();
// });

let questions = [{
        question: "what is the outcome of: 236 x 2 - 50 - 2 =_____?",
        answers: [580, 408, 420, 460],
        correctAnswer: 420
    }, {
        question: "What is the average lifespan of a sloth?",
        answers: ["eternal", "I Love sloths <3", "10 - 20 years", "20 - 30 years"],
        correctAnswer: "20 - 30 years"
    },
    {
        question: "Which of these animals CANNOT reproduce body parts?",
        answers: ["Tunicate", "Star Fish", "Axolotl", "White-tailed Deer"],
        correctAnswer: ["Tunicate", "Star Fish", "Axolotl", "White-tailed Deer"]
    },
    {
        question: "Which country consumes the most alcohol per capita?",
        answers: ["Belarus", "Lithuania", "Russia", "Romania"],
        correctAnswer: "Belarus"
    },
    {
        question: "How many eggs does a chicken lay in a lifetime?",
        answers: [530, 430, 330, 230],
        correctAnswer: 430

    }
];

let game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#start").remove();
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">90</span> Seconds</h2>');

        for (let i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (let j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio'  name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);


            }

        }
        $("#subwrapper").append("<br><br><button id='end' class='button'>DONE! <br> What'd I score?!?!?! =D</button>");
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        this.result();
    },

    result: function () {
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>Your Results:</h2>");
        $("#subwrapper").append("<h3>Correct Answer: " + this.correct + "</h3>");
        $("#subwrapper").append("<h3>incorrect Answer: " + this.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

        $("#subwrapper").append("<br><br><button id='start' class='button'>Play Again! =D</button>");
        $("#start").on('click', function () {
            game.start();
        });
        start = function () {
            timer = setInterval(game.countdown, 1000);
            $("#start").remove();
            $('result()').remove();
            $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">90</span> Seconds</h2>');
    
            for (let i = 0; i < questions.length; i++) {
                $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
                for (let j = 0; j < questions[i].answers.length; j++) {
                    $("#subwrapper").append("<input type='radio'  name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
    
    
                }
    
            }
            $("#subwrapper").append("<br><br><button id='end' class='button'>DONE! <br> What'd I score?!?!?! =D</button>");
        }
    }
}
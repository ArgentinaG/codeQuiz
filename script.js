var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft ;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement();

  imgEl.setAttribute(");
  mainEl.appendChild(imgEl);

}

setTime();


var questions = [
    
            {
                prompt: "What is 2*2?",
                answers: {
                    a: "four",
                    b: "six",
                    c: "eight"
                },
                correctAnswer: "a"
            },

            {
                prompt: "What is 4-2?",
                answers: {
                    a: "one",
                    b: "two",
                    c: "three"
                },
                correctAnswer: "b"
            },

            {
                prompt: "What is 4+4?",
                answers: {
                    a: "six",
                    b: "eight",
                    c: "twelve"
                },
                correctAnswer: "b"
            },

            {
                prompt: "What is 4*4?",
                answers: {
                    a: "twenty-two",
                    b: "twenty-eight",
                    c: "sixteen"
                },
                correctAnswer: "c"
            },

            {
                prompt: "What is 16/4?",
                answers: {
                    a: "four",
                    b: "eight",
                    c: "twelve"
                },
                correctAnswer: "a"
            }

        ];

        var score = 0;

        for (var i = 0; i < questions.length; i++) {
            var response = window.prompt(questions[i].prompt)

            if (response == questions[i].answer)
                score++;
            alert("Correct!");

            { else {
                alert("Wrong!");
            }
                {
                    alert("You got" + score + "/" + questions.length);




                }

            }
    


    


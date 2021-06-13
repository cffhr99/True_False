// TODO: Create an array with five question objects
var questions = [
    {q:'3 is bigger than 5', a:'f'},
    {q:'Learning math is easiler than language', a:'t'},
    {q:'Coke is the most healthy drink in the world', a:'f'},
    {q:'Next president is an US citizen.', a:'t'},
    {q:'Guess the final answer is True or False', a:'f'}
];

// TODO: Create a variable to keep track of the score
var mainEl = document.querySelector('#main');
var score = 0;

init()

function init(){
    clearscreen();
    reset();
    var heading = document.createElement('h1');
    heading.textContent = "Welcome to the True or False questions page ~";
    heading.setAttribute("style","text-align:center");
  
    var startBtn = document.createElement('button');
    startBtn.setAttribute("class","btn");
    startBtn.textContent = 'Let`s play !';

    var BtnBox = document.createElement('div');
    BtnBox.setAttribute("class","btnbox");
  
    mainEl.appendChild(heading);
    mainEl.appendChild(BtnBox);
    BtnBox.appendChild(startBtn);
  
    startBtn.addEventListener('click',function(){
      playgame(questions)
    })
  }

function clearscreen(){
    mainEl.innerHTML = "";
  }
  
  function reset() {
    score = 0
  }
// TODO: Iterate over the questions array and display each question in a confirmation box
function playgame(questions){
    for (var i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i].q);


// TODO: Check the user's answer against the correct answer
if (
    (answer === true && questions[i].a === 't') ||
    (answer === false && questions[i].a === 'f')
  ) {
// TODO: Alert the user if they are correct or wrong. Increment the score accordingly
score++;
// Alert the user
alert('Correct!');
} else {
alert('Wrong!');
}
}
// TODO: At the end of the game, alert the user with the final score
alert('You got ' + score + '/' + questions.length);
init()
}

var submitQuestion = document.querySelector('.entry-form');
var magicBall = document.querySelector('.magic-ball');

var magicAnswers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt.',
  'Yes - definitely',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later',
  'Better not tell you now.',
  'Cannot predict now',
  'Concentrate and ask again.',
  'Don/t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful'
]
console.log(submitQuestion);
submitQuestion.addEventListener('submit', askMagicEightball)


function randomAnswer() {
  return Math.floor(Math.random() * magicAnswer.length)
}

function clearData() {
  magicBall.classList.remove('hidden');
}


function askMagicEightball(event) {
  event.preventDefault();
  console.log(question)
  var question = document.querySelector('.input-field').value;
  var returnQuestion = document.getElementById("returnQuestion");
  console.log(returnQuestion);
  returnQuestion.innerText = question;
  hideEightball();
}

// function returnedAnswer() {
//   var answer = '';
//   for (var i = 0; i < magicAnswers.length, i++) {
//
//   }
// }

function hideEightball() {
  magicBall.classList.add('hidden');
}

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    a: "Hyperlinks and Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyper Text Markup Language",
    d: "Hyperlink Text Markup Language",
    correct: "c",
  },
  {
    question:
      "Which property is used to change the text color of an element in CSS?",
    a: "color",
    b: "text-color",
    c: "font-color",
    d: "textStyle",
    correct: "a",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    a: "var colors = 'red', 'green', 'blue';",
    b: "var colors = ['red', 'green', 'blue'];",
    c: "var colors = {'red', 'green', 'blue'};",
    d: "var colors = (1:'red', 2:'green', 3:'blue');",
    correct: "b",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    a: "<a href='http://www.example.com'>Example</a>",
    b: "<link src='http://www.example.com'>Example</link>",
    c: "<hyperlink='http://www.example.com'>Example</hyperlink>",
    d: "<a url='http://www.example.com'>Example</a>",
    correct: "a",
  },
  {
    question: "How can you apply an external stylesheet to a webpage in HTML?",
    a: "<link rel='stylesheet' type='text/css' href='styles.css'>",
    b: "<style src='styles.css'>",
    c: "<stylesheet>styles.css</stylesheet>",
    d: "<css>styles.css</css>",
    correct: "a",
  },
  {
    question:
      "Which built-in method returns the length of a string in JavaScript?",
    a: ".size",
    b: ".length",
    c: ".count",
    d: ".index",
    correct: "b",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    a: "<list>",
    b: "<ul>",
    c: "<ol>",
    d: "<li>",
    correct: "b",
  },
  {
    question: "How do you select an element with id 'example' in CSS?",
    a: ".example",
    b: "#example",
    c: "element.example",
    d: "id.example",
    correct: "b",
  },
  {
    question:
      "What is the correct way to declare a JavaScript variable with var keyword?",
    a: "variable myVar;",
    b: "v myVar;",
    c: "var myVar;",
    d: "let myVar;",
    correct: "c",
  },
  {
    question: "Which attribute is used to specify an image filename in HTML?",
    a: "src",
    b: "href",
    c: "img",
    d: "link",
    correct: "a",
  },
  {
    question: "How do you change the font size of an element in CSS?",
    a: "font-size:",
    b: "text-size:",
    c: "size:",
    d: "font-height:",
    correct: "a",
  },
  {
    question:
      "What does the following JavaScript code do? document.getElementById('demo').innerHTML = 'Hello World';",
    a: "Changes the content of an element with id 'demo' to 'Hello World'",
    b: "Creates a new element with id 'demo' and sets its content to 'Hello World'",
    c: "Alerts 'Hello World'",
    d: "Prints 'Hello World' to the console",
    correct: "a",
  },
  {
    question: "Which tag is used to create a table in HTML?",
    a: "<table>",
    b: "<tab>",
    c: "<tr>",
    d: "<td>",
    correct: "a",
  },
  {
    question: "How do you make a list of horizontal navigation items in CSS?",
    a: "list-style-type: horizontal;",
    b: "nav-type: horizontal;",
    c: "display: inline;",
    d: "list-type: horizontal;",
    correct: "c",
  },
  {
    question:
      "How do you round the number 7.25 to the nearest integer in JavaScript?",
    a: "round(7.25)",
    b: "Math.rnd(7.25)",
    c: "Math.round(7.25)",
    d: "rnd(7.25)",
    correct: "c",
  },
  {
    question: "What is the correct HTML for inserting a line break?",
    a: "<break>",
    b: "<lb>",
    c: "<br>",
    d: "<line>",
    correct: "c",
  },
  {
    question: "How do you center align text in CSS?",
    a: "align: center;",
    b: "text-align: center;",
    c: "center-text: true;",
    d: "text-align: middle;",
    correct: "b",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of an HTML element?",
    a: "document.getElementById('demo').value = 'Hello World';",
    b: "document.getElementById('demo').text = 'Hello World';",
    c: "document.getElement('demo').innerHTML = 'Hello World';",
    d: "document.getElementById('demo').innerHTML = 'Hello World';",
    correct: "d",
  },
  {
    question: "How can you open a link in a new tab/browser window in HTML?",
    a: "<a href='url' target='_blank'>Example</a>",
    b: "<a href='url' target='_new'>Example</a>",
    c: "<a href='url' target='new'>Example</a>",
    d: "<a href='url' target='blank'>Example</a>",
    correct: "a",
  },
  {
    question: "How do you add a background color to an element in CSS?",
    a: "background-color:",
    b: "color-background:",
    c: "background: color;",
    d: "bg-color:",
    correct: "a",
  },
  {
    question:
      "What is the correct JavaScript syntax for referring to an external script called 'script.js'?",
    a: "<script src='script.js'>",
    b: "<script name='script.js'>",
    c: "<script href='script.js'>",
    d: "<script file='script.js'>",
    correct: "a",
  },
  {
    question:
      "Which attribute is used to specify multiple styles for a single element in HTML?",

    a: "class",
    b: "style",
    c: "multiple-styles",
    d: "styles",
    correct: "b",
  },
  {
    question:
      "How do you set the border radius of an element to make it round in CSS?",
    a: "border: round;",
    b: "border-radius: 50%;",
    c: "border-shape: round;",
    d: "corner-radius: 50%;",
    correct: "b",
  },
  {
    question: "What will the following code output: console.log(2 + '2');",
    a: "4",
    b: "22",
    c: "'22'",
    d: "2 + '2'",
    correct: "c",
  },
  {
    question: "Which tag is used to define a section in an HTML document?",
    a: "<section>",
    b: "<div>",
    c: "<article>",
    d: "<block>",
    correct: "a",
  },
];

const startBtn = document.querySelector("#start-btn");
const mainSection = document.querySelector(".main");
const volumeIcon = document.querySelector(".volume-icon-container");
const footerText = document.querySelector(".footer-text");
const audio = new Audio("/assets/audio/music.mp3");
const questions = document.querySelectorAll(".question");
const questionText = document.querySelector("#question_text");
const quizTimerEl = document.querySelector(".quiz-time p");
const currentQuizEl = document.querySelector(".current-quiz p");
const quizPageEl = document.querySelector(".quiz-page");
const questionContainer = document.querySelector(".question-container");
const nextBtn = document.querySelector(".next-btn");

let currentQuiz = 0;
let quizTimer = 30;
let selectionCount = 0;
let interval;
let intervalCount = 0;

currentQuizEl.innerText = `${
  currentQuiz < 10 ? "0" + currentQuiz : currentQuiz
}/${quizQuestions.length - 1}`;

function correctIcon() {
  const correctIcon = document.createElement("img");
  correctIcon.src = "assets/images/correct.svg";

  return correctIcon;
}
function wrongIcon() {
  const wrongIcon = document.createElement("img");
  wrongIcon.src = "assets/images/wrong.svg";
  const wrongText = document.createElement("span");
  wrongText.innerText = "You chose";
  const wrongContainer = document.createElement("div");
  wrongContainer.append(wrongText, wrongIcon);

  return wrongContainer;
}
function playAudio() {
  audio.play();
  audio.volume = 0.2;
  audio.currentTime = 10;
}
function pauseAudio() {
  audio.pause();
  audio.currentTime = 10;
}
volumeIcon.addEventListener("click", () => {
  volumeIcon.classList.toggle("volume");

  if (volumeIcon.classList.contains("volume")) {
    playAudio();
  } else {
    pauseAudio();
  }
});
// function updateTimer() {
//   quizTimerEl.innerText = `00:${
//     quizTimer-- < 10 ? "0" + quizTimer : quizTimer
//   }`;
//   if (quizTimer <= 0) {
//     currentQuiz < quizQuestions.length - 1 ? currentQuiz++ : currentQuiz;
//     resetTimer();
//     updateQuiz();
//     questions.forEach((question) => {
//       question.classList.remove("correct");
//       question.classList.remove("wrong");
//     });
//   } else if (quizTimer <= 15 && quizTimer > 5) {
//     document.body.classList.add("half-time");
//   } else if (quizTimer <= 5) {
//     document.body.classList.add("over-time");
//   }
// }

// startBtn.addEventListener("click", () => {
//   mainSection.classList.add("active");
//   document.body.classList.add("full-time");

//   questionText.innerText = quizQuestions[currentQuiz].question;
//   questions.forEach((question) => {
//     let questionId = question.id;
//     question.innerText = quizQuestions[currentQuiz][questionId];
//   });

//   interval = setInterval(updateTimer, 1000);
// });

// questionContainer.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     const selectedId = e.target.id;
//     if (quizQuestions[currentQuiz].correct === selectedId) {
//       if (!e.target.classList.contains("correct")) {
//         selectionCount++;
//         if (selectionCount <= 1) {
//           e.target.classList.add("correct");
//           e.target.appendChild(correctIcon());
//           clearInterval(interval);
//           intervalCount = 0;
//         }
//       }
//     } else {
//       if (!e.target.classList.contains("wrong")) {
//         selectionCount++;
//         if (selectionCount <= 1) {
//           e.target.classList.add("wrong");
//           e.target.appendChild(wrongIcon());
//           clearInterval(interval);
//           intervalCount = 0;
//           if (e.target.id !== quizQuestions[currentQuiz].correct) {
//             questions.forEach((question) => {
//               if (quizQuestions[currentQuiz].correct === question.id) {
//                 question.classList.add("correct");
//                 question.appendChild(correctIcon());
//               }
//             });
//           }
//         }
//       }
//     }
//   }
// });

// function updateQuiz() {
//   if (currentQuiz < quizQuestions.length) {
//     questions.forEach((question) => {
//       let questionId = question.id;
//       questionText.innerText = quizQuestions[currentQuiz].question;
//       question.innerText = quizQuestions[currentQuiz][questionId];
//     });
//     currentQuiz < quizQuestions.length - 1 ? currentQuiz++ : currentQuiz;
//   }

//   questions.forEach((question) => {
//     selectionCount = 0;
//     question.classList.remove("correct");
//     question.classList.remove("wrong");
//   });
// }

// function resetTimer() {
//   quizTimer = 30;
//   quizTimerEl.innerText = `00:${
//     --quizTimer < 10 ? "0" + quizTimer : quizTimer
//   }`;
//   if (intervalCount === 1) {
//     interval = setInterval(updateTimer, 1000);
//   }
//   intervalCount = 1;
//   currentQuizEl.innerText = `${
//     currentQuiz < 10 ? "0" + currentQuiz : currentQuiz
//   }/${quizQuestions.length - 1}`;
//   document.body.classList.remove("half-time");
//   document.body.classList.remove("over-time");
// }

// nextBtn.addEventListener("click", () => {
//   updateQuiz();
//   resetTimer();
//   if (quizQuestions.length - 1 === currentQuiz) {
//     quizPageEl.classList.add("completed");
//     resetTimer();
//   }
// });

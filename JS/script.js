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
  {
    question: "Which tag is used to define a ancor tag in an HTML document?",
    a: "<section>",
    b: "<a>",
    c: "<article>",
    d: "<block>",
    correct: "b",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    a: "In the <head> section",
    b: "At the end of the document",
    c: "In the <body> section",
    d: "At the top of the document ",
    correct: "a",
  },
];
const quizQuestionsLength = quizQuestions.length - 2;

const startBtn = document.querySelector("#start-btn");
const retryBtn = document.querySelector(".retry-btn");
const nextBtn = document.querySelector(".next-btn");
const mainSection = document.querySelector("body > .main");
const audio = new Audio("/assets/audio/music.mp3");
const volumeIcon = document.querySelector(".volume-icon-container");
const currentQuizEl = document.querySelector(".current-quiz p");
const quizTimerEl = document.querySelector(".quiz-time p");
const questionText = document.querySelector("#question_text");
const questions = document.querySelectorAll(".question");
const questionContainer = document.querySelector(".question-container");
const greenResultText = document.querySelector(
  ".green-result-icon-container p"
);
const redResultText = document.querySelector(".red-result-icon-container p");
const resultScore = document.querySelector(".result-score");
const resultBarValue = document.querySelector(".result-bar-value");
const alreadyPlayedScore = document.querySelector(".already-played-score");

let currentQuiz = getLocalStorage("currentQuiz") || 0;
let currentTimer = 30;
let interval;
let selectionCount = 0;
let correctAnswerCount = getLocalStorage("correctAnswerCount") || 0;
let redResultScore = 100;

quizTimerEl.innerText = `00:${
  currentTimer < 10 ? "0" + currentTimer : currentTimer
}`;
currentQuizEl.innerText = `${
  currentQuiz < 10 ? "0" + currentQuiz : currentQuiz
}/${quizQuestions.length - 2}`;

resultScore.innerText = `${
  correctAnswerCount < 10 ? "0" + correctAnswerCount : correctAnswerCount
}/${quizQuestions.length - 2}`;

greenResultText.innerText = `${
  (correctAnswerCount / quizQuestionsLength) * 100
}%`;

redResultText.innerText = `${
  redResultScore - parseInt(greenResultText.innerText)
}%`;

resultBarValue.style.width = `${
  (correctAnswerCount / quizQuestionsLength) * 100
}%`;

function customInterval(func, time) {
  clearTimeout(interval);
  interval = setInterval(func, time);
}

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

function updateTimer() {
  currentTimer > 0 ? currentTimer-- : currentTimer;

  quizTimerEl.innerText = `00:${
    currentTimer < 10 ? "0" + currentTimer : currentTimer
  }`;

  if (currentTimer <= 0) {
    resetTimer();
    updateQuiz();
  } else if (currentTimer <= 15 && currentTimer < 5) {
    document.body.classList.add("half-time");
  }

  if (currentTimer <= 5) {
    document.body.classList.add("over-time");
  }
}

function updateQuiz() {
  if (currentQuiz < quizQuestions.length - 1) {
    questions.forEach((question) => {
      let questionId = question.id;
      question.innerText = quizQuestions[currentQuiz][questionId];
    });
    questionText.innerText = quizQuestions[currentQuiz].question;
    setLocalStorage("currentQuiz", currentQuiz);
    currentQuiz++;

    currentQuizEl.innerText = `${
      currentQuiz < 10 ? "0" + currentQuiz : currentQuiz
    }/${quizQuestions.length - 2}`;

    resultScore.innerText = `${
      correctAnswerCount < 10 ? "0" + correctAnswerCount : correctAnswerCount
    }/${quizQuestions.length - 2}`;

    greenResultText.innerText = `${
      (correctAnswerCount / quizQuestionsLength) * 100
    }%`;

    redResultText.innerText = `${
      redResultScore - parseInt(greenResultText.innerText)
    }%`;

    resultBarValue.style.width = `${
      (correctAnswerCount / quizQuestionsLength) * 100
    }%`;

    selectionCount = 0;
    questions.forEach((question) => {
      question.classList.remove("correct");
      question.classList.remove("wrong");
    });
  }
}
updateQuiz();

function resetTimer() {
  currentTimer = 30;
  customInterval(updateTimer, 1000);
  quizTimerEl.innerText = `00:${
    currentTimer < 10 ? "0" + currentTimer : currentTimer
  }`;
  document.body.classList.remove("half-time");
  document.body.classList.remove("over-time");
  if (currentQuiz === quizQuestions.length - 1) {
    clearInterval(interval);
    mainSection.classList.add("completed");
  }
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  return localStorage.getItem(key);
}

volumeIcon.addEventListener("click", () => {
  volumeIcon.classList.toggle("volume");
  if (volumeIcon.classList.contains("volume")) {
    playAudio();
  } else {
    pauseAudio();
  }
});

startBtn.addEventListener("click", () => {
  mainSection.classList.add("active");
  document.body.classList.add("full-time");
  customInterval(updateTimer, 1000);

  if (currentQuiz === quizQuestions.length - 1) {
    clearInterval(interval);
    mainSection.classList.add("completed");
  }
});

nextBtn.addEventListener("click", () => {
  if (selectionCount) {
    updateQuiz();
    resetTimer();
  }
});

retryBtn.addEventListener("click", () => {
  mainSection.classList.remove("active", "completed");
  document.body.classList.remove("full-time");
  alreadyPlayedScore.style.display = "block";
  alreadyPlayedScore.innerText = `Highest Score: ${
    correctAnswerCount < 10 ? "0" + correctAnswerCount : correctAnswerCount
  }/${quizQuestions.length - 2}`;
  currentQuiz = 0;
  correctAnswerCount = 0;
  setLocalStorage("correctAnswerCount", correctAnswerCount);
  updateQuiz();
  pauseAudio();
});

questionContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    let selectedId = e.target.id;
    if (selectedId === quizQuestions[currentQuiz - 1].correct) {
      if (!e.target.classList.contains("correct")) {
        selectionCount++;
        if (selectionCount <= 1) {
          e.target.classList.add("correct");
          e.target.appendChild(correctIcon());
          clearInterval(interval);
          correctAnswerCount++;
          setLocalStorage("correctAnswerCount", correctAnswerCount);
        }
      }
    } else {
      if (!e.target.classList.contains("wrong")) {
        selectionCount++;
        if (selectionCount <= 1) {
          e.target.classList.add("wrong");
          e.target.appendChild(wrongIcon());
          clearInterval(interval);
          if (selectedId !== quizQuestions[currentQuiz - 1].correct) {
            questions.forEach((question) => {
              if (question.id === quizQuestions[currentQuiz - 1].correct) {
                question.classList.add("correct");
                question.appendChild(correctIcon());
              }
            });
          }
        }
      }
    }
  }
});

const questions = [
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: [
      { text: `<'script>`, correct: true},
      { text: `<'js>`, correct: false},
      { text: `<'javascript>`, correct: false},
      { text: `<'scripting>`, correct: false},
    ]
  },
  {
    question: "Where is the correct place to insert a Javascript?",
    answers: [
      { text: "The <'body'> section", correct: false},
      { text: "Both <'head'> and <'body'> section are correct", correct: true},
      { text: "The <'head'> section", correct: false},
      { text: "The <'title'> section", correct: false},
    ]
  },
  {
    question: "which is the correct syntax for referring to an external script called \"xxx.js\"?",
    answers: [
      { text: "<'script name=\"xxx.js\">", correct: false},
      { text: "<'script src=\"xxx.js\">", correct: true},
      { text: "<'script href=\"xxx.js\">", correct: false},
      { text: "<'style src=\"xxx.js\">", correct: false},
    ]
  },
  {
    question: "The external JavaSript file must contain the <`script> tag?",
    answers: [
      { text: "True", correct: false},
      { text: "False", correct: true},
      { text: "all of the above", correct: false},
      { text: "none of the above", correct: false},
    ]
  },
  {
    question: "How do you write \"Hello World\" in an alert box?",
    answers: [
      { text: "msgBox(\"Hello World\");", correct: false},
      { text: "alert(\"Hello World\");", correct: true},
      { text: "alert(\"Hello World\"):", correct: false},
      { text: "msg(\"Hello World\");", correct: false},
    ]
  },
  {
    question: "How do you create a function in JavaSript?",
    answers: [
      { text: "function myFunction()", correct: true},
      { text: "function = myFunction()", correct: false},
      { text: "function:myFunction()", correct: false},
      { text: "function = myFunction", correct: false},
    ]
  },
  {
    question: "How do you call a function named \"myFunction\"",
    answers: [
      { text: "call funtion myFunction", correct: false},
      { text: "call myFunction", correct: false},
      { text: "myFunction", correct: true},
      { text: "none of the above", correct: false},
    ]
  },
  {
    question: "How can you add comment in JavaSript?",
    answers: [
      { text: "//This is a comment", correct: true},
      { text: "'This is a comment", correct: false},
      { text: "<'!--This is a comment-->", correct: false},
      { text: "/This is a comment", correct: false},
    ]
  },
  {
    question: "How to insert a comment that has more than one line?",
    answers: [
      { text: "/*This comment has more than one line*/", correct: true},
      { text: "//This comment has more than one line", correct: false},
      { text: "<'!--This comment has more than one line-->", correct: false},
      { text: "/This comment has more than one line", correct: false},
    ]
  },
  {
    question: "What is the correct way to write a JavaSript array?",
    answers: [
      { text: "var colors = (1:\"red\",2:\"green\",3:\"blue)", correct: false},
      { text: "var colors = \"red, \"green\", \"blue\"", correct: false},
      { text: "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue)", correct: false},
      { text: "var colors = [\"red\", \"green\", \"blue\"]", correct: true},
    ]
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: [
      { text: "round(7.25)", correct: false},
      { text: "Math.rnd(7.25)", correct: false},
      { text: "Math.round(7.25)", correct: true},
      { text: "rnd(7.25)", correct: false},
    ]
  },
  {
    question: "JavaScript is the same as Java?",
    answers: [
      { text: "true", correct: false},
      { text: "false", correct: true},
      { text: "i don't know", correct: false},
      { text: "Maybe", correct: false},
    ]
  },
  {
    question: "How can you detect the client's browser name?",
    answers: [
      { text: "navigator.appName", correct: true},
      { text: "browser.name", correct: false},
      { text: "client.name", correct: false},
      { text: "browser.navName", correct: false},
    ]
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onclick", correct: true},
      { text: "onmouseclick", correct: false},
      { text: "onchange", correct: false},
      { text: "onhover", correct: false},
    ]
  },
  {
    question: "How do you declare a JavaSript variable?",
    answers: [
      { text: "variable carName;", correct: false},
      { text: "v carName;", correct: false},
      { text: "var carName;", correct: true},
      { text: "var carname;", correct: false},
    ]
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "=", correct: true},
      { text: "*", correct: false},
      { text: "X", correct: false},
      { text: "-", correct: false},
    ]
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    answers: [
      { text: "false", correct: false},
      { text: "NaN", correct: false},
      { text: "true", correct: true},
      { text: "Maybe", correct: false},
    ]
  },
  {
    question: "Is JavaSript case-sentitive?",
    answers: [
      { text: "yes", correct: true},
      { text: "sometimes", correct: false},
      { text: "No", correct: false},
      { text: "I don't know", correct: false},
    ]
  },
  {
    question: "How to write an IF in JavaSript?",
    answers: [
      { text: "if(i==5)", correct: true},
      { text: "if i == 5 then", correct: false},
      { text: "if i = 5 then", correct: false},
      { text: "if i = 5", correct: false},
    ]
  },
  {
    question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
    answers: [
      { text: "if i =! then", correct: false},
      { text: "if (i<>5)", correct: false},
      { text: "if i <>5", correct: false},
      { text: "if (i!=5)", correct: true},
    ]
  },
  {
    question: "How does a WHILE loop start?",
    answers: [
      { text: "while (i < 10; i++)", correct: false},
      { text: "while (i <= 10)", correct: true},
      { text: "while i = 1 to 10", correct: false},
      { text: "while 1 to 10", correct: false},
    ]
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      { text: "for (i <= 5;i++)", correct: false},
      { text: "for (i = 0;i <=5;i++)", correct: true},
      { text: "for (i=0;i<=5)", correct: false},
      { text: "for (i=0;i<=5)", correct: false},
    ]
  },
  {
    question: "How do you find the number with the highest value of X and Y?",
    answers: [
      { text: "Math.max(x,y)", correct: true},
      { text: "Math.ceil(x,y)", correct: false},
      { text: "top(x,y)", correct: false},
      { text: "ceil(x,y)", correct: false},
    ]
  },
  {
    question: "Which of the following is not used to declare a variable?",
    answers: [
      { text: "variable", correct: true},
      { text: "var", correct: false},
      { text: "let", correct: false},
      { text: "const", correct: false},
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Home Tool Markup Language", correct: false},
      { text: "Hyperlinks and Text Markup Language", correct: false},
      { text: "Hyper Text Markup Language", correct: true},
      { text: "Hyper Text Monitor Language", correct: false},
    ]
  },
  {
    question: "Who is the making the Web standard?",
    answers: [
      { text: "The World Wide Web Consortium", correct: true},
      { text: "Google", correct: false},
      { text: "Mozilla", correct: false},
      { text: "Microsoft", correct: false},
    ]
  },
  {
    question: "Choose the correct HTML element for the largest heading?>",
    answers: [
      { text: "<'h6>", correct: false},
      { text: "<'heading>", correct: false},
      { text: "<'head>", correct: false},
      { text: "<'h1>", correct: true},
    ]
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: [
      { text: "<'br>", correct: true},
      { text: "<'break>", correct: false},
      { text: "<'brk>", correct: false},
      { text: "<'lb>", correct: false},
    ]
  },
  {
    question: "What is the correct HTML for adding a background color?",
    answers: [
      { text: "<'body bg=\"yellow\">", correct: false},
      { text: "<'body style=\"background-color:yellow;\">", correct: true},
      { text: "<'background>yellow</background>", correct: false},
      { text: "<'style=yellow>", correct: false},
    ]
  },
  {
    question: "Choose the correct HTML element to define emphasized text",
    answers: [
      { text: "<'em>", correct: true},
      { text: "<'italic>", correct: false},
      { text: "<'i>", correct: false},
      { text: "<'important>", correct: false},
    ]
  },
  {
    question: "Which character is used to indicate an end tag?",
    answers: [
      { text: "/", correct: true},
      { text: ")", correct: false},
      { text: "<>", correct: false},
      { text: ">", correct: false},
    ]
  },
  {
    question: "Inside which HTML element do we put JavaSript?",
    answers: [
      { text: "<'script>", correct: true},
      { text: "<'js>", correct: false},
      { text: "<'javascript>", correct: false},
      { text: "<'scripting>", correct: false},
    ]
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    answers: [
      { text: "<'a href=\"url\"target=\"new\">", correct: false},
      { text: "<'a href=\"url\"=new>", correct: false},
      { text: "<'a href=\"url\"target=\"_blank\">", correct: true},
      { text: "<'a href=\"url\">", correct: false},
    ]
  },
  {
    question: "Which of these elements are all <'table> elements?",
    answers: [
      { text: "<'thread> <'body> <'tr>", correct: false},
      { text: "<'table> <'tr> <'td>", correct: true},
      { text: "<'table> <'head> <'tfoot>", correct: false},
      { text: "<'table> <'tr> <'tt>", correct: false},
    ]
  },
  {
    question: "Inline elements are normally displayed without starting a new line?",
    answers: [
      { text: "False", correct: false},
      { text: "Sometimes", correct: false},
      { text: "True", correct: true},
      { text: "Maybe", correct: false},
    ]
  },
  {
    question: "How can you make a numbered list?",
    answers: [
      { text: "<'ol'>", correct: true},
      { text: "<'ul'>", correct: false},
      { text: "<'nl'>", correct: false},
      { text: "<'list'>", correct: false},
    ]
  },
  {
    question: "How can you make a bulleted list?",
    answers: [
      { text: "<'ol'>", correct: false},
      { text: "<'ul'>", correct: true},
      { text: "<'dl'>", correct: false},
      { text: "<'list'>", correct: false},
    ]
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    answers: [
      { text: "<'check>", correct: false},
      { text: "<'checkbox>", correct: false},
      { text: "<'input type=\"checkbox\">", correct: true},
      { text: "<'input type=\"check\">", correct: false},
    ]
  },
  {
    question: "What is the HTML for making a text input field?",
    answers: [
      { text: "<'input type=\"textfield\">", correct: false},
      { text: "<'textfield>", correct: false},
      { text: "<'textinput type=\"text\">", correct: false},
      { text: "<'input type=\"text=\">", correct: true},
    ]
  },
  {
    question: "What is the correct HTML for making a drop-down list?",
    answers: [
      { text: "<'input type=\"list\">", correct: false},
      { text: "<'select>", correct: true},
      { text: "<'list>", correct: false},
      { text: "<'input type=\"dropdown\">", correct: false},
    ]
  },
  {
    question: "HTML comments start with <'!--and end with--'>?",
    answers: [
      { text: "true", correct: true},
      { text: "false", correct: false},
      { text: "There is nothing like that", correct: false},
      { text: "sometimes", correct: false},
    ]
  },
  {
    question: "Block elements are normally displayed without starting a new line?",
    answers: [
      { text: "False", correct: true},
      { text: "True", correct: false},
      { text: "sometimes", correct: false},
      { text: "none of the above", correct: false},
    ]
  },
  {
    question: "Which HTML element defines the title of a document?",
    answers: [
      { text: "<'head'>", correct: false},
      { text: "<'title'>", correct: true},
      { text: "<'meta'>", correct: false},
      { text: "<'h1'>", correct: false},
    ]
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers: [
      { text: "src", correct: false},
      { text: "alt", correct: true},
      { text: "title", correct: false},
      { text: "<<longdesc>>", correct: false},
    ]
  },
  {
    question: "which doctype is correct of HTML5?",
    answers: [
      { text: "<'!DOCTYPE html'>", correct: true},
      { text: "<'!DOCTYPE HTML5'>", correct: false},
      { text: "<'!DOCTYPE HTML PUBLIC'>", correct: false},
      { text: "None of the above", correct: false},
    ]
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    answers: [
      { text: "<'bottom'>", correct: false},
      { text: "<'section'>", correct: false},
      { text: "<'footer'>", correct: true},
      { text: "<'head'>", correct: false},
    ]
  },
  {
    question: "What the correct HTML element for palying audio files?",
    answers: [
      { text: "<'audio'>", correct: true},
      { text: "<'mp3'>", correct: false},
      { text: "<'sound'>", correct: false},
      { text: "<'music'>", correct: false},
    ]
  },
  {
    question: "The HTML <'canvas'> element is used to?",
    answers: [
      { text: "display database records", correct: false},
      { text: "create draggable elements", correct: false},
      { text: "manipulate data in MySQL", correct: false},
      { text: "draw grpahics", correct: true},
    ]
  },
  {
    question: "Choose the correct HTML element to define important text?",
    answers: [
      { text: "<'b'>", correct: false},
      { text: "<'i'>", correct: false},
      { text: "<'strong'>", correct: true},
      { text: "<'important'>", correct: false},
    ]
  },
  {
    question: "What is the correct HTML element for playing video files?",
    answers: [
      { text: "<'video'>", correct: true},
      { text: "<'movie'>", correct: false},
      { text: "<'media'>", correct: false},
      { text: "<'view'>", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function resetState(){
  nextButton.style.display = "none"
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

 function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect")
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true
  });
  nextButton.style.display = "block";
 }

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){ 
    showQuestion();
  } else {
    showScore();
  }
}


 nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
 });
startQuiz();

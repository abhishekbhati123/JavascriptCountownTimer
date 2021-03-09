//here we select html element and store there refernce in a variable

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");


//here is our array of qobject(Questions)\
const myQuestions = [
  {
    question: "Who invented JavaScript?",

    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",
    d: "falana Dikana",
    correct: "c",
  },
  {
    question: "Who invented JavaScript?",

    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",
    d: "falana Dikana",
    correct: "c",
  },
  {
    question: "Who invented JavaScript?",

    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",
    d: "falana Dikana",
    correct: "c",
  },
  {
    question: "Who invented JavaScript?",

    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",
    d: "falana Dikana",
    correct: "c",
  },
  {
    question: "Who invented JavaScript?",

    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",
    d: "falana Dikana",
    correct: "c",
  },
];
const questionEl=document.getElementById('question')
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

console.dir(a_text)

//KEEP TRACK OF CURRENT QUESTION
let curentQuestion = 0;
loadQuiz();
//function to build an quiz right away when documnet is loaded
function loadQuiz() {
   const  currentQuizData=myQuestions[curentQuestion];
    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
    console.log(a_text)
   console.log(currentQuizData);


}
submitButton.addEventListener('click',()=>{
    curentQuestion++;
    loadQuiz();
})

//show results when user click on button
function showResults() {}

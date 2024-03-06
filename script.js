import questions from './questions.js';

const questionContainer = document.getElementById("question-container");
const answerBtns = document.getElementById("answer-buttons");
const nextButton = document.getElementById('next-button');
const startButton = document.getElementById('start-button');

  
  let currentQuestionIndex = 0;
  let score = 0;

  startButton.addEventListener('click', startQuiz);
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
  
  function startQuiz() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
  }
  
  function setNextQuestion() {
    resetState();
  
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionContainer.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
    answerBtns.innerHTML = '';
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
  
  function showQuestion(question) {
    questionContainer.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.className = 'btnList';
      button.addEventListener('click', () => selectAnswer(answer));
      answerBtns.appendChild(button);
    });
  }
  

  function resetState() {
    nextButton.classList.add('hide');
    while (answerBtns.firstChild) {
      answerBtns.removeChild(answerBtns.firstChild);
    }
  }
  
  function selectAnswer(answer) {
    const correct = answer.correct;
  
    if (correct) {
      incrementScore();
    }
  
    Array.from(answerBtns.children).forEach(button => {
      button.disabled = true;
      setStatusClass(button, button.innerText === answer.text ? (correct ? 'correct' : 'incorrect') : 'disabled');
    });
  
    if (currentQuestionIndex < questions.length - 1) {
      nextButton.classList.remove('hide');
    } else {
      startButton.innerText = 'Restart';
      startButton.classList.remove('hide');
    }
  }
  
  function setStatusClass(element, status) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
    element.classList.remove('disabled');
  
    if (status) {
      element.classList.add(status);
    }
  }
  
  function incrementScore() {
    score++;
  }
  
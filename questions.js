const questions = [
    {
      question: 'What is the capital of Japan?',
      answers: [
        { text: 'Seoul', correct: false },
        { text: 'Beijing', correct: false },
        { text: 'Tokyo', correct: true },
        { text: 'Bangkok', correct: false }
      ]
    },
    {
      question: 'Who wrote "The Great Gatsby"?',
      answers: [
        { text: 'F. Scott Fitzgerald', correct: true },
        { text: 'Ernest Hemingway', correct: false },
        { text: 'Jane Austen', correct: false },
        { text: 'Charles Dickens', correct: false }
      ]
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      answers: [
        { text: 'Mars', correct: true },
        { text: 'Venus', correct: false },
        { text: 'Jupiter', correct: false },
        { text: 'Saturn', correct: false }
      ]
    },
    {
      question: 'What is the currency of South Africa?',
      answers: [
        { text: 'Rand', correct: true },
        { text: 'Dollar', correct: false },
        { text: 'Euro', correct: false },
        { text: 'Pound', correct: false }
      ]
    },
    {
      question: 'In which year did the French Revolution begin?',
      answers: [
        { text: '1776', correct: false },
        { text: '1789', correct: true },
        { text: '1804', correct: false },
        { text: '1832', correct: false }
      ]
    },
    {
      question: 'Who painted "The Starry Night"?',
      answers: [
        { text: 'Vincent van Gogh', correct: true },
        { text: 'Claude Monet', correct: false },
        { text: 'Pablo Picasso', correct: false },
        { text: 'Leonardo da Vinci', correct: false }
      ]
    },
    {
      question: 'What is the largest mammal on Earth?',
      answers: [
        { text: 'Elephant', correct: false },
        { text: 'Blue Whale', correct: true },
        { text: 'Giraffe', correct: false },
        { text: 'Polar Bear', correct: false }
      ]
    },
    {
      question: 'Which country is known as the "Land Down Under"?',
      answers: [
        { text: 'Canada', correct: false },
        { text: 'Australia', correct: true },
        { text: 'Brazil', correct: false },
        { text: 'India', correct: false }
      ]
    },
    {
      question: 'Who discovered penicillin?',
      answers: [
        { text: 'Alexander Fleming', correct: true },
        { text: 'Marie Curie', correct: false },
        { text: 'Louis Pasteur', correct: false },
        { text: 'Albert Einstein', correct: false }
      ]
    },
    {
      question: 'What is the capital of Egypt?',
      answers: [
        { text: 'Cairo', correct: true },
        { text: 'Riyadh', correct: false },
        { text: 'Istanbul', correct: false },
        { text: 'Tehran', correct: false }
      ]
    },
    {
      question: 'Who wrote "Pride and Prejudice"?',
      answers: [
        { text: 'Charlotte Brontë', correct: false },
        { text: 'Jane Austen', correct: true },
        { text: 'Charles Dickens', correct: false },
        { text: 'Leo Tolstoy', correct: false }
      ]
    },
    {
      question: 'Which ocean is the largest?',
      answers: [
        { text: 'Atlantic Ocean', correct: false },
        { text: 'Indian Ocean', correct: false },
        { text: 'Arctic Ocean', correct: false },
        { text: 'Pacific Ocean', correct: true }
      ]
    },
    {
      question: 'In what year did the Renaissance begin?',
      answers: [
        { text: '1300', correct: false },
        { text: '1400', correct: false },
        { text: '1500', correct: true },
        { text: '1600', correct: false }
      ]
    },
    {
      question: 'Who is known as the "Father of Computer Science"?',
      answers: [
        { text: 'Alan Turing', correct: true },
        { text: 'Bill Gates', correct: false },
        { text: 'Steve Jobs', correct: false },
        { text: 'Mark Zuckerberg', correct: false }
      ]
    },
    {
      question: 'What is the currency of Mexico?',
      answers: [
        { text: 'Peso', correct: true },
        { text: 'Dollar', correct: false },
        { text: 'Euro', correct: false },
        { text: 'Yen', correct: false }
      ]
    },
    {
      question: 'Who was the first woman to win a Nobel Prize?',
      answers: [
        { text: 'Marie Curie', correct: true },
        { text: 'Rosalind Franklin', correct: false },
        { text: 'Ada Lovelace', correct: false },
        { text: 'Jane Goodall', correct: false }
      ]
    },
    {
      question: 'Which composer is known as the "Father of Symphony"?',
      answers: [
        { text: 'Ludwig van Beethoven', correct: false },
        { text: 'Wolfgang Amadeus Mozart', correct: false },
        { text: 'Joseph Haydn', correct: true },
        { text: 'Johann Sebastian Bach', correct: false }
      ]
    },
    {
      question: 'What is the capital of Canada?',
      answers: [
        { text: 'Vancouver', correct: false },
        { text: 'Toronto', correct: false },
        { text: 'Ottawa', correct: true },
        { text: 'Montreal', correct: false }
      ]
    },
    {
      question: 'Which famous scientist developed the theory of general relativity?',
      answers: [
        { text: 'Isaac Newton', correct: false },
        { text: 'Galileo Galilei', correct: false },
        { text: 'Albert Einstein', correct: true },
        { text: 'Stephen Hawking', correct: false }
      ]
    },
    {
      question: 'What is the capital of Italy?',
      answers: [
        { text: 'Paris', correct: false },
        { text: 'Berlin', correct: false },
        { text: 'Madrid', correct: false },
        { text: 'Rome', correct: true }
      ]
    },
    {
      question: 'Who painted the Mona Lisa?',
      answers: [
        { text: 'Vincent van Gogh', correct: false },
        { text: 'Leonardo da Vinci', correct: true },
        { text: 'Pablo Picasso', correct: false },
        { text: 'Claude Monet', correct: false }
      ]
    },
    {
      question: 'What is the currency of Japan?',
      answers: [
        { text: 'Won', correct: false },
        { text: 'Yuan', correct: false },
        { text: 'Yen', correct: true },
        { text: 'Ringgit', correct: false }
      ]
    },
    {
      question: 'In which year did the Titanic sink?',
      answers: [
        { text: '1912', correct: true },
        { text: '1905', correct: false },
        { text: '1920', correct: false },
        { text: '1935', correct: false }
      ]
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      answers: [
        { text: 'China', correct: false },
        { text: 'South Korea', correct: false },
        { text: 'Japan', correct: true },
        { text: 'Vietnam', correct: false }
      ]
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      answers: [
        { text: 'Charles Dickens', correct: false },
        { text: 'William Shakespeare', correct: true },
        { text: 'Jane Austen', correct: false },
        { text: 'Mark Twain', correct: false }
      ]
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: [
        { text: 'Mars', correct: true },
        { text: 'Venus', correct: false },
        { text: 'Jupiter', correct: false },
        { text: 'Saturn', correct: false }
      ]
    },
    {
      question: 'What is the currency of Japan?',
      answers: [
        { text: 'Won', correct: false },
        { text: 'Yuan', correct: false },
        { text: 'Yen', correct: true },
        { text: 'Ringgit', correct: false }
      ]
    },
    {
      question: 'In which year did the Titanic sink?',
      answers: [
        { text: '1912', correct: true },
        { text: '1905', correct: false },
        { text: '1920', correct: false },
        { text: '1935', correct: false }
      ]
    },
    // Add more questions as needed
  ];
  
export default questions;
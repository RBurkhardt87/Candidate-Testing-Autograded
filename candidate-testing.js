const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = " ";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;

question = "Who was the first American woman in space? ";
correctAnswer = "Sally Ride";
candidateAnswer = " ";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? " 
];


let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your first and last name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question("Who was the first American woman in space? ");

//PART 2.2: UPDATE CODE THAT ASKS ALL QUESTIONS IN THE ARRAY, NOT JUST A SINGLE QUESTION & STORES RESPONSES
 for (let i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
 } 

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

//PART 2.3 PRINT CANDIDATE'S ANSWER AND THE CORRECT ANSWER 

for (let i = 0; i < candidateAnswers.length; i++) {
  console.log(`You answered ${candidateAnswers[i]} and the correct answer was ${correctAnswers[i]}.`);
}
console.log("\n");

//UPDATED THIS CODE TO CHECK ALL THE ANSWERS IN THE ARRAY RATHER THAN SINGLE QUESTION
  // if (candidateAnswer[i] === correctAnswer[i]) {console.log('Correct Answer');
  // }   else {console.log('Incorrect Answer');
  // }
  
let grade;  //TODO 3.2 use this variable to calculate the candidates score.

//PART 3.1 THIS IS FOR COMPARING CANDIDATE ANSWERS ARRAY WITH THE CORRECT ANSWERS ARRAY (CASE INSENSITIVE) 
//NOT SURE IF I WAS SUPPOSED TO PRINT IT OUT OR NOT. I CAN REMOVE THIS PART SINCE BELOW ALSO COMPARES AND SPLITS

let i = 0 
    while (i < correctAnswers.length) {
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log('Correct Answer!');
    } else {
      console.log('Incorrect Answer');
    } i++;
  }
console.log("\n");

//----------------------------------------------------------------------------------------------------------
//PART 3.2 CALCULATE THE CANDIDATES SCORE AS A PERCENTAGE
//THIS SECTION IS FOR ME TO FIGURE OUT HOW TO FIND THE PERCENTAGE OF THE GRADE
//IDEA: put them in their own arrays (correct & incorrect) and then use the arrays possibly for the equation
let answeredCorrectArray = [];
let answeredIncorrectArray = [];

for (let i = 0; i < candidateAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    answeredCorrectArray.push(candidateAnswers[i]);
  } else {
    answeredIncorrectArray.push(candidateAnswers[i]);
  }
}
grade = answeredCorrectArray.length/correctAnswers.length*100

//LET CANDIDATE KNOW IF THEY PASSED OR FAILED THE QUIZ:
if (grade >= 80) {
  console.log(`You have passed the quiz with ${grade}%, Congrats!!!`)
} else {
  console.log(`Unfortunately you have failed the quiz with ${grade}%. Better luck next time.`)
}
  return grade; 
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
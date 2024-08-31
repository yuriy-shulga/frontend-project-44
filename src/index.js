import readlineSync from 'readline-sync';
import getRandomNumber from './utilits.js';

const descriptionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(descriptionOfGame);

  const roundCount = 3;

  for (let round = 1; round <= roundCount; round += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

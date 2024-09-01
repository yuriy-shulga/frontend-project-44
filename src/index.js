import readlineSync from 'readline-sync';

export default (descriptionGame, genGamesData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(descriptionGame);

  const roundCount = 3;

  for (let round = 1; round <= roundCount; round += 1) {
    const [question, correctAnswer] = genGamesData();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

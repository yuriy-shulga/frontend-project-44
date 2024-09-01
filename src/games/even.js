import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const genGamesData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => runGameEngine(descriptionGame, genGamesData);

import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let divider = 2;

  while (divider < num / 2) {
    if (num % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
};

const genGamesData = () => {
  const question = getRandomNumber(0, 10000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

export default () => runGameEngine(descriptionGame, genGamesData);

import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const gcd = (operand1, operand2) => {
  const min = Math.min(operand1, operand2);
  const max = Math.max(operand1, operand2);

  return max % min === 0 ? min : gcd(min, max % min);
};

const genGamesData = () => {
  const operand1 = getRandomNumber(2, 100);
  const operand2 = getRandomNumber(2, 100);

  const question = `${operand1} ${operand2}`;
  const correctAnswer = gcd(operand1, operand2).toString();

  return [question, correctAnswer];
};

export default () => runGameEngine(descriptionGame, genGamesData);

import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';

const descriptionGame = 'What is the result of the expression?';

const calc = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error('An unknow operator');
  }
};

const genGamesData = () => {
  const operators = ['+', '-', '*'];

  const operator = operators[getRandomNumber(1, operators.length) - 1];
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);

  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = calc(operand1, operand2, operator).toString();

  return [question, correctAnswer];
};

export default () => runGameEngine(descriptionGame, genGamesData);

import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';

const descriptionGame = 'What number is missing in the progression?';

const genProgression = (firstElement, stepProgression, lengthProgression) => {
  const progression = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(firstElement + stepProgression * i);
  }

  return progression;
};

const genGamesData = () => {
  const firstElement = getRandomNumber(1, 100);
  const lengthProgression = getRandomNumber(5, 10);
  const stepProgression = getRandomNumber(1, 100);

  const progression = genProgression(firstElement, stepProgression, lengthProgression);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const hiddenSmbl = '..';

  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = hiddenSmbl;
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGameEngine(descriptionGame, genGamesData);

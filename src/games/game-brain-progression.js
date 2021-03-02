import runEngine from '../index.js';
import { getRandomNumber } from './game-brain-even.js';

const gameRule = 'What number is missing in the progression?';

const gameProgression = () => {
  const progStart = getRandomNumber(0, 101);
  const progStep = getRandomNumber(2, 6);
  const progLength = getRandomNumber(5, 9);
  const answerIndex = getRandomNumber(0, progLength);
  const result = [];
  let question = '';
  let answer = 0;
  question += `${progStart} `;
  let currentNumber = progStart;
  for (let i = 0; i <= progLength; i += 1) {
    currentNumber += progStep;
    if (i === answerIndex) {
      answer = currentNumber;
      question += '.. ';
    } else {
      question += `${currentNumber} `;
    }
  }
  result.push(question);
  result.push(answer);
  return result;
};

export default () => {
  runEngine(gameRule, gameProgression);
};

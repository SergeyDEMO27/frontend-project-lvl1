import runEngine from '../index.js';
import getRandomNumber from '../util.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (progressionStart, progressionStep, progressionLength) => {
  let currentNumber = progressionStart;
  const result = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(currentNumber);
    currentNumber += progressionStep;
  }
  return result;
};

const runGameRound = () => {
  const progressionStart = getRandomNumber(0, 101);
  const progressionStep = getRandomNumber(2, 6);
  const progressionLength = getRandomNumber(5, 9);
  const answerIndex = getRandomNumber(0, progressionLength);
  const progression = getProgression(progressionStart, progressionStep, progressionLength);
  const answer = progression[answerIndex].toString();
  progression[answerIndex] = '..';
  const question = progression.join(' ');
  const result = [question, answer];
  return result;
};

export default () => {
  runEngine(gameRule, runGameRound);
};

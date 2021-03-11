import runEngine from '../index.js';
import getRandomNumber from '../util.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getMaxDivisor = (num1, num2) => {
  if (num1 !== 0) {
    return getMaxDivisor(num2 % num1, num1);
  }
  return num2;
};

const runGameRound = () => {
  const numOne = getRandomNumber(1, 101);
  const numTwo = getRandomNumber(1, 101);
  const question = `${numOne} ${numTwo}`;
  const answer = getMaxDivisor(numOne, numTwo).toString();
  const result = [question, answer];
  return result;
};

export default () => {
  runEngine(gameRule, runGameRound);
};

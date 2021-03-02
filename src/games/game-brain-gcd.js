import runEngine from '../index.js';
import { getRandomNumber } from './game-brain-even.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getMaxDivisor = (num1, num2) => {
  if (num1 !== 0) {
    return getMaxDivisor(num2 % num1, num1);
  }
  return num2;
};

const getDivisor = () => {
  const numOne = getRandomNumber(1, 101);
  const numTwo = getRandomNumber(1, 101);
  const result = [];
  result.push(`${numOne} ${numTwo}`);
  result.push(getMaxDivisor(numOne, numTwo));
  return result;
};

export default () => {
  runEngine(gameRule, getDivisor);
};

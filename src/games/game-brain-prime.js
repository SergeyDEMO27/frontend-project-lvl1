import runEngine from '../index.js';
import { getRandomNumber } from './game-brain-even.js';

const gameRule = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const gamePrime = () => {
  const number = getRandomNumber(0, 999);
  const result = [];
  result.push(number);
  if (number <= 1) {
    result.push('no');
    return result;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result.push('no');
      return result;
    }
  }
  result.push('yes');
  return result;
};

export default () => {
  runEngine(gameRule, gamePrime);
};

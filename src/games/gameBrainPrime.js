import runEngine from '../index.js';
import getRandomNumber from '../util.js';

const gameRule = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const checkPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const runGameRound = () => {
  const number = getRandomNumber(0, 999);
  const question = number;
  const answer = checkPrime(number);
  const result = [question, answer];
  return result;
};

export default () => {
  runEngine(gameRule, runGameRound);
};

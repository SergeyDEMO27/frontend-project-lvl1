import runEngine from '../index.js';
import getRandomNumber from '../util.js';

const gameRule = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const checkPrime = (number) => {
  let prime = true;
  if (number <= 1) {
    prime = false;
  } else {
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        prime = false;
      }
    }
  }
  return prime;
};

const runGameRound = () => {
  const number = getRandomNumber(0, 999);
  const question = number;
  const answer = checkPrime(number) ? 'yes' : 'no';
  const result = [question, answer];
  return result;
};

export default () => {
  runEngine(gameRule, runGameRound);
};

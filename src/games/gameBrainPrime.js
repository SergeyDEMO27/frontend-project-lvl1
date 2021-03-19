import runEngine from '../index.js';
import getRandomNumber from '../util.js';

const gameRule = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const checkPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const runGameRound = () => {
  const questionNumber = getRandomNumber(0, 999);
  const answer = checkPrime(questionNumber) ? 'yes' : 'no';
  const result = [questionNumber, answer];
  return result;
};

export default () => {
  runEngine(gameRule, runGameRound);
};

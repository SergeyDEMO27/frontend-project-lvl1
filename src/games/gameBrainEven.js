import runEngine from '../index.js';
import getRandomNumber from '../util.js';

const gameRule = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const runGameRound = () => {
  const number = getRandomNumber(0, 101);
  const question = number;
  const answer = checkEven(number);
  const result = [question, answer];
  return result;
};

export default () => {
  runEngine(gameRule, runGameRound);
};

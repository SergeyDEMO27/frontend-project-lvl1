import runEngine from '../index.js';

const getRandomNumber = (floor, ceil) => {
  const min = Math.ceil(floor);
  const max = Math.ceil(ceil);
  return Math.floor(Math.random() * (max - min)) + min;
};
const gameRule = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const gameEven = () => {
  const number = getRandomNumber(0, 101);
  const result = [];
  result.push(number);
  if (number % 2 === 0) {
    result.push('yes');
  } else {
    result.push('no');
  }
  return result;
};

const runEven = () => {
  runEngine(gameRule, gameEven);
};

export { getRandomNumber, runEven };

import runEngine from '../index.js';
import { getRandomNumber } from './game-brain-even.js';

const gameRule = 'What is the result of the expression?';

const getOperator = () => {
  const operation = ['+', '-', '*'];
  return operation[getRandomNumber(0, 3)];
};

const getOperation = (operand1, operand2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }
  return result;
};

const gameIsEqual = () => {
  const numOne = getRandomNumber(0, 101);
  const numTwo = getRandomNumber(0, 101);
  const operator = getOperator();
  const result = [];
  result.push(`${numOne} ${operator} ${numTwo}`);
  result.push(getOperation(numOne, numTwo, operator));
  return result;
};

export default () => {
  runEngine(gameRule, gameIsEqual);
};

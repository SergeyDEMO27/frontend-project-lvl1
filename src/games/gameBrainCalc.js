import runEngine from '../index.js';
import getRandomNumber from '../util.js';

const gameRule = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length)];
};

const executionMathOperation = (numberOne, numberTwo, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    default:
      throw new Error(`Оператор ${operator} не поддерживается`);
  }
  return result;
};

const runGameRound = () => {
  const numberOne = getRandomNumber(0, 101);
  const numberTwo = getRandomNumber(0, 101);
  const operator = getOperator();
  const question = `${numberOne} ${operator} ${numberTwo}`;
  const answer = executionMathOperation(numberOne, numberTwo, operator).toString();
  const result = [question, answer];
  return result;
};

export default () => {
  runEngine(gameRule, runGameRound);
};

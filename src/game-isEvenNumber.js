import readlineSync from 'readline-sync';
import { nameOfUser } from './cli.js';

export default () => {
  let count = 0;
  const [userName] = nameOfUser;

  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');

  const getRandomNumber = () => {
    const min = Math.ceil(0);
    const max = Math.ceil(100);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const isEven = (isEvenNumber, answer) => {
    let opAnswer = 'yes';
    if (answer === 'yes') {
      opAnswer = 'no';
    }
    if ((isEvenNumber % 2 === 0 && answer === 'yes') || (isEvenNumber % 2 !== 0 && answer === 'no')) {
      count += 1;
      return 'Correct!';
    }
    count = 0;
    return `'${answer}' is wrong answer ;(. Correct answer was '${opAnswer}'\nLet's try again, ${userName}!`;
  };

  while (count < 3) {
    const isEvenNumber = getRandomNumber();

    console.log(`Question: ${isEvenNumber} `);

    const answer = readlineSync.question('Your answer: ');

    console.log(isEven(isEvenNumber, answer));

    if (count === 0) {
      break;
    }
  }

  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

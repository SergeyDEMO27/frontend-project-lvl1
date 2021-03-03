import readlineSync from 'readline-sync';
import greetings from './cli.js';

export default (gameRule, runGame) => {
  const nameOfUser = greetings();
  console.log(gameRule);
  const totalRounds = 3;
  for (let i = 1; i <= totalRounds; i += 1) {
    const [question, rightAnswer] = runGame();
    console.log(`Question: ${question}`);
    let answer = readlineSync.question('Your answer: ');
    if (typeof rightAnswer === 'number') {
      answer = parseInt(answer, 10);
    }
    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${nameOfUser}!`);
    }
  }
  return console.log(`Congratulations, ${nameOfUser}!`);
};

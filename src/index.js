import readlineSync from 'readline-sync';
import printGreetUser from './cli.js';

export default (gameRule, runGame) => {
  const userName = printGreetUser();
  console.log(gameRule);
  const totalRounds = 3;
  for (let i = 0; i < totalRounds; i += 1) {
    const [question, correctAnswer] = runGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

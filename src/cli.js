import readlineSync from 'readline-sync';

const nameOfUser = [];
const greetings = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  nameOfUser.push(userName);

  console.log(`Hello, ${userName}!`);
};

export { greetings, nameOfUser };

import getRandom from '../getRandom.js';
import startBrainGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while ((a !== 0) && (b !== 0)) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return String(a + b);
};
const brainGCD = () => {
  const randomNumber1 = getRandom(1);
  const randomNumber2 = getRandom(1);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  const getQuestionAndCorrectAnswer = [question, correctAnswer];
  return getQuestionAndCorrectAnswer;
};
export default () => { startBrainGame(rules, brainGCD); };

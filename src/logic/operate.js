import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let result = 0;

  switch (operation) {
    case '+':
      result = new Big(numOne.plus(numTwo));
      break;
    case '-':
      result = new Big(numOne.minus(numTwo));
      break;
    case 'x':
      result = new Big(numOne.times(numTwo));
      break;
    case '÷':
      result = new Big(numOne.div(numTwo));
      break;
    case '%':
      result = new Big(numOne.div(100).times(numTwo));
      break;
    default:
      break;
  }

  return result.toString();
};

export default operate;

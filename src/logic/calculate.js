import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  return { total, next, operation };
};

export default calculate;

import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (/[0-9]/.test(buttonName)) {
    if (!operation) {
      if (!total || total === '0') return { total: buttonName, next, operation };
      return { total: `${total}${buttonName}`, next, operation };
    }
    if (!next) return { total, next: buttonName, operation };
    return { total, next: `${next}${buttonName}`, operation };
  }

  if ('÷x-+%'.includes(buttonName) && total) {
    return { total, next, operation: buttonName };
  }

  return { total, next, operation };
};

export default calculate;

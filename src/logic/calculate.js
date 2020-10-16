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

  if (buttonName === '.') {
    if (!operation) {
      if (!total) return { total: '0.', next, operation };
      return { total: `${total}.`, next, operation };
    }
    if (!next) return { total, next: '0.', operation };
    return { total, next: `${next}.`, operation };
  }

  if (buttonName === '+/-' && total) {
    if (!operation) {
      return { total: operate(total, '-1', 'x'), next, operation };
    }
    if (!next) {
      return { total, next: operate(total, '-1', 'x'), operation };
    }
    return { total, next: operate(next, '-1', 'x'), operation };
  }

  if (buttonName === '=') {
    return { total: operate(total, next, operation), next: null, operation: null };
  }

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }

  return { total, next, operation };
};

export default calculate;

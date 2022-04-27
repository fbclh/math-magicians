import Operate from '../logic/Operate';

describe('Check the Operate results are correct', () => {
  test('5 + 3 = 8', () => {
    const obj = {
      numberOne: 5,
      numberTwo: 3,
      operation: '+',
    };
    const result = Operate(obj.numberOne, obj.numberTwo, obj.operation);
    expect(result).toBe('8');
  });

  test('5 - 3 = 2', () => {
    const obj = {
      numberOne: 5,
      numberTwo: 3,
      operation: '-',
    };
    const result = Operate(obj.numberOne, obj.numberTwo, obj.operation);
    expect(result).toBe('2');
  });

  test('10 * 3 = 30', () => {
    const obj = {
      numberOne: 10,
      numberTwo: 3,
      operation: 'x',
    };
    const result = Operate(obj.numberOne, obj.numberTwo, obj.operation);
    expect(result).toBe('30');
  });

  test('20 / 2 = 10', () => {
    const obj = {
      numberOne: 20,
      numberTwo: 2,
      operation: '÷',
    };
    const result = Operate(obj.numberOne, obj.numberTwo, obj.operation);
    expect(result).toBe('10');
  });
});

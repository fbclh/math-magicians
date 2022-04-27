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
});

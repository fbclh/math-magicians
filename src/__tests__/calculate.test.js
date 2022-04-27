import Calculate from '../logic/Calculate';

describe('Test Calculate function with calculations to check the results are correct.', () => {
  test('15 + 3 = 18', () => {
    const object = {
      total: 15,
      next: 3,
      operation: '+',
    };
    const result = Calculate(object, '=');
    expect(result.total).toBe('18');
  });

  test('10 - 3 = 7', () => {
    const object = {
      total: 10,
      next: 3,
      operation: '-',
    };
    const result = Calculate(object, '=');
    expect(result.total).toBe('7');
  });

  test('10 * 3 = 10', () => {
    const object = {
      total: 10,
      next: 3,
      operation: 'x',
    };
    const result = Calculate(object, '=');
    expect(result.total).toBe('30');
  });
});

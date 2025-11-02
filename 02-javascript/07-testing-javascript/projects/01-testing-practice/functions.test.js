import {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
} from './functions.js';

describe('capitalize', () => {
  test('capitalizes the first letter of a lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('works with single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('does not change the rest of the string', () => {
    expect(capitalize('hELLO')).toBe('HELLO');
  });
});

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('reverses a string with numbers', () => {
    expect(reverseString('abc123')).toBe('321cba');
  });
});

describe('calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('adds positive and negative numbers', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('subtracts resulting in negative', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('multiplies negative numbers', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('multiplies positive and negative', () => {
      expect(calculator.multiply(3, -4)).toBe(-12);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divides resulting in decimal', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    test('divides negative numbers', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('divides positive by negative', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });
  });
});

describe('analyzeArray', () => {
  test('returns correct object for example array [1,8,3,4,2,6]', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('calculates average correctly', () => {
    const result = analyzeArray([2, 4, 6, 8]);
    expect(result.average).toBe(5);
  });

  test('finds minimum value correctly', () => {
    const result = analyzeArray([5, 2, 9, 1, 7]);
    expect(result.min).toBe(1);
  });

  test('finds maximum value correctly', () => {
    const result = analyzeArray([5, 2, 9, 1, 7]);
    expect(result.max).toBe(9);
  });

  test('calculates length correctly', () => {
    const result = analyzeArray([1, 2, 3, 4, 5]);
    expect(result.length).toBe(5);
  });

  test('works with single element array', () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test('works with negative numbers', () => {
    expect(analyzeArray([-5, -2, -10, -1])).toEqual({
      average: -4.5,
      min: -10,
      max: -1,
      length: 4,
    });
  });

  test('works with mixed positive and negative numbers', () => {
    const result = analyzeArray([-3, 0, 3, 6]);
    expect(result.average).toBe(1.5);
    expect(result.min).toBe(-3);
    expect(result.max).toBe(6);
    expect(result.length).toBe(4);
  });

  test('works with decimal numbers', () => {
    const result = analyzeArray([1.5, 2.5, 3.5]);
    expect(result.average).toBeCloseTo(2.5);
    expect(result.min).toBe(1.5);
    expect(result.max).toBe(3.5);
    expect(result.length).toBe(3);
  });

  test('works with array of same numbers', () => {
    expect(analyzeArray([5, 5, 5, 5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 4,
    });
  });
});

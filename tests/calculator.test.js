import { calculator } from '../functions/calculator.js';

describe('adding numbers', () => {
  test('2 + 2 should be 4', () => {
    expect(calculator.add(2,2)).toBe(4);
  })

  test('2 + -2 should be 0', () => {
    expect(calculator.add(2,-2)).toBe(0);
  })

  test('-2 + -2 should be -4', () => {
    expect(calculator.add(-2,-2)).toBe(-4);
  })

  test('10000000000 + 20000000000 should be 30000000000', () => {
    expect(calculator.add(10000000000,20000000000)).toBe(30000000000);
  })

  test('1.2 + 1.3 should be 2.5', () => {
    expect(calculator.add(1.2,1.3)).toBe(2.5);
  })
})

describe('subtracting numbers', () => {
  test('2 - 2 should be 0', () => {
    expect(calculator.subtract(2,2)).toBe(0);
  })

  test('20000000000 - 10000000000 should be 10000000000', () => {
    expect(calculator.subtract(20000000000,10000000000)).toBe(10000000000);
  })
})

describe('multiply values', () => {
  test('3 x 3 should be 9', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
  })

  test('-3 * 3 should be -9', () => {
    expect(calculator.multiply(-3, 3)).toBe(-9);
  })

  test('2000000 x 2000000 should be 40000000000000000', () => {
    expect(calculator.multiply(200000000, 200000000)).toBe(40000000000000000);
  })
})

describe('dividing numbers', () => {
  test('10 / 2 should be 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  })

  test('-9 / 3 should be -3', () => {
    expect(calculator.divide(-9, 3)).toBe(-3);
  })

  test('20000000000 / 10000000000 shouyld be 2', () => {
    expect(calculator.divide(20000000000, 10000000000)).toBe(2);
  })
})
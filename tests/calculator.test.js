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
  
})
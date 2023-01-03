import { reverseString } from '../functions/reverse-string.js';

test('hello to be olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('Reverse an entire string', () => {
  expect(reverseString('Hello, my name is')).toBe('si eman ym ,olleH');
})

test('Numbers in the string are also included', () => {
  expect(reverseString('Hello, my name is 1')).toBe('1 si eman ym ,olleH')
})
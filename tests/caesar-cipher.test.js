import { caesarCipher } from '../functions/caesar-cipher.js';

test('hello should become ifmmp', () => {
  expect(caesarCipher('hello')).toBe('ifmmp');
})

test('HELLO should become IFMMP', () => {
  expect(caesarCipher('HELLO')).toBe('IFMMP');
})

test('azure should become bavsf', () => {
  expect(caesarCipher('azure')).toBe('bavsf');
})

test('hello, bill to be ifmmp, cjmm', () => {
  expect(caesarCipher('hello, bill')).toBe('ifmmp, cjmm');
})

test('hello 123 should become ifmmp 123', () => {
  expect(caesarCipher('hello 123')).toBe('ifmmp 123');
})

test('correct case is retained', () => {
  expect(caesarCipher('lowercase')).toMatch(/[a-z]/);
  expect(caesarCipher('UPPERCASE')).toMatch(/[A-Z]/);
  expect(caesarCipher('MIXEDcase')).toMatch(/[a-zA-Z]/);
  expect(caesarCipher('MIXEDcase')).toBe('NJYFEdbtf')
})


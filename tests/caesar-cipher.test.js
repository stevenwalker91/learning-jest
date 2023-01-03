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



// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
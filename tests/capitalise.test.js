import { capitalise } from '../functions/capitalise.js';

test('first letter of word is caps', () => {
	expect(capitalise('test')).toBe('Test');
});

test('first letter of sentence input is caps', () => {
	expect(capitalise('i am a test')).toBe('I am a test');
});

test('existing capitals are retained', () => {
	expect(capitalise('tESt')).toBe('TESt');
});

test('throws error if first char is a number', () => {
	expect(() => capitalise('1test')).toThrow('First character is a number');
});

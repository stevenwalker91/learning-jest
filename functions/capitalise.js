export const capitalise = (string) => {
	const firstChar = string.charAt(0);
	const hasNumber = /\d/;

	if (hasNumber.test(firstChar)) throw 'First character is a number';

	return firstChar.toUpperCase() + string.slice(1);
};



export const caesarCipher = (string) => {
  const stringToArray = string.split('');
  const returnArray = [];

  for (const character of stringToArray) {
    returnArray.push(letterToUse(character))
  }

  return returnArray.join('');
}

const checkValidLetter = (char) => {
  const regex = /[a-zA-Z]/
  if (regex.test(char)) return true;
}

const letterToUse = (char) => {
  if (!checkValidLetter(char)) return char;
  if (char === 'z') return 'a';
  if (char === 'Z') return 'A';
  return String.fromCharCode(char.charCodeAt(0) + 1)
}
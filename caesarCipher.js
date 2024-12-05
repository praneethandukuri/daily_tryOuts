const LOWERCASE_ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function shiftCharacter(char, alphabet, shiftAmount) {
  const charIndex = alphabet.indexOf(char);
  if (charIndex !== -1) {
    return alphabet[(charIndex + shiftAmount) % 26];
  }
  return char;
}

function isLowerCase(char) {
  return LOWERCASE_ALPHABETS.includes(char);
}

function isUpperCase(char) {
  return UPPERCASE_ALPHABETS.includes(char);
}

function caesarCipher(inputString, shiftAmount) {
  const shift = shiftAmount % 26;
  let encryptString = "";

  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];

    if (isLowerCase(currentChar)) {
      encryptString += shiftCharacter(currentChar, LOWERCASE_ALPHABETS, shift);
    }
    else if (isUpperCase(currentChar)) {
      encryptString += shiftCharacter(currentChar, UPPERCASE_ALPHABETS, shift);
    }
    else {
      encryptString += currentChar;
    }
  }

  return encryptString;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function makeMessage(string, result, expected) {
  const markStatus = getMark(result, expected);
  const expectedSegment = ` caesar cipher "${string}" should be "${expected}"`;
  const actualSegment = ` and is "${result}"`;
  const message = markStatus + expectedSegment + actualSegment;

  console.log(message);
}

function testCeasarCipher(string, shiftAmount, expected) {
  const result = caesarCipher(string, shiftAmount);
  makeMessage(string, result, expected);
}

function testAll() {
  testCeasarCipher("middle-Outz", 2, "okffng-Qwvb");
  testCeasarCipher("abcXYZ", 2, "cdeZAB");
  testCeasarCipher("a-z", 2, "c-b");
  testCeasarCipher("abcdef", 2, "cdefgh");
  testCeasarCipher("HELLO", 2, "JGNNQ");
  testCeasarCipher("hello world!", 2, "jgnnq yqtnf!");
}

testAll();
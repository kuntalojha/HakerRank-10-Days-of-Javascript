'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
let vowels = [];
let consonants = [];
let countVowels = 0;
let countConsonants = 0;
function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === 'a' ||
      s[i] === 'e' ||
      s[i] === 'i' ||
      s[i] === 'o' ||
      s[i] === 'u'
    ) {
      vowels[countVowels] = s[i];
      countVowels++;
    } else {
      consonants[countConsonants] = s[i];
      countConsonants++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (i < countVowels) {
      console.log(vowels[i]);
    } else {
      console.log(consonants[i - countVowels]);
    }
  }
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}

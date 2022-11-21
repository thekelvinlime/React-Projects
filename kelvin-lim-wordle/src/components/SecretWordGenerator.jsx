import {wordsL6, wordsL7} from "./Words";

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function genWord(difficulty) {
  if (difficulty === "normal") {
    const secretWord = wordsL6[randomNumber(0, wordsL6.length - 1)].toUpperCase();
    //console.log(secretWord)
    return secretWord;
  } else if (difficulty === "hard") {
    const secretWord = wordsL7[randomNumber(0, wordsL7.length - 1)].toUpperCase();
    //console.log(secretWord)
    return secretWord;
  }
}

/*
Write a program that takes any number of command line arguments, converts each to pig latin
then puts the translated words together into one sentence logged to the console.
Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.
*/

// take input str from command line
const str = process.argv.slice(2);
console.log(`----\ninput: ${str.join(' ')}`);
// refactor 2
const pigLatin = str.map(word => `${word.slice(1)}${word[0]}ay`);
// display output as a string
console.log(pigLatin.join(' '));

// translated func
// let translated = [];
// const pigLatin = str => {
//   for (let word of str) {
//     translated.push(word.slice(1) + word[0] + 'ay');
//   }
//   return translated;
// };

// refactor 1
// const pigLatin = str => {
//   for (let word of str) {
//     translated.push(`${word.slice(1)} ${word[0]}ay`);
//   }
//   return translated;
// };
// console.log(`-> ${pigLatin(str).join(' ')}\n----`);
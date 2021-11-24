// Write a program that takes a single parameter
// from the command line, a number, and rolls that
// many six-sided dice (range 1 -> 6)

const rollTime = process.argv.slice(2); // take input from command line

// Function to generate random int numbers in the range
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rollDice = rollTime => {
  let result = [];
  for (let i = 0; i < rollTime; i++) {
    // Dice 6-sided: get random number 1 -> 6.
    result.push(getRandomIntInclusive(1, 6));
  }
  return result;
};
console.log(`Rolled ${rollTime} dice: ${rollDice(rollTime).join(', ')}`);

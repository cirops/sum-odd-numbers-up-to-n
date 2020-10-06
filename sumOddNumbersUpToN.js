// Given targetNumber (positive integer), returns the sum of all odd numbers up to targetNumber
const sumOddNumbersUpTo = (targetNumber) => {
  if(!Number.isInteger(targetNumber) || targetNumber < 0) throw new Error('Must be a positive integer.');
  if (targetNumber % 2) targetNumber += 1;
  return targetNumber * targetNumber / 4;
}

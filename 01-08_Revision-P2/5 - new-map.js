/* 5 - Reescreva a função .map do javascript utilizando o for. */
const numbers = [1, 2, 3, 4, 5];

const map = (numbers, doubleNumber) => {
  let array = []
  for(let i = 0; i < numbers.length; i++) {
    array[i] = doubleNumber(numbers[i])
  }
  return array
}

const doubledNumbers = map(numbers, function (element) {
  return element * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
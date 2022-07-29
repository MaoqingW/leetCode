/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = [];
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      result.push('FizzBuzz')
    } else if (index % 3 === 0) {
      result.push('Fizz')
    } else if (index % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(String(index))
    }
  }
  return result
};

console.log(fizzBuzz(1));

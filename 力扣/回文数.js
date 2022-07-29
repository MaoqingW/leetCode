/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  return String(x) === String(x).split('').reverse().join('')
};
const a = -1123211
let b = isPalindrome(a)
console.log(b);

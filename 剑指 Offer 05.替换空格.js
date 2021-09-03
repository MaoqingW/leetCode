/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  let result = '';
  for (const str of s) {
    result += str === ' ' ? '%20' : str;
  }
  return result
};

const s = "We are happy.";
const a = replaceSpace(s)
console.log(a);

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replaceAll('dog', 'monkey'));

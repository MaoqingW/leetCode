/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let maxCount = 0;
  let curCount = 0;

  for (let index = 0, len = s.length; index < len; index++) {
    switch (s[index]) {
      case '(':
        maxCount = ++curCount > maxCount ? curCount : maxCount;
        break;
      case ')':
        curCount--;
        break;
    
      default:
        break;
    }
  }
  return maxCount;
};

const str = '((()))()(((((())df))11))'
// const str = '(1+(2*3)+((8)/4))+1';
// const str = '(1)+((2))+(((3)))'
// const str = '1+(2*3)/(2-1)'
// const str = "1";

const result = maxDepth(str);

console.log(result);

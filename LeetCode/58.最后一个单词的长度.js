/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // const arr = s.split(' ')
  // for (let index = arr.length - 1; index >= 0; index--) {
  //   if(arr[index].length > 0){
  //     return arr[index].length
  //   }
  // }
  let end;
  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] === " ") {
      if (end) {
        return end - index;
      }
    } else {
      if (!end) {
        end = index;
      }
      if (index === 0) {
        return end - index + 1;
      }
    }
  }
};

// const s = " a    ";
const s = "aaa";
// const s = "Hello World"
// const s = "   fly me   to   the moon  ";

// const s = "Hello World"

console.log(lengthOfLastWord(s));

// [1, 2, 3, 4, 5, 6, 7, 8].find;

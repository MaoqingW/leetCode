/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
  let index = 0;
  const len = t.length;
  while (index < len) {
    const char = t[index]
    let markIndex = s.indexOf(char)
    if(markIndex > -1){
      s = s.slice(0,markIndex) + s.slice(markIndex + 1,s.length)
    }else{
      return char
    }
    index++
  }
};

let s = "abcd", t = "aabcd"
// let s = "a", t = "aa"
// let s = "", t = "a"

console.log(findTheDifference(s,t));

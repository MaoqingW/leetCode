/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  while (ransomNote.length > 0) {
    if(magazine.includes(ransomNote[0])){
      magazine = magazine.replace(ransomNote[0],'')
      ransomNote = ransomNote.slice(1)
    }else{
      return false;
    }
  }
  return true
};
let ransomNote = 'ab3'
let magazine = 'aba333'
console.log(canConstruct(ransomNote,magazine));


// console.log('1'.slice(1));
// let a = '123123123'
// a[0] = '0'
// console.log(a);


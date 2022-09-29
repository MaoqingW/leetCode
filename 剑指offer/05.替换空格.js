/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  // // for()
  // let index = 0;
  // while(index < s.length){
  //   if(s[index] === ' '){
  //     s = s.slice(0,)
  //   }
  // }

  // return s.split(' ').join('%20')
  return s.replaceAll(' ','%20')

};

console.log(replaceSpace(s));


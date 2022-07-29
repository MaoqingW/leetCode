/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  function repeat(len) {
    let res = '';
    let index = 0;
    while (index++ < len) {
      res+=' '
    }
    return res
  }
  let spaceCount = 0;

  for (let index = 0; index < text.length; index++) {
    const str = text.charAt(index);
    console.log(str);
    if(str === ' '){
      spaceCount++;
    }
  }


  const list = text.split(/\s+/).filter(item=>item.length > 0);
  const avg = Math.floor(spaceCount / (list.length - 1));
  const remainder = list.length > 1 ? spaceCount % (list.length - 1):0;
  return list.join(repeat(avg)) + repeat(remainder);


};


const text = "  this   is  a sentence ";
// const text = " practice   makes   perfect";
// const text = "hello   world"
// const text = "  walks  udp package   into  bar a"
// const text = 'a'


// console.log(text.split(/\s+/));


// reorderSpaces('123123')

let result = reorderSpaces(text)

console.log(result);

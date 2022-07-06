/**
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function(num) {
   let result = '';
   const oldNum = num;
   num = Math.abs(num)
   if(num === 0){
     return '0'
   }
   while (num > 0) {
    result = `${num % 7}${result}`;
    num = Math.floor(num / 7);
   }
   return `${oldNum >= 0 ? '' : '-'}${result}`

};

let num = -7;

console.log(convertToBase7(num));

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  const maxValue = Math.pow(2,31)
  if(x > maxValue - 1 || x < 0 - maxValue ){
    return 0
  }
  x = String(x).split('').reverse().join('')
 if(x.endsWith('-')){
   x = 0 - parseInt(x.slice(0,x.length - 1))
 }else{
   x = parseInt(x)
 }
 if(x > maxValue - 1 || x < 0 - maxValue ){
   return 0
 }else{
   return x
 }
};
// console.log(Number.MAX_VALUE);
// 
const res = reverse(-2147483412)
console.log(res);
// console.log(-2<<31);

// console.log(2 << 30 * 2);
1563847412
4294967296

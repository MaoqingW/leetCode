/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  target = target < 0 ? -target : target;

  /***** 方法一 *****/
  // let i = 1;
  // let s = 0;
  // while (true) {
  //   s = (i * i + i) / 2;
  //   if(s >= target && (s - target) % 2 === 0){
  //     return i
  //   }
  //   i+=1;
  // }

  /***** 方法二 *****/

  let k = 0;
  while (target > 0) {
    k += 1;
    target -= k;
  }

  return target % 2 == 0 ? k : k + 1 + (k % 2);
};

const target = 2;

console.log(reachNumber(target));

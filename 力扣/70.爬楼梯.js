/**
 * @param {number} n
 * @return {number}
 */
// 最简单的解法，但超出时间限制。
 var climbStairs1 = function(n) {
  
  if(n === 1){
    return 1
  }
  if(n === 2){
    return 2
  }
  return climbStairs1(n - 1) + climbStairs1(n - 2);
};

// 尝试使用动态规划
// 和斐波那契数列基本是一样的逻辑。没啥好说的。
var climbStairs2 = function(n) {
  
  if(n === 1){
    return 1
  }
  if(n === 2){
    return 2
  }
  let l1 = 1;
  let l2 = 2;
  let index = 3;
  let result = 0;
  while (index <= n) {
    result = l1 + l2;
    l1 = l2;
    l2 = result
    index++;
  }
  return result;
};

let a = 10;


console.log(climbStairs1(a));
console.log(climbStairs2(a));

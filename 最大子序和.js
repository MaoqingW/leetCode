/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  //  暴力解法
  const len = nums.length;
  let maxSum = null;
  if (len === 1) {
    return nums[0];
  }
  if (len === 2) {
    return Math.max(nums[0], nums[1], nums[0] + nums[1]);
  }
  for (let index1 = 0; index1 < len; index1++) {
    for (let index2 = index1 + 1; index2 < len; index2++) {
      // let a= 1;
      // let a = 1231312312312*12313
      // const sum = nums.slice(index1,index2 + 1).reduce((total,item)=>total + item,0)

      // const max = Math.max(nums[index1],nums[index2],sum);
      // if(maxSum === null || max > maxSum){
      //   maxSum = max
      // }
      let total = 0;
      for (let index3 = index1; index3 <= index2; index3++) {
        total += nums[index3];
      }
      const max = Math.max(nums[index1], nums[index2], total);

      if (maxSum === null || max > maxSum) {
        maxSum = max;
      }
    }
  }
  return maxSum;
};

// const nums = [-2,1,-3,4,-1,2,1,-5,4]

const nums1 = [1, 2, 3, 4, 5, 9];

// console.log(maxSubArray(nums));

// 好烦，好像除了暴力法真的想不到别的方法。先这样吧。

/**
 *
 * @param {List<Number>} nums
 */
var maxSubArray2 = function (nums) {
  // 剑指Offer中的解法一。
  // 在一次遍历中，逐步判断当前项与之前的累加和的大小，然后在某些情况下舍弃之前已经计算的和。最后返回一个最大值
  // 由之前穷举所有的子数组O(n2)缩减至O(n).leetcode用时超过78.56%。

  // 添加const len  后，时间超过94.99% 空间超过73.04%.
  // 做过这么多题的最好成绩了
  let total = null;
  let max = null;
  const len = nums.length;
  for (let index = 0; index < len; index++) {
    const num = nums[index];
    if (total === null) {
      total = num;
      max = num;
    } else {
      if (total >= 0 && num >= 0) {
        total += num;
        max = total > max ? total : max;
      } else if (total >= 0 && num < 0) {
        total += num;
      } else if (total < 0 && num >= 0) {
        total = num;
        max = max > num ? max : num;
      } else if (total < 0 && num < 0) {
        if (total >= num) {
          total += num;
        } else {
          total = num;
          max = max > num ? max : num;
        }
      }
    }
  }
  return max;
};
console.log(maxSubArray2([1,-2,0]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// 两个字：丑陋。
 var fourSum = function(nums, target) {
  const numsLen = nums.length;
  if(numsLen < 4){
    return []
  }
  let result = [];

  for (let index1 = 0; index1 < numsLen; index1++) {
    const item1 = nums[index1];
    for (let index2 = index1 + 1; index2 < numsLen; index2++) {
      const item2 = nums[index2];
      for (let index3 = index2 + 1; index3 < numsLen; index3++) {
        const item3 = nums[index3];
        for (let index4 = index3 + 1; index4 < numsLen; index4++) {
          const item4 = nums[index4];
          if(item1 + item2 + item3 + item4 === target){
            result.push([item1,item2,item3,item4]);
            break;
          }
        }
      }
    }
  }
  if(result.length > 1){
    for (let index1 = 0; index1 < result.length - 1; index1++) {
      const item1 = result[index1];
      for (let index2 = index1 + 1; index2 < result.length; index2++) {
        const item2 = result[index2];
        if(item2.every(item=>item1.includes(item)) && item1.every(item=>item2.includes(item))){
          result.splice(index2,1);
          index2--;
        }
      }
    }
  }
  return result;
};



// let nums = [1,0,-1,0,-2,2];
// let target = 0;

// let nums = [2,2,2,2,2];
// let target = 8;

let nums = [-2,-1,-1,1,1,2,2];
let target = 0;

console.log(fourSum(nums,target));





// 想不到暴力法以外的方法，弃

// 先尝试使用暴力解法解一下。

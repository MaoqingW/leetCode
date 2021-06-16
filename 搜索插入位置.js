/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length
  if (len === 0) {
    return nums.push(target);
  } else if (len === 1) {
    if (nums[0] >= target) {
      return 0
    } else {
      return 1
    }
  } else {
    if(target <= nums[0]){
      return 0
    }
    if(target === nums[len - 1]){
      return len - 1
    }
    if(target > nums[len - 1]){
      return len
    }
    for (let index = 0; index < len - 1; index++) {
      const cur = nums[index];
      const next = nums[index + 1];
      if(target > cur && target < next){
        return index + 1;
      }
      if(target === cur){
        return index
      }
    }
  }
};

const nums = [1,3]
const target = 3
console.log(searchInsert(nums,target));

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  for (let index = 1,len = nums.length; index < len; index++) {
    if(nums[index] === nums[index - 1]){
      nums.splice(index--,1)
      len--
    }
  }
};
let a = [1,1,2,2,3,3,3,3,4,5,6]
console.log(removeDuplicates(a));

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let index = 1;
    while (index < nums.length) {
      if(nums.findIndex((item,ind)=> item === nums[index] && ind < index) >= 0){
        nums.splice(index,1);
      }else{
        index++
      }
    }
    return nums
};

// let nums = [0,0,1,1,1,2,2,3,3,4]
let nums = [1,1,2]

console.log(removeDuplicates(nums));

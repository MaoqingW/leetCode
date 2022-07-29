/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  nums.forEach((item,index,arr)=>{
    arr[index] += arr[index - 1] || 0
  }) 
  return nums
};

let testValue = runningSum([1,2,3,4])
console.log(testValue);

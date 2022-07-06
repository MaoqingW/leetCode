/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
   for(let index = 0,len = nums.sort().length; index < len ;index+=2){
     if(nums[index] !== nums[index+1]){
       return nums[index]
     }
   }
};

// let a = [2,3,2,3,1].sort()
// console.log(a);

// let arr = [2,2,1]

let arr = [4,1,2,1,2]

const result = singleNumber(arr)

console.log(result);

// arr.sort()
// console.log(arr);

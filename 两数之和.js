var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length-1; index++) {
        const num1 = nums[index];
   
        for (let index1 = index+1; index1 < nums.length; index1++) {
            const num2 = nums[index1];

            if(num1 + num2 == target){
                return [index,index1]
            }
        }
    }
};

let nums = [-3,4,3,90]
let target = 0
console.log(twoSum(nums,target));

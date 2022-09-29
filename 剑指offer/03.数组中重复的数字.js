/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  let temp;
  let index = 0;
  while(index < nums.length){
    let num = nums[index]
    if(num !== index){
      if(nums[num] !== num){
        temp = nums[num]
        nums[num] = nums[index]
        nums[index] = temp
      }else{
        return num
      }
    }else{
      index++
    }
  }
};

let list = [2, 3, 1, 0, 2, 5, 3]

console.log(findRepeatNumber(list));

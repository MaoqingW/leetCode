/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if(nums[middle] === target){
      return middle
    }else if(nums[middle] < target){
      start = middle + 1;
    }else {
      end = middle - 1;
    }
  }
  return -1
};

// const array = [-1, 0, 3, 5, 9, 12];

// const array =  [-1,0,3,5,9,12];

const array =  [2,5];

// const array = [-1,0,3,5,9,12];

let result = search(array, 5);
console.log(result);

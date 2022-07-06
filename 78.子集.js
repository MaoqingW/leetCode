/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  console.log(nums);

  while (nums.length > 0) {
    if (nums.length === 1) {
      return [[], [nums[0]]];
    }
    const subRes = subsets(nums.filter((item, index) => index !== 0));
    return [
      ...subRes,
      ...subRes.map((item) => {
        return item.concat(nums[0])
      })
    ];
  }
};

// const nums = [1, 2,3,4];
const nums = [0]

const result = subsets(nums);

console.log(result);



// let a =[ [], [ 2 ]].map(item=>item.concat(9))
// console.log(a);

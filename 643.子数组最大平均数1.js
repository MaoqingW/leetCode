/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {

  /**
   * 通过。63+62.
   * 
   * 之前的思路是从第一个元素遍历到长度减k的位置，每次遍历都计算一次总值，但是这样超时了。
   * 后来想到了之前看动态规划时提到的思路，其实相邻的两次计算总值中，都有 k - 1 个值是相同的，
   * 那么相邻两次遍历只需要加上新的遍历项并减去头部的一个值，就可以得出总值了。这样一次遍历就能找出最大值了
   * 
   * 之前的方法虽然看起来也是单次遍历，但是因为k的值是小于等于n，所以其实时间复杂度还是o(N2).
   * 
   */
  
  const numsLen = nums.length;
  let sum = nums.slice(0,k).reduce((total,item)=>total += item);
  let max = sum;
  for (let index = k; index < numsLen; index++) {
    sum = sum + nums[index] - nums[index - k];
    max = sum > max ? sum : max;
  }

  // for (let index = 0; index <= numsLen - k; index++) {
  //   let temp = nums.slice(index,index + k).reduce((total,item)=>total += item);
  //   console.log('temp',temp);
  //   if(index === 0){
  //     max = temp;
  //   }else{
  //     if(temp > max){
  //       max = temp;
  //     }
  //   }
  // }
  return max / k;
};


const list = [10,3,10,1,2,3,4,5]
// const list = [0,1,1,3,3]
const k = 4;


console.log(findMaxAverage(list,k));


// 超时了。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 先合并数组，然后再找中位数。不明白为什么能是困难难度的题目
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedList = [];
  let i1 = 0,i2 = 0;
  while (i1 < nums1.length || i2 < nums2.length) {
    if(nums1[i1] < nums2[i2]){
      mergedList.push(nums1[i1++])
    }else if(nums1[i1] > nums2[i2]){
      mergedList.push(nums2[i2++]);
    }else if(nums1[i1] === nums2[i2]){
      mergedList.push(nums1[i1++],nums2[i2++]);
    }else if(isNaN(nums1[i1])){
      mergedList.push(nums2[i2++]);
    }else if(isNaN(nums2[i2])){
      mergedList.push(nums1[i1++]);
    }
  }
  const len = mergedList.length;
  if(len === 1){
    return mergedList[0]
  }else if(len % 2 === 0){
    return (mergedList[len / 2 - 1] + mergedList[len / 2]) / 2
  }else if(len % 2 === 1){
    return mergedList[(len - 1) / 2]
  }
};

const nums1 = [1],
  nums2 = [];

let res = findMedianSortedArrays(nums1, nums2);
console.log(res);

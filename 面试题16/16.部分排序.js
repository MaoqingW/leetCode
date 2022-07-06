/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  /****** 方法一 ******/
  // let start = -1,
  //   end = -1;

  // for (let i = 0, len = array.length; i < len - 1; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     if (array[i] > array[j]) {
  //       start = i;
  //       break;
  //     }
  //   }
  //   if (start !== -1) {
  //     break;
  //   }
  // }

  // for (let len = array.length, i = len - 1; i >= 1; i--) {
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (array[i] < array[j]) {
  //       end = i;
  //       break;
  //     }
  //   }
  //   if (end !== -1) {
  //     break;
  //   }
  // }
  // return [start,end]

  /****** 方法二 ******/
  let max = array[0];
  const len = array.length;
  let left = -1;
  for (let i = 1; i < len; i++) {
    if (array[i] >= max) {
      max = array[i];
    } else {
      left = i;
      // break;
    }
  }

  let min = array[len - 1];
  let right = -1;
  for (let i = len - 1; i >= 0; i--) {
    if (array[i] <= min) {
      min = array[i];
    } else {
      right = i;
      // break;
    }
  }
  return [right,left];
  // console.log(left,right);
};

const arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

subSort(arr);

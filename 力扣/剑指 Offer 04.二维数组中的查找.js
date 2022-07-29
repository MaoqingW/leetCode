/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  let x = 0,
    y = matrix[0].length - 1;
  while (x < matrix.length && y >= 0) {
    if (target < matrix[x][y]) {
      y--;
    } else if (target > matrix[x][y]) {
      x++;
    } else {
      return true;
    }
  }
  return false;
};

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 0;

const a = findNumberIn2DArray(matrix, target);
console.log(a);


/**
 * 对于这种二维数组的查询，最简单直接的方法当然是暴力穷举-嵌套循环遍历。
 * 不过这样并不能充分利用矩阵数据的特点，如果是没有任何规律的矩阵数据的话，可能只能使用穷举遍历，
 * 但是如果充分利用数据规律的话，就可以不断的减少遍历的数据量。使用左下角的值也能达到同样的效果。
 * 
 * 对于本题目而言，规律就是，每一个右上角的数据，都是其所在列的最小值，同时也是其所在行的最大值。
 * 通过比较此值与要寻找的值的大小关系，即可确定改行或者列中有无可能存在要寻找的值。
 */

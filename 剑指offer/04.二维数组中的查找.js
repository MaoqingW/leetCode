/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if(matrix.length === 0 || matrix[0].length === 0){
    return false
  }
  let n = matrix.length,m = matrix[0].length;
  let x = 0,y = m - 1;
  while(x < n && y >= 0){
    if(target < matrix[x][y]){
      y--
    }else if(target > matrix[x][y]){
      x++
    }else{
      return true
    }
  }
  return false
};

let matrix = [
  [1,  4,  7,  11, 15],
  [2,  5,  8,  12, 19],
  [3,  6,  9,  16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
// let matrix = [[1]]

let target = 20;

const result = findNumberIn2DArray(matrix, target);
console.log(result);

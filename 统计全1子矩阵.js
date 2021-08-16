/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  const lx = mat.length;
  const ly = mat[0].length;
  let m = 1,
    n = 1;
  let count = 0;
  while (m <= lx && n <= ly) {
    for (let x = 0; x < lx - (m - 1); x++) {
      for (let y = 0; y < ly - (n - 1); y++) {
        let isPure = true;
        for (let sx = 0; sx < m; sx++) {
          for (let sy = 0; sy < n; sy++) {
            if (mat[sx + x][sy + y] !== 1) {
              isPure = false;
              break;
            }
          }
          if(!isPure){
            break;
          }
        }
        isPure && count++;
      }
    }

    if(m > lx || n > ly){
      break;
    }else if(n == ly){
      m++;
      n = 1;
    }else{
      n++;
    }
  }
  return count;
};

// console.log(
//   numSubmat([
//     [1, 0, 1],
//     [0, 1, 0],
//     [1, 0, 1],
//   ])
// );
// console.log(numSubmat([[1,1],[1,1]]));

// console.log(numSubmat([[1]]));

console.log(numSubmat([[0,1,1,0],[0,1,1,1],[1,1,1,0]]));

// console.log(numSubmat([[1,0,1],[1,1,0],[1,1,0]]));

// console.log(numSubmat()
// console.log(numSubmat([[1,1,1,1,1,1]]))



/**
 * 这个方法应该算是暴力解法，就是通过便利素有给定矩阵的所有子矩阵，计算有多少个是纯1组成的，运行了几个例子也成功了，但是在leetcode上超时了。
 * 又要想别的方法。
 * 我知道在算法这一块，有不少所谓的一些方法可以节省遍历的次数，但是我没有相关知识，也没有很好的数学基础，一般就只能想到最简单的穷举法。可是又老是超时，
 * 
 * 我再思考一下有没有能减少时间复杂度的方法，找不到的话就先算了。
 * 
 * 
 * 给定的矩阵中，有一部分数字是0，是不是还能有一种方法，就是计算出所以在所有的子矩阵中除去所有含0的矩阵，那么剩下的就是纯1矩阵。
 * 
 * 
 * 额外加了一个break，竟然可以了。但是耗时竟然只超过了7.14%，怕也只是将将过线。不过总算过了。看一下别人有没有好的思路吧。
 */

/**
 * 题目要求：输入随意一个数字，输出一个行数、列数皆为该数字，但数字蛇形递增的数阵。
 * 例如：输入3，输出：
 *   1， 2， 3，
 *   8， 9， 4，
 *   7， 6， 5
 * 
 * 模拟数字的前进方向，区分四种方向对应的四种条件。
 * 向右：左、上无数字，或者数字不为0
 * 向下：上、右无数字，或者数字不为0
 * 向左：下、右无数字，或者数字不为0
 * 向上：左、下无数字，或者数字不为0
 * 
 * 或者换一种方法：
 * 向右：右、下数字为0
 * 向下：下数字为0
 * 向左：左数字为0
 * 向上：上数字为0
 * 
 */

function snakeMatrix(num) {
  // const arrs = new Array(num).fill(()=>new Array(num).fill(0))
  // const arrs = new Array(num).map(()=>new Array(num).fill(0))

  const arrs = []
  for (let index = 0; index < num; index++) {
    arrs[index] = []
    for(let index1 = 0;index1 < num; index1++){
      arrs[index][index1] = 0
    }
  }
  arrs[0][0] = 1;

  let x = 0,y = 0;
  let count = 1;
  const total = Math.pow(num,2)

  while(count < total){
    if(arrs[x] && arrs[x + 1] && arrs[x][y + 1] === 0 && arrs[x + 1][y] === 0){
      arrs[x][++y] = ++count
    }else if(arrs[x + 1] && arrs[x + 1][y] === 0){
      arrs[++x][y] = ++count
    }else if(arrs[x] && arrs[x][y - 1] === 0){
      arrs[x][--y] = ++count
    }else if(arrs[x - 1] && arrs[x - 1][y] === 0){
      arrs[--x][y] = ++count
    }else if(arrs[x] && arrs[x][y + 1] === 0){
      arrs[x][++y] = ++count
    }else{
      // arrs.forEach(item=>{
      //   // console.log(item);

      // })
      console.log('should return');
      return 
    }
  }
  

  // console.log(arrs);
  arrs.forEach(arr=>{
    // console.log(String(arr).padStart(3,'0'));
    
    
  })
}

snakeMatrix(4)

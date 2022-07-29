/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  //  我去，从昨天想到现在，以为那么复杂的问题，竟然一下就过了。吐血。
  // 表现还可以，分别是52 和 66 的击败率。

  // 去掉前面的长度判断，耗时到了78，不过内存消耗变大了。不过也都差不多，不过既然下面的代码可以正常处理这种输入，那就不再做判断了。
  //  if(prices.length < 2){
  //    return 0;
  //  }
   let mark = prices[0];
   let max = 0;
   prices.forEach(item=>{
    if(item - mark > max){
      max = item - mark;
    }else if(item < mark){
      mark = item;
    }
   })
   return max;
   
  //  变量越多，逻辑越复杂。四个变量，弃，一定还有更简单的方法。
  //  let x1 = prices[0],y1 = prices[0];
  //  let x2 = 0,y2 = 0;
  //  prices.forEach(item => {
  //    if(item < x1){
  //      x2 = item
  //    }else if(item > y1){
  //      y2 = item
  //    }

  //    if(y2 - x2 > y1 - x1){
  //      x1 = x2;
  //      y1 = y2;
  //    }
  //  });
};


const list = [7];

console.log(maxProfit(list))

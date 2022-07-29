/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */

// var findRadius = function (houses, heaters) {
//   let radius = 0;
//   let keep = true;

//   while (keep) {
//     const areas = heaters.map((item) => {
//       return {
//         start: item - radius,
//         end: item + radius,
//       };
//     });

//     for (let index2 = 0; index2 < areas.length; index2++) {
//       const area = areas[index2];
//       for (let index1 = 0; index1 < houses.length; index1++) {
//         const item = houses[index1];
//         if (item >= area.start && item <= area.end) {
//           houses.splice(index1--, 1);
//           if (houses.length === 0) {
//             return radius;
//           }
//         }
//       }
//     }
//     radius++;
//   }
// };

var findRadius = function (houses,heaters) {
  // 所谓最大半径，其实也就取决于某一个房子和加热器之间的距离。
  // 可以先求出每个房子到达加热器的最短距离，然后在所有的最短距离中比较出最大的那个，就是最后的结果。

  // 这个方法总算是通过了。不过时间上还是只超过了5.19%，在内存上表现好一点，超过了78.57%.
  // 本质来讲，这个也算是一种暴力解法，其中也用到了两层的嵌套for循环，而且用到的abs() min() max()也不清楚性能表现。
  // 先这样吧，以后如果有更好的方法，想起来就再弄一下。
  const housesLen = houses.length;
  const heatersLen = heaters.length;

  let totalMinDistence = null;
  for (let index1 = 0; index1 < housesLen; index1++) {
    const house = houses[index1];
    let minDistence = null;
    for (let index2 = 0; index2 < heatersLen; index2++) {
      const heater = heaters[index2];
      if(minDistence === null){
        minDistence = Math.abs(house - heater);
      }else{
        minDistence = Math.min(Math.abs(house - heater),minDistence);
      }
    }

    if(totalMinDistence === null){
      totalMinDistence = minDistence;
    }else{
      totalMinDistence = Math.max(totalMinDistence,minDistence);
    }
  }
  return totalMinDistence;
}

// console.log(findRadius([1,2,3,4],[1,4]));
// console.log(findRadius([1,2,3,4,5],[2]));

const data1 = [
  282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878,
  458777923,
];
const data2 = [
  823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327,
  16531729, 823378840, 143542612,
];

// const data1 = [1,2,3];
// const data2 = [2]

// const data1 = [100,200,300]
// const data2 = [150];

// const data1 = [100]
// const data2 = [1,50,100]

// const data1 = [1,2,3,4];
// const data2 = [1,4];

console.log(findRadius(data1, data2));



// for (let index1 = 0; index1 < 5; index1++) {
//   console.log(`index1:${index1}`);
//   // if(index > 2){
//   //   break;
//   // }
//   for (let index2 = 0; index2 < 5; index2++) {
//     console.log(`index2:${index2}`);
//     if(index2 > 2){
//       break
//     }
//   }
// }

/**
 * 思路1：暴力解法。
 * 
 * 通过在加热器位置不断增加半径，可以得到所有加热器可以覆盖的范围，然后遍历房子的位置，当所有房子的位置刚好都包含在加热器范围内时，
 * 此时的半径就是需要的最小半径。提交结果超出了时间限制，即使在循环中增加了break或者逐步减少要遍历的范围，可还是超时。
 * 确实可以理解，毕竟是一个 while 中嵌套了两个 for 循环。
 */

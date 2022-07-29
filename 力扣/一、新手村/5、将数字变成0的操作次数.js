/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
  let count = 0
    while (num !== 0) {
      if(num % 2 === 0){
        num = num / 2
      }else{
        num--
      }
      count++
    }
    return count
};


console.log(numberOfSteps(2));

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  switch (carType) {
    case 1:
      if (this.big > 0) {
        this.big--;
        return true;
      }else{
        return false;
      }
      break;
    case 2:
      if (this.medium > 0) {
        this.medium--;
        return true;
      }else{
        return false;
      }
      break;
    case 3:
      if (this.small > 0) {
        this.small--;
        return true;
      }else{
        return false;
      }
      break;

    default:
      break;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */


  var obj = new ParkingSystem(1, 1, 0);
  var param_1;

  param_1 = obj.addCar(1)
  console.log(param_1);
  
  param_1 = obj.addCar(2)
  console.log(param_1);
  
  param_1 = obj.addCar(3)
  console.log(param_1);
  
  param_1 = obj.addCar(1)
  console.log(param_1);


  // 一道关于对象的，极极极简单的题目。与其说是题目，不如说是熟悉对象概念的demo更合适。
